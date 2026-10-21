import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://portfoliodevam.netlify.app'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

const routeMetadata = {
  '/': {
    title: 'Devam Gupta | Full-Stack Developer & Software Engineer',
    description:
      'Official portfolio of Devam Gupta, Full-Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, and modern web architectures. Explore featured projects, experience, and certifications.',
    keywords:
      'Devam Gupta, Full Stack Developer, Software Engineer, React Developer, Next.js, Node.js, MERN Stack, Flutter, Portfolio, Web Developer Jaipur, Rajasthan India',
    canonical: `${SITE_URL}/`,
  },
  '/about': {
    title: 'About | Devam Gupta - Full-Stack Developer',
    description:
      'Learn more about Devam Gupta, Computer Science undergraduate at JKLU and Full-Stack Developer experienced in production web systems, automotive web portals, and tech leadership.',
    keywords:
      'About Devam Gupta, Devam Gupta Biography, Full Stack Developer India, JKLU Computer Science, Software Engineer Bio',
    canonical: `${SITE_URL}/about`,
  },
  '/skills': {
    title: 'Technical Skills | Devam Gupta - Full-Stack Developer',
    description:
      'Explore Devam Gupta\'s technical expertise: React, Next.js, Node.js, Express, MongoDB, TypeScript, JavaScript, Tailwind CSS, Flutter, Firebase, Docker, and REST APIs.',
    keywords:
      'Devam Gupta Skills, Frontend Developer, Backend Developer, MERN Stack, React, TypeScript, Flutter, Tailwind CSS, Tech Stack',
    canonical: `${SITE_URL}/skills`,
  },
  '/projects': {
    title: 'Projects | Devam Gupta - Full-Stack Software Engineer',
    description:
      'Featured projects engineered by Devam Gupta including VISTA (facial recognition attendance), Sabrang 2026 fest portal, JKLU Sankalp 2027, StitchUp, and Pindi Traders.',
    keywords:
      'Devam Gupta Projects, VISTA attendance app, Sabrang 2026, JKLU Sankalp, StitchUp, Web Development Projects, Full Stack Portfolio Projects',
    canonical: `${SITE_URL}/projects`,
  },
  '/timeline': {
    title: 'Experience & Timeline | Devam Gupta - Software Engineer',
    description:
      'Professional experience, internships, and educational timeline of Devam Gupta, including Web Development Internship at Hayagreeva Consulting and academic milestones at JKLU.',
    keywords:
      'Devam Gupta Experience, Hayagreeva Consulting Internship, Work Experience, Education Timeline, JK Lakshmipat University',
    canonical: `${SITE_URL}/timeline`,
  },
  '/volunteering': {
    title: 'Leadership & Volunteering | Devam Gupta',
    description:
      'Leadership initiatives and co-curricular contributions of Devam Gupta: HackJKLU v5.0 Sponsorship Lead, AARAMBH Tech Lead, NASSCOM operations volunteer, and social mentoring.',
    keywords:
      'Devam Gupta Volunteering, HackJKLU v5.0, AARAMBH Tech Team, NASSCOM volunteer, Leadership, Community Outreach',
    canonical: `${SITE_URL}/volunteering`,
  },
  '/cocurricular': {
    title: 'Leadership & Volunteering | Devam Gupta',
    description:
      'Leadership initiatives and co-curricular contributions of Devam Gupta: HackJKLU v5.0 Sponsorship Lead, AARAMBH Tech Lead, NASSCOM operations volunteer, and social mentoring.',
    keywords:
      'Devam Gupta Volunteering, HackJKLU v5.0, AARAMBH Tech Team, NASSCOM volunteer, Leadership, Community Outreach',
    canonical: `${SITE_URL}/cocurricular`,
  },
  '/certifications': {
    title: 'Certifications & Honors | Devam Gupta',
    description:
      'Professional certifications and honors achieved by Devam Gupta in Generative AI, MLOps, Prompt Engineering, Git/GitHub, and national hackathon achievements.',
    keywords:
      'Devam Gupta Certifications, Google MLOps Generative AI, DeepLearning.AI, Hackathon Winner, HACKSTORM 2024',
    canonical: `${SITE_URL}/certifications`,
  },
  '/faq': {
    title: 'Frequently Asked Questions (FAQ) | Devam Gupta',
    description:
      'Verified answers to frequently asked questions about Devam Gupta, his technical expertise, production projects, internship experience, and availability for hire.',
    keywords:
      'Devam Gupta FAQ, Hire Devam Gupta, Full Stack Developer Interview, Software Engineer Questions, Contact Devam Gupta',
    canonical: `${SITE_URL}/faq`,
  },
  '/contact': {
    title: 'Contact | Devam Gupta - Full-Stack Developer',
    description:
      'Get in touch with Devam Gupta for software engineering opportunities, internships, freelance projects, or technical collaborations.',
    keywords:
      'Contact Devam Gupta, Hire Full Stack Developer, Devam Gupta Email, Software Engineer Contact Jaipur',
    canonical: `${SITE_URL}/contact`,
  },
}

function updateMetaTag(attribute, attributeValue, content) {
  let tag = document.querySelector(`meta[${attribute}="${attributeValue}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, attributeValue)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function updateCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

export default function SEO() {
  const location = useLocation()

  useEffect(() => {
    const pathname = location.pathname.toLowerCase().replace(/\/$/, '') || '/'
    const meta = routeMetadata[pathname] || {
      title: 'Devam Gupta | Full-Stack Developer & Software Engineer',
      description:
        'Official portfolio of Devam Gupta, Full-Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, and modern web architectures.',
      keywords:
        'Devam Gupta, Full Stack Developer, Software Engineer, React, Next.js, Node.js, Portfolio',
      canonical: `${SITE_URL}${pathname}`,
    }

    // Document Title
    document.title = meta.title

    // Primary Meta Tags
    updateMetaTag('name', 'description', meta.description)
    updateMetaTag('name', 'keywords', meta.keywords)
    updateCanonical(meta.canonical)

    // Open Graph
    updateMetaTag('property', 'og:title', meta.title)
    updateMetaTag('property', 'og:description', meta.description)
    updateMetaTag('property', 'og:url', meta.canonical)
    updateMetaTag('property', 'og:image', DEFAULT_IMAGE)

    // Twitter Card
    updateMetaTag('name', 'twitter:title', meta.title)
    updateMetaTag('name', 'twitter:description', meta.description)
    updateMetaTag('name', 'twitter:url', meta.canonical)
    updateMetaTag('name', 'twitter:image', DEFAULT_IMAGE)
  }, [location.pathname])

  return null
}
