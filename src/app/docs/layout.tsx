import { Sidebar, Navbar } from "@/components/docs/sidebar";

export const metadata = {
  title: "Dokumentasi - TeamVora",
  description: "Dokumentasi lengkap platform TeamVora.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col min-w-0">
        <Navbar />
        <main className="flex-1 px-6 py-8 lg:px-16 lg:py-10">
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
