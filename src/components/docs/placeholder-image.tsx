import { cn } from "@/lib/utils"
import { ImageIcon } from "lucide-react"

interface PlaceholderImageProps {
  alt?: string
  width?: number | string
  height?: number | string
  className?: string
  caption?: string
}

export function PlaceholderImage({
  alt = "Gambar",
  width = "100%",
  height = 220,
  className,
  caption,
}: PlaceholderImageProps) {
  return (
    <figure className={cn("my-8", className)}>
      <div
        className="flex flex-col items-center justify-center rounded-xl border border-dashed border-muted-foreground/20 bg-muted/30 text-muted-foreground transition-colors hover:bg-muted/50"
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
        }}
      >
        <ImageIcon className="mb-3 h-10 w-10 opacity-30" />
        <span className="text-sm font-medium opacity-50">{alt}</span>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
