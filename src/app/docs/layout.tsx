import { Sidebar } from "@/components/docs/sidebar";

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
      <main className="flex-1 overflow-x-hidden px-8 py-6 lg:px-12">
        <article className="prose prose-gray dark:prose-invert max-w-none">
          {children}
        </article>
      </main>
    </div>
  );
}
