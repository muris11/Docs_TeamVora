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
  Settings,
  HelpCircle,
  ChevronRight,
  Home,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

interface SidebarItem {
  title: string;
  href: string;
  icon?: React.ElementType;
  items?: SidebarItem[];
}

const sidebarData: SidebarItem[] = [
  { title: "Beranda", href: "/docs", icon: Home },
  { title: "Memulai", href: "/docs/getting-started", icon: BookOpen },
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
  { title: "FAQ", href: "/docs/faq", icon: HelpCircle },
];

function SidebarSection({ item, onLinkClick }: { item: SidebarItem; onLinkClick?: () => void }) {
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
        onClick={onLinkClick}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
          isActive
            ? "bg-primary text-primary-foreground shadow-sm"
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
        <span className="flex items-center gap-3">
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
        <div className="ml-4 mt-1 space-y-0.5 border-l border-border pl-3">
          {item.items.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onLinkClick}
              className={cn(
                "block rounded-md px-3 py-1.5 text-sm transition-colors",
                pathname === child.href || pathname.startsWith(child.href + "/")
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
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

function SidebarContent({ onLinkClick, showLogo = true }: { onLinkClick?: () => void; showLogo?: boolean }) {
  return (
    <nav className="flex flex-col gap-1 px-3">
      {showLogo && (
        <Link href="/docs" className="mb-6 flex items-center gap-2.5 px-1" onClick={onLinkClick}>
          <img src="/icon.png" alt="TeamVora" className="h-8 w-8 rounded-lg" />
          <span className="text-lg font-bold tracking-tight">TeamVora Docs</span>
        </Link>
      )}
      {sidebarData.map((item) => (
        <SidebarSection key={item.href} item={item} onLinkClick={onLinkClick} />
      ))}
    </nav>
  );
}

interface SidebarProps {
  mobileOpen: boolean;
  onMobileOpenChange: (open: boolean) => void;
}

export function Sidebar({ mobileOpen, onMobileOpenChange }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => onMobileOpenChange(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 border-r bg-background transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-14 items-center justify-between border-b px-4">
          <Link href="/docs" className="flex items-center gap-2" onClick={() => onMobileOpenChange(false)}>
            <img src="/icon.png" alt="TeamVora" className="h-6 w-6 rounded" />
            <span className="font-bold">TeamVora Docs</span>
          </Link>
          <button
            onClick={() => onMobileOpenChange(false)}
            className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="overflow-y-auto py-4">
          <SidebarContent onLinkClick={() => onMobileOpenChange(false)} showLogo={false} />
        </div>
      </aside>

      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-72 shrink-0 overflow-y-auto border-r bg-background lg:block">
        <div className="py-6">
          <SidebarContent />
        </div>
      </aside>
    </>
  );
}

export function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6">
      {/* Mobile hamburger */}
      <button
        onClick={onMenuClick}
        className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background shadow-sm lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="flex-1" />

      <a
        href="https://teamvora.web.id"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-1.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground"
      >
        Kembali ke TeamVora
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </header>
  );
}
