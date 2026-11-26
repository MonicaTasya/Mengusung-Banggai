import type { ReactNode } from "react";
import { Footer } from "@/src/components/Layout/Footer";
import { Navbar } from "@/src/components/Layout/Navbar";
import { SkipLink } from "@/src/components/Layout/SkipLink";

export interface DefaultLayoutProps {
  children: ReactNode;
  className?: string;
}

export function DefaultLayout({ children, className = "" }: DefaultLayoutProps) {
  return (
    <div className={`flex min-h-screen flex-col ${className}`}>
      <SkipLink />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
