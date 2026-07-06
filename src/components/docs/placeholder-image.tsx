import { cn } from "@/lib/utils"

interface PlaceholderImageProps {
  alt?: string
  width?: number | string
  height?: number | string
  className?: string
  caption?: string
  variant?: "dashboard" | "finance" | "tasks" | "media" | "settings" | "blog" | "form" | "kanban" | "default"
}

const variants: Record<string, { bg: string; accent: string; icon: string; label: string }> = {
  dashboard: { bg: "from-blue-500/10 to-purple-500/10", accent: "bg-blue-500", icon: "📊", label: "Dashboard View" },
  finance: { bg: "from-emerald-500/10 to-teal-500/10", accent: "bg-emerald-500", icon: "💰", label: "Finance View" },
  tasks: { bg: "from-orange-500/10 to-amber-500/10", accent: "bg-orange-500", icon: "📋", label: "Tasks View" },
  media: { bg: "from-purple-500/10 to-pink-500/10", accent: "bg-purple-500", icon: "🖼️", label: "Media View" },
  settings: { bg: "from-slate-500/10 to-gray-500/10", accent: "bg-slate-500", icon: "⚙️", label: "Settings View" },
  blog: { bg: "from-rose-500/10 to-red-500/10", accent: "bg-rose-500", icon: "📝", label: "Blog View" },
  form: { bg: "from-cyan-500/10 to-sky-500/10", accent: "bg-cyan-500", icon: "📝", label: "Form View" },
  kanban: { bg: "from-violet-500/10 to-indigo-500/10", accent: "bg-violet-500", icon: "📌", label: "Kanban Board" },
  default: { bg: "from-muted/30 to-muted/50", accent: "bg-muted-foreground/20", icon: "📸", label: "Screenshot" },
}

export function PlaceholderImage({
  alt = "Gambar",
  width = "100%",
  height = 240,
  className,
  caption,
  variant = "default",
}: PlaceholderImageProps) {
  const v = variants[variant] || variants.default

  return (
    <figure className={cn("my-8", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br",
          v.bg
        )}
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
        }}
      >
        {/* Fake UI elements */}
        <div className="absolute inset-0 flex flex-col p-4">
          {/* Top bar */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
            </div>
            <div className="flex-1 h-5 rounded-md bg-foreground/5" />
            <div className="w-6 h-6 rounded-full bg-foreground/10" />
          </div>

          {/* Content area */}
          <div className="flex-1 flex gap-3">
            {/* Sidebar mock */}
            <div className="w-16 space-y-2 hidden sm:block">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-3 rounded bg-foreground/8" />
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 space-y-3">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="h-5 w-32 rounded bg-foreground/10" />
                <div className="h-5 w-20 rounded-md bg-foreground/8" />
              </div>

              {/* Cards */}
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-14 rounded-lg bg-foreground/5 border border-foreground/5" />
                ))}
              </div>

              {/* Table/List */}
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-2 h-8 rounded bg-foreground/5 px-2">
                    <div className="w-6 h-6 rounded-full bg-foreground/10" />
                    <div className="flex-1 h-2.5 rounded bg-foreground/8" />
                    <div className="w-12 h-2.5 rounded bg-foreground/6" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 rounded-xl bg-background/80 backdrop-blur-sm px-6 py-4 shadow-lg border border-border/50">
            <span className="text-3xl">{v.icon}</span>
            <span className="text-sm font-medium text-foreground/80">{v.label}</span>
          </div>
        </div>
      </div>

      {caption && (
        <figcaption className="mt-3 text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
