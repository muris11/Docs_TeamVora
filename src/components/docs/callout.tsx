import { cn } from "@/lib/utils"
import { Info, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react"

type CalloutVariant = "info" | "warning" | "success" | "tip" | "danger"

interface CalloutProps {
  variant?: CalloutVariant
  title?: string
  children: React.ReactNode
  className?: string
}

const variantConfig: Record<
  CalloutVariant,
  { icon: React.ElementType; container: string; title: string }
> = {
  info: {
    icon: Info,
    container: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100",
    title: "text-blue-800 dark:text-blue-200",
  },
  warning: {
    icon: AlertTriangle,
    container: "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100",
    title: "text-amber-800 dark:text-amber-200",
  },
  success: {
    icon: CheckCircle,
    container: "border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100",
    title: "text-green-800 dark:text-green-200",
  },
  tip: {
    icon: Lightbulb,
    container: "border-purple-200 bg-purple-50 text-purple-900 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-100",
    title: "text-purple-800 dark:text-purple-200",
  },
  danger: {
    icon: AlertTriangle,
    container: "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100",
    title: "text-red-800 dark:text-red-200",
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
        "flex gap-3 rounded-lg border p-4 text-sm",
        config.container,
        className
      )}
    >
      <Icon className="mt-0.5 h-4 w-4 shrink-0" />
      <div className="flex-1 space-y-1">
        {title && (
          <p className={cn("font-semibold", config.title)}>{title}</p>
        )}
        <div className="prose prose-sm dark:prose-invert max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  )
}
