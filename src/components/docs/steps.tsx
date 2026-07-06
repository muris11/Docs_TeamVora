import { cn } from "@/lib/utils"

interface StepsProps {
  children: React.ReactNode
  className?: string
}

interface StepProps {
  number?: number
  title: string
  children: React.ReactNode
  className?: string
}

export function Steps({ children, className }: StepsProps) {
  return (
    <div className={cn("relative ml-4 border-l-2 border-muted pl-6", className)}>
      {children}
    </div>
  )
}

export function Step({ number, title, children, className }: StepProps) {
  return (
    <div className={cn("relative pb-8 last:pb-0", className)}>
      <div className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background text-xs font-bold text-primary">
        {number ?? 1}
      </div>
      <h3 className="mb-2 text-base font-semibold">{title}</h3>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  )
}

export function StepsCounter({ children, className }: StepsProps) {
  const items = Array.isArray(children) ? children : [children]
  return (
    <div className={cn("space-y-0", className)}>
      {items.map((child, index) => (
        <div key={index} className="relative">
          {child}
        </div>
      ))}
    </div>
  )
}
