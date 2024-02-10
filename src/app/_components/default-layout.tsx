"use client";

import { type ReactNode } from "react";
import SiteFooter from "./footer";
import NavBar from "./nav-bar";

type DefaultLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        {/* Header */}
        <NavBar />

        {/* Main Section */}
        <main className="flex min-h-screen w-full flex-1">{children}</main>

        {/* Footer */}
        <SiteFooter />
      </div>
    </>
  );
}
