"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  BookOpen,
  Users,
  Shield,
  CreditCard,
  CheckSquare,
  FolderOpen,
  FileText,
  Settings,
  HelpCircle,
  ChevronRight,
  Home,
} from "lucide-react";

interface SidebarItem {
  title: string;
  href: string;
  icon?: React.ElementType;
  items?: SidebarItem[];
}

const sidebarData: SidebarItem[] = [
  {
    title: "Beranda",
    href: "/docs",
    icon: Home,
  },
  {
    title: "Memulai",
    href: "/docs/getting-started",
    icon: BookOpen,
  },
  {
    title: "Panduan",
    href: "/docs/guide",
    icon: Users,
    items: [
      { title: "Team Leader", href: "/docs/guide/team-leader" },
      { title: "Anggota", href: "/docs/guide/member" },
    ],
  },
  {
    title: "Fitur",
    href: "/docs/features",
    icon: Settings,
    items: [
      { title: "Finance", href: "/docs/features/finance" },
      { title: "Produktivitas", href: "/docs/features/productivity" },
      { title: "Media", href: "/docs/features/media" },
      { title: "Blog", href: "/docs/features/blogs" },
      { title: "Pengaturan", href: "/docs/features/settings" },
    ],
  },
  {
    title: "FAQ",
    href: "/docs/faq",
    icon: HelpCircle,
  },
];

function SidebarSection({ item }: { item: SidebarItem }) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(() => {
    if (!item.items) return false;
    return item.items.some(
      (child) => pathname === child.href || pathname.startsWith(child.href + "/")
    );
  });

  const isActive = item.items
    ? item.items.some(
        (child) => pathname === child.href || pathname.startsWith(child.href + "/")
      )
    : pathname === item.href;

  const Icon = item.icon;

  if (!item.items) {
    return (
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
      >
        {Icon && <Icon className="h-4 w-4" />}
        {item.title}
      </Link>
    );
  }

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
        <span className="flex items-center gap-2">
          {Icon && <Icon className="h-4 w-4" />}
          {item.title}
        </span>
        <ChevronRight
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-90"
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="ml-2 border-l pl-2">
          {item.items.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-colors",
                pathname === child.href || pathname.startsWith(child.href + "/")
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {child.title}
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-64 shrink-0 overflow-y-auto border-r py-6">
      <nav className="flex flex-col gap-1 px-2">
        <Link href="/docs" className="mb-4 flex items-center gap-2 px-3">
          <img src="/icon.png" alt="TeamVora" className="h-8 w-8" />
          <span className="text-lg font-bold">TeamVora Docs</span>
        </Link>
        {sidebarData.map((item) => (
          <SidebarSection key={item.href} item={item} />
        ))}
      </nav>
    </aside>
  );
}
