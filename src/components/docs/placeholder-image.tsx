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
  height = 200,
  className,
  caption,
}: PlaceholderImageProps) {
  return (
    <figure className={cn("my-6", className)}>
      <div
        className="flex flex-col items-center justify-center rounded-lg border border-dashed border-muted-foreground/25 bg-muted/50 text-muted-foreground"
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
        }}
      >
        <ImageIcon className="mb-2 h-8 w-8 opacity-50" />
        <span className="text-xs">{alt}</span>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
