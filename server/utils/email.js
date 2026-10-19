import nodemailer from 'nodemailer'

/**
 * Identify configured email provider.
 * Priority:
 * 1. Brevo REST API (BREVO_API_KEY)
 * 2. Brevo SMTP (BREVO_SMTP_KEY or EMAIL_SERVICE === 'brevo')
 * 3. Gmail / Custom SMTP fallback (EMAIL_SERVICE === 'gmail' or EMAIL_USER + EMAIL_PASS)
 */
export const getEmailConfig = () => {
  const brevoApiKey = process.env.BREVO_API_KEY?.trim()
  if (brevoApiKey) {
    return {
      provider: 'brevo-api',
      senderEmail: process.env.BREVO_SENDER_EMAIL?.trim() || process.env.EMAIL_USER?.trim(),
      apiKey: brevoApiKey,
    }
  }

  const isBrevoSmtp =
    process.env.EMAIL_SERVICE?.toLowerCase() === 'brevo' ||
    Boolean(process.env.BREVO_SMTP_KEY) ||
    Boolean(process.env.SMTP_HOST?.includes('brevo'))

  const user = (process.env.BREVO_SMTP_USER || process.env.EMAIL_USER)?.trim()
  const pass = (process.env.BREVO_SMTP_KEY || process.env.EMAIL_PASS)?.replace(/\s+/g, '')

  if (isBrevoSmtp && user && pass) {
    return {
      provider: 'brevo-smtp',
      host: process.env.SMTP_HOST?.trim() || 'smtp-relay.brevo.com',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      user,
      pass,
    }
  }

  if (user && pass) {
    return {
      provider: process.env.EMAIL_SERVICE || 'gmail',
      user,
      pass,
    }
  }

  return { provider: 'none' }
}

export const getEmailStatus = () => {
  const config = getEmailConfig()
  return {
    configured: config.provider !== 'none',
    provider: config.provider,
  }
}

/**
 * Creates Nodemailer transporter when using SMTP.
 */
const getSmtpTransporter = (config) => {
  if (config.provider === 'brevo-smtp') {
    return nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: false, // Port 587 uses STARTTLS
      auth: {
        user: config.user,
        pass: config.pass,
      },
    })
  }

  if (config.user && config.pass) {
    return nodemailer.createTransport({
      service: config.provider || 'gmail',
      auth: {
        user: config.user,
        pass: config.pass,
      },
    })
  }

  return null
}

/**
 * Sends transactional email using Brevo v3 REST API.
 */
const sendViaBrevoApi = async ({ apiKey, fromEmail, fromName, toEmail, toName, replyTo, subject, textContent, htmlContent, isAutoReply = false }) => {
  const payload = {
    sender: {
      name: fromName,
      email: fromEmail,
    },
    to: [
      {
        email: toEmail,
        name: toName || toEmail,
      },
    ],
    subject,
    htmlContent,
    textContent,
    headers: {
      'Auto-Submitted': isAutoReply ? 'auto-replied' : 'auto-generated',
      'X-Auto-Response-Suppress': 'All',
      'Precedence': isAutoReply ? 'bulk' : 'list',
      'X-Mailer': 'DevamPortfolio/1.0',
    },
  }

  if (replyTo) {
    payload.replyTo = {
      email: replyTo,
      name: toName || replyTo,
    }
  }

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Brevo API Error (${response.status}): ${errorText}`)
  }

  return await response.json()
}

/**
 * Sends both the admin alert and the auto-reply with spam-resistant headers and clean typography.
 */
export const sendContactEmails = async ({ name, email, message }) => {
  const config = getEmailConfig()
  if (config.provider === 'none') {
    console.warn('[Email Notice] No email provider configured. Submission saved to DB without dispatching email.')
    return { success: false, reason: 'unconfigured' }
  }

  const cleanName = name.trim()
  const cleanEmail = email.trim()
  const cleanMessage = message.trim()
  const recipient = process.env.NOTIFICATION_RECIPIENT || 'devamg759@gmail.com'
  const senderEmail = config.senderEmail || config.user || 'devamgupta.business@gmail.com'

  const formattedDate = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  })

  // 1. Admin Alert Content (Clean, text-heavy, no emojis in subject for anti-spam)
  const adminSubject = `[Portfolio Contact] New message from ${cleanName}`
  const adminText = [
    'Portfolio Contact Form Submission',
    '---------------------------------',
    `From: ${cleanName}`,
    `Email: ${cleanEmail}`,
    `Date: ${formattedDate} (IST)`,
    '',
    'Message Content:',
    cleanMessage,
  ].join('\n')

  const escapedMessage = cleanMessage.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const adminHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px;">
      <div style="border-bottom: 2px solid #2563eb; padding-bottom: 12px; margin-bottom: 20px;">
        <h2 style="color: #111827; margin: 0 0 4px 0; font-size: 18px; font-weight: 700;">New Contact Form Submission</h2>
        <p style="color: #6b7280; margin: 0; font-size: 13px;">Received on ${formattedDate} (IST)</p>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 14px;">
        <tr>
          <td style="padding: 6px 0; color: #4b5563; font-weight: 600; width: 80px;">From:</td>
          <td style="padding: 6px 0; color: #111827;">${cleanName}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #4b5563; font-weight: 600;">Email:</td>
          <td style="padding: 6px 0;"><a href="mailto:${cleanEmail}" style="color: #2563eb; text-decoration: none;">${cleanEmail}</a></td>
        </tr>
      </table>

      <div style="background-color: #f9fafb; border-left: 3px solid #2563eb; border-radius: 4px; padding: 14px; margin-bottom: 20px;">
        <div style="margin: 0 0 6px 0; font-weight: 600; color: #374151; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</div>
        <div style="color: #1f2937; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${escapedMessage}</div>
      </div>

      <div style="text-align: center; margin-top: 20px; padding-top: 16px; border-top: 1px solid #f3f4f6;">
        <a href="mailto:${cleanEmail}" style="display: inline-block; background-color: #111827; color: #ffffff; text-decoration: none; padding: 9px 20px; border-radius: 6px; font-weight: 600; font-size: 13px;">Reply to ${cleanName}</a>
      </div>
    </div>
  `

  // 2. User Auto-Reply Content (Clean transactional receipt)
  const autoReplySubject = `Message received - Devam Gupta Portfolio`
  const autoReplyText = [
    `Hi ${cleanName},`,
    '',
    'Thank you for reaching out through my portfolio. I have received your message and will review it and get back to you shortly.',
    '',
    'Summary of your message:',
    `"${cleanMessage}"`,
    '',
    'Best regards,',
    'Devam Gupta',
    'Full-Stack Developer',
    'https://portfoliodevam.netlify.app',
  ].join('\n')

  const autoReplyHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px;">
      <h2 style="color: #111827; margin: 0 0 12px 0; font-size: 18px; font-weight: 700;">Message Received</h2>
      <p style="color: #374151; font-size: 14px; line-height: 1.6; margin: 0 0 14px 0;">
        Hi <strong>${cleanName}</strong>,
      </p>
      <p style="color: #374151; font-size: 14px; line-height: 1.6; margin: 0 0 18px 0;">
        Thank you for reaching out through my portfolio. I have received your message and will review it and get back to you as soon as possible.
      </p>

      <div style="background-color: #f9fafb; border-left: 3px solid #10b981; border-radius: 4px; padding: 14px; margin-bottom: 20px;">
        <div style="margin: 0 0 6px 0; font-weight: 600; color: #374151; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Your Message Copy</div>
        <div style="color: #4b5563; line-height: 1.6; font-size: 14px; white-space: pre-wrap;">${escapedMessage}</div>
      </div>

      <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; margin-top: 20px; font-size: 13px; color: #4b5563;">
        <div style="font-weight: 600; color: #111827;">Devam Gupta</div>
        <div>Full-Stack Developer</div>
        <div><a href="https://portfoliodevam.netlify.app" style="color: #2563eb; text-decoration: none;">portfoliodevam.netlify.app</a></div>
      </div>
    </div>
  `

  // Send via Brevo REST API
  if (config.provider === 'brevo-api') {
    try {
      const adminPromise = sendViaBrevoApi({
        apiKey: config.apiKey,
        fromEmail: senderEmail,
        fromName: 'Devam Portfolio',
        toEmail: recipient,
        toName: 'Devam Gupta',
        replyTo: cleanEmail,
        subject: adminSubject,
        textContent: adminText,
        htmlContent: adminHtml,
        isAutoReply: false,
      })

      const replyPromise = sendViaBrevoApi({
        apiKey: config.apiKey,
        fromEmail: senderEmail,
        fromName: 'Devam Gupta',
        toEmail: cleanEmail,
        toName: cleanName,
        replyTo: recipient,
        subject: autoReplySubject,
        textContent: autoReplyText,
        htmlContent: autoReplyHtml,
        isAutoReply: true,
      })

      const results = await Promise.allSettled([adminPromise, replyPromise])
      results.forEach((res, idx) => {
        if (res.status === 'rejected') {
          console.error(`[Brevo API Error] Failed to send [${idx === 0 ? 'Admin alert' : 'Auto-reply'}]:`, res.reason?.message || res.reason)
        }
      })
      return { success: true, provider: 'brevo-api' }
    } catch (err) {
      console.error('[Brevo Dispatch Error]:', err.message)
      return { success: false, error: err.message }
    }
  }

  // Send via SMTP (Brevo SMTP or Gmail SMTP)
  const transporter = getSmtpTransporter(config)
  if (!transporter) {
    return { success: false, reason: 'transporter_unavailable' }
  }

  const adminMailOptions = {
    from: `"Devam Portfolio" <${senderEmail}>`,
    to: recipient,
    replyTo: cleanEmail,
    subject: adminSubject,
    headers: {
      'Auto-Submitted': 'auto-generated',
      'X-Auto-Response-Suppress': 'All',
      'Precedence': 'list',
      'X-Mailer': 'DevamPortfolio/1.0',
    },
    text: adminText,
    html: adminHtml,
  }

  const autoReplyMailOptions = {
    from: `"Devam Gupta" <${senderEmail}>`,
    to: cleanEmail,
    replyTo: recipient,
    subject: autoReplySubject,
    headers: {
      'Auto-Submitted': 'auto-replied',
      'X-Auto-Response-Suppress': 'All',
      'Precedence': 'bulk',
      'X-Mailer': 'DevamPortfolio/1.0',
    },
    text: autoReplyText,
    html: autoReplyHtml,
  }

  Promise.allSettled([
    transporter.sendMail(adminMailOptions),
    transporter.sendMail(autoReplyMailOptions),
  ]).then((results) => {
    results.forEach((res, idx) => {
      if (res.status === 'rejected') {
        console.error(`[SMTP Notice] Failed to send email [${idx === 0 ? 'Admin alert' : 'Auto-reply'}]:`, res.reason?.message || res.reason)
      } else {
        console.log(`[SMTP Sent] Email [${idx === 0 ? 'Admin alert' : 'Auto-reply'}] dispatched successfully via ${config.provider}.`)
      }
    })
  })

  return { success: true, provider: config.provider }
}
