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
    <div className={cn("relative ml-4 my-6 border-l-2 border-border pl-8 space-y-0", className)}>
      {children}
    </div>
  )
}

export function Step({ number, title, children, className }: StepProps) {
  return (
    <div className={cn("relative pb-8 last:pb-0", className)}>
      <div className="absolute -left-[39px] flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-background text-xs font-bold text-primary shadow-sm">
        {number ?? 1}
      </div>
      <h4 className="mb-2 text-base font-semibold text-foreground">{title}</h4>
      <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  )
}
