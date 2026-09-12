import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";

export function LegalPageShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-anthracite/10 bg-chalk">
        <div className="container-edge flex items-center justify-between py-6">
          <Link href="/" aria-label="Zur Startseite">
            <Logo tone="dark" />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[0.85rem] font-medium text-anthracite/70 transition-colors hover:text-anthracite"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            Zur Startseite
          </Link>
        </div>
      </header>

      <main className="bg-chalk py-16 sm:py-24">
        <div className="container-edge max-w-3xl">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-anthracite sm:text-4xl">
            {title}
          </h1>
          <div className="prose-legal mt-10">{children}</div>
        </div>
      </main>

      <Footer />
    </>
  );
}
