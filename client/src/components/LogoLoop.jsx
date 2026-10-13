import React from 'react'

export default function LogoLoop({ logos = [] }) {
  if (!logos.length) return null

  // Duplicate items within the track to ensure seamless width on all resolutions
  const trackLogos = [...logos, ...logos]

  const renderTrack = (ariaHidden = false) => (
    <div
      className="flex items-center gap-10 pr-10 shrink-0"
      aria-hidden={ariaHidden}
    >
      {trackLogos.map((item, index) => (
        <div key={`${item.title}-${index}`} className="shrink-0">
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.title}
              aria-label={item.title}
              className="cursor-target block p-2 text-4xl text-black dark:text-white hover:scale-110 transition-transform duration-200"
            >
              {item.node}
            </a>
          ) : (
            <div title={item.title} className="p-2 text-4xl text-black dark:text-white">
              {item.node}
            </div>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <div className="relative w-full overflow-hidden py-4 group" aria-label="Technology Stack">
      {/* Left gradient fade */}
      <div 
        className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 z-10 bg-gradient-to-r from-gray-50 dark:from-[#0f0f13] to-transparent" 
        aria-hidden 
      />
      {/* Right gradient fade */}
      <div 
        className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 z-10 bg-gradient-to-l from-gray-50 dark:from-[#0f0f13] to-transparent" 
        aria-hidden 
      />

      <div className="animate-marquee flex select-none">
        {renderTrack(false)}
        {renderTrack(true)}
      </div>
    </div>
  )
}
