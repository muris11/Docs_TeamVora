import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Settings,
  HelpCircle,
  CreditCard,
  CheckSquare,
  FolderOpen,
  FileText,
  ArrowRight,
} from "lucide-react";

const sections = [
  {
    title: "Memulai",
    description: "Panduan lengkap registrasi, login, dan pengenalan interface TeamVora untuk pengguna baru.",
    href: "/docs/getting-started",
    icon: BookOpen,
  },
  {
    title: "Panduan Team Leader",
    description: "Cara membuat tim, mengundang anggota, mengelola peran, dan menjalankan tim secara efektif.",
    href: "/docs/guide/team-leader",
    icon: Users,
  },
  {
    title: "Panduan Anggota",
    description: "Cara menggunakan seluruh fitur TeamVora sebagai anggota tim — dari dashboard hingga media.",
    href: "/docs/guide/member",
    icon: Users,
  },
  {
    title: "Panduan Super Admin",
    description: "Pengelolaan platform secara menyeluruh — tim, user, blog, pengaturan sistem, dan monitoring.",
    href: "/docs/guide/super-admin",
    icon: Settings,
  },
  {
    title: "Fitur Finance",
    description: "Panduan lengkap kas, tagihan, dan tagihan berulang — pencatatan keuangan tim yang akurat.",
    href: "/docs/features/finance",
    icon: CreditCard,
  },
  {
    title: "Fitur Produktivitas",
    description: "Manajemen tugas dengan papan kanban, drag and drop, prioritas, dan log harian.",
    href: "/docs/features/productivity",
    icon: CheckSquare,
  },
];

export default function DocsPage() {
  return (
    <div className="flex flex-col gap-12 py-12">
      {/* Hero */}
      <section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
          <BookOpen className="h-4 w-4" />
          Dokumentasi Resmi
        </div>
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Dokumentasi TeamVora
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Platform manajemen tim all-in-one dengan fitur keuangan, produktivitas,
          media, dan blog. Temukan panduan lengkap untuk memulai dan mengoptimalkan
          penggunaan TeamVora.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/docs/getting-started">
            <Button size="lg">
              Mulai Sekarang
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs/faq">
            <Button variant="outline" size="lg">
              FAQ
            </Button>
          </Link>
        </div>
      </section>

      {/* Sections */}
      <section>
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">
          Jelajahi Dokumentasi
        </h2>
        <p className="mb-6 text-muted-foreground">
          Pilih topik yang ingin Anda pelajari.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link key={section.href} href={section.href} className="group">
              <Card className="h-full transition-colors group-hover:bg-muted/50">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm font-medium text-primary group-hover:underline inline-flex items-center gap-1">
                    Baca selengkapnya
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
