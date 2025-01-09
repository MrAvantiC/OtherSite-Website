'use client'

import { useEffect, useState } from 'react'

const words = [
  'Web Development',
  'E-Commerce',
  'Custom Solutions',
  'Digital Transformation',
  'Performance',
]

export function TypingEffect() {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const typeWord = () => {
      const currentWord = words[wordIndex]
      if (deleting) {
        setText((prev) => prev.slice(0, prev.length - 1))
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1))
      }

      if (!deleting && text === currentWord) {
        setTimeout(() => setDeleting(true), 1000)
      }

      if (deleting && text === '') {
        setDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }

    const interval: NodeJS.Timeout = setInterval(typeWord, 125) // Adjust speed as needed

    return () => clearInterval(interval)
  }, [text, deleting, wordIndex])

  return (
    <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
      We love <span>{text}</span>
      <span className="animate-blink">|</span>
    </h1>
  )
}
