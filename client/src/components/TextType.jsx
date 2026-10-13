import React, { useState, useEffect } from 'react'

export default function TextType({
  text = '',
  as: Component = 'span',
  typingSpeed = 80,
  initialDelay = 400,
  cursorCharacter = '|',
  className = '',
  style = {},
  ...props
}) {
  const fullText = Array.isArray(text) ? text[0] || '' : text
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let intervalId
    let currentIndex = 0

    const startTyping = () => {
      intervalId = setInterval(() => {
        if (currentIndex < fullText.length) {
          currentIndex += 1
          setDisplayedText(fullText.slice(0, currentIndex))
        } else {
          clearInterval(intervalId)
        }
      }, typingSpeed)
    }

    const delayTimeout = setTimeout(startTyping, initialDelay)

    return () => {
      clearTimeout(delayTimeout)
      clearInterval(intervalId)
    }
  }, [fullText, typingSpeed, initialDelay])

  return (
    <Component className={`inline-block tracking-tight ${className}`} style={style} {...props}>
      <span>{displayedText}</span>
      <span className="inline-block ml-0.5 animate-pulse font-normal">{cursorCharacter}</span>
    </Component>
  )
}
