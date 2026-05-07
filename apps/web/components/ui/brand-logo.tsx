import Image from "next/image"

type Variant = "color" | "mono-pos" | "mono-neg"
type Kind = "horizontal" | "monogram"

interface BrandLogoProps {
  variant?: Variant
  kind?: Kind
  width?: number
  height?: number
  className?: string
  priority?: boolean
  /** Provide explicitly. Defaults to "Algelyx" for `kind="horizontal"` and "" (decorative) for `kind="monogram"`. */
  alt?: string
}

const ASSET: Record<Kind, Record<Variant, string>> = {
  horizontal: {
    "color": "/logo.svg",
    "mono-pos": "/logo-mono-pos.svg",
    "mono-neg": "/logo-mono-neg.svg",
  },
  monogram: {
    "color": "/monogram.svg",
    "mono-pos": "/monogram-mono-pos.svg",
    "mono-neg": "/monogram-mono-neg.svg",
  },
}

// Source SVG aspect: horizontal logo ~3.78:1, monogram 1:1.
const DEFAULT_DIMENSIONS: Record<Kind, { width: number; height: number }> = {
  horizontal: { width: 362, height: 96 },
  monogram: { width: 96, height: 96 },
}

export function BrandLogo({
  variant = "color",
  kind = "horizontal",
  width,
  height,
  className,
  priority,
  alt,
}: BrandLogoProps) {
  const w = width ?? DEFAULT_DIMENSIONS[kind].width
  const h = height ?? DEFAULT_DIMENSIONS[kind].height
  const altText = alt ?? (kind === "monogram" ? "" : "Algelyx")
  return (
    <Image
      src={ASSET[kind][variant]}
      alt={altText}
      width={w}
      height={h}
      priority={priority}
      unoptimized
      className={className}
    />
  )
}
