import { cn } from "@/lib/utils"
import { Info, AlertTriangle, CheckCircle, Lightbulb, XOctagon } from "lucide-react"

type CalloutVariant = "info" | "warning" | "success" | "tip" | "danger"

interface CalloutProps {
  variant?: CalloutVariant
  title?: string
  children: React.ReactNode
  className?: string
}

const variantConfig: Record<
  CalloutVariant,
  { icon: React.ElementType; container: string; iconColor: string }
> = {
  info: {
    icon: Info,
    container: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/50",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  warning: {
    icon: AlertTriangle,
    container: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/50",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  success: {
    icon: CheckCircle,
    container: "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/50",
    iconColor: "text-green-600 dark:text-green-400",
  },
  tip: {
    icon: Lightbulb,
    container: "border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/50",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  danger: {
    icon: XOctagon,
    container: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/50",
    iconColor: "text-red-600 dark:text-red-400",
  },
}

export function Callout({
  variant = "info",
  title,
  children,
  className,
}: CalloutProps) {
  const config = variantConfig[variant]
  const Icon = config.icon

  return (
    <div
      className={cn(
        "my-6 flex gap-3 rounded-xl border p-4 text-sm leading-relaxed",
        config.container,
        className
      )}
    >
      <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", config.iconColor)} />
      <div className="flex-1 space-y-1 min-w-0">
        {title && (
          <p className="font-semibold text-foreground">{title}</p>
        )}
        <div className="text-muted-foreground [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  )
}
