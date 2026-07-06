"use client";

import React from "react";
import { Sidebar, Navbar } from "@/components/docs/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar mobileOpen={mobileOpen} onMobileOpenChange={setMobileOpen} />
      <div className="flex flex-1 flex-col min-w-0">
        <Navbar onMenuClick={() => setMobileOpen(true)} />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-16 lg:py-10">
          <article className="mx-auto max-w-6xl">
            {children}
          </article>
        </main>
        <footer className="border-t px-6 py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TeamVora. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
