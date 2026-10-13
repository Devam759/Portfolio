import React, { useEffect, useRef } from 'react'

const CORNER_SIZE = 12
const BORDER_WIDTH = 3
const DEFAULT_OFFSET = CORNER_SIZE

export default function TargetCursor({ targetSelector = '.cursor-target' }) {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const cornersGroupRef = useRef(null)
  const cornerRefs = useRef([])

  const mousePos = useRef({ x: -100, y: -100 })
  const activeTargetRef = useRef(null)
  const rotationRef = useRef(0)

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768
    if (isTouch) return

    const originalCursor = document.body.style.cursor
    document.body.style.cursor = 'none'

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY
    }

    const onMouseDown = () => {
      if (dotRef.current) dotRef.current.style.transform = 'translate(-50%, -50%) scale(0.7)'
    }

    const onMouseUp = () => {
      if (dotRef.current) dotRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
    }

    const onMouseOver = (e) => {
      const target = e.target.closest(targetSelector)
      if (target) {
        activeTargetRef.current = target
      }
    }

    const onMouseOut = (e) => {
      const target = e.target.closest(targetSelector)
      if (target && (!e.relatedTarget || !e.relatedTarget.closest(targetSelector))) {
        activeTargetRef.current = null
      }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseover', onMouseOver, { passive: true })
    document.addEventListener('mouseout', onMouseOut, { passive: true })

    let currentX = window.innerWidth / 2
    let currentY = window.innerHeight / 2
    let rafId

    const defaultPositions = [
      { x: -DEFAULT_OFFSET * 1.5, y: -DEFAULT_OFFSET * 1.5 },
      { x: DEFAULT_OFFSET * 0.5, y: -DEFAULT_OFFSET * 1.5 },
      { x: DEFAULT_OFFSET * 0.5, y: DEFAULT_OFFSET * 0.5 },
      { x: -DEFAULT_OFFSET * 1.5, y: DEFAULT_OFFSET * 0.5 },
    ]

    const cornerCurrentPositions = defaultPositions.map((p) => ({ ...p }))

    const render = () => {
      currentX += (mousePos.current.x - currentX) * 0.25
      currentY += (mousePos.current.y - currentY) * 0.25

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      }

      const activeEl = activeTargetRef.current
      if (activeEl && document.body.contains(activeEl)) {
        const rect = activeEl.getBoundingClientRect()
        const targetPositions = [
          { x: rect.left - BORDER_WIDTH - currentX, y: rect.top - BORDER_WIDTH - currentY },
          { x: rect.right + BORDER_WIDTH - CORNER_SIZE - currentX, y: rect.top - BORDER_WIDTH - currentY },
          { x: rect.right + BORDER_WIDTH - CORNER_SIZE - currentX, y: rect.bottom + BORDER_WIDTH - CORNER_SIZE - currentY },
          { x: rect.left - BORDER_WIDTH - currentX, y: rect.bottom + BORDER_WIDTH - CORNER_SIZE - currentY },
        ]

        if (cornersGroupRef.current) {
          cornersGroupRef.current.style.transform = 'none'
        }

        cornerRefs.current.forEach((corner, i) => {
          if (!corner) return
          cornerCurrentPositions[i].x += (targetPositions[i].x - cornerCurrentPositions[i].x) * 0.35
          cornerCurrentPositions[i].y += (targetPositions[i].y - cornerCurrentPositions[i].y) * 0.35
          corner.style.transform = `translate3d(${cornerCurrentPositions[i].x}px, ${cornerCurrentPositions[i].y}px, 0)`
        })
      } else {
        rotationRef.current = (rotationRef.current + 1.8) % 360
        if (cornersGroupRef.current) {
          cornersGroupRef.current.style.transform = `rotate(${rotationRef.current}deg)`
        }

        cornerRefs.current.forEach((corner, i) => {
          if (!corner) return
          cornerCurrentPositions[i].x += (defaultPositions[i].x - cornerCurrentPositions[i].x) * 0.2
          cornerCurrentPositions[i].y += (defaultPositions[i].y - cornerCurrentPositions[i].y) * 0.2
          corner.style.transform = `translate3d(${cornerCurrentPositions[i].x}px, ${cornerCurrentPositions[i].y}px, 0)`
        })
      }

      rafId = requestAnimationFrame(render)
    }

    rafId = requestAnimationFrame(render)

    return () => {
      document.body.style.cursor = originalCursor
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [targetSelector])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      style={{ willChange: 'transform', mixBlendMode: 'difference' }}
    >
      {/* Center dot */}
      <div
        ref={dotRef}
        className="absolute w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{ willChange: 'transform' }}
      />

      {/* 4 corners */}
      <div ref={cornersGroupRef} className="relative" style={{ willChange: 'transform' }}>
        {[
          'border-r-0 border-b-0',
          'border-l-0 border-b-0',
          'border-l-0 border-t-0',
          'border-r-0 border-t-0',
        ].map((borderClass, i) => (
          <div
            key={i}
            ref={(el) => (cornerRefs.current[i] = el)}
            className={`absolute w-3 h-3 border-[2.5px] border-white ${borderClass}`}
            style={{ willChange: 'transform' }}
          />
        ))}
      </div>
    </div>
  )
}
