"use client"

import Image from "next/image"
import { cn } from "@workspace/ui/lib/utils"

interface BrandCrossProps {
  className?: string
  size?: number
  rotation?: number
}

export function BrandCross({ className, size = 200, rotation = 0 }: BrandCrossProps) {
  return (
    <Image 
      src="/XLogo.png"
      alt=""
      width={size}
      height={size}
      className={cn(
        "brand-plus",
        className
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
        width: size,
        height: size,
      }}
    />
  )
}

interface BrandCrossesContainerProps {
  section: "hero" | "footer" | "general"
}

export function BrandCrosses({ section }: BrandCrossesContainerProps) {
  if (section === "hero") {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden hidden md:block">
        {/* Top Left - Moved in from edges to avoid truncation */}
        <BrandCross 
          size={320} 
          rotation={35} 
          className="left-[8%] top-[12%] opacity-60" 
        />
        {/* Bottom Right - Moved in from edges to avoid truncation */}
        <BrandCross 
          size={380} 
          rotation={-15} 
          className="right-[10%] bottom-[15%] opacity-40" 
        />
      </div>
    )
  }

  if (section === "footer") {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <BrandCross 
          size={180} 
          rotation={15} 
          className="-left-12 bottom-[5%] opacity-40" 
        />
        <BrandCross 
          size={140} 
          rotation={-35} 
          className="-right-10 bottom-[15%] opacity-50" 
        />
      </div>
    )
  }

  // General background texture for other sections
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
      <BrandCross 
        size={200} 
        rotation={25} 
        className="-left-10 top-1/2 opacity-20" 
      />
      <BrandCross 
        size={300} 
        rotation={-20} 
        className="-right-10 bottom-1/4 opacity-20" 
      />
    </div>
  )
}
