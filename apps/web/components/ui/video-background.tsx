"use client"

import { useEffect, useRef } from "react"
import Hls from "hls.js"
import { cn } from "@workspace/ui/lib/utils"

interface VideoBackgroundProps {
  src: string
  poster?: string
  className?: string
  fadeTop?: number | string
  fadeBottom?: number | string
  saturate?: number
  opacity?: number
  objectFit?: "cover" | "contain"
}

export function VideoBackground({
  src,
  poster,
  className,
  fadeTop = 200,
  fadeBottom = 200,
  saturate = 1,
  opacity = 1,
  objectFit = "cover"
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    let hls: Hls | null = null;
    const video = videoRef.current;

    if (!video) return;

    if (src.endsWith(".m3u8") && Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(e => console.log("HLS video play failed/blocked:", e));
      });
    } else {
      video.src = src;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    }
  }, [src])

  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden", className)}>
      <video
        ref={videoRef}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        className={cn("w-full h-full", objectFit === "cover" ? "object-cover" : "object-contain")}
        style={{
          filter: saturate !== 1 ? `saturate(${saturate})` : undefined,
          opacity
        }}
      />
      
      {fadeTop && (
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{ height: fadeTop, background: "linear-gradient(to top, transparent, black)" }}
        />
      )}
      {fadeBottom && (
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: fadeBottom, background: "linear-gradient(to bottom, transparent, black)" }}
        />
      )}
    </div>
  )
}
