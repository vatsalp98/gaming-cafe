/* eslint-disable @typescript-eslint/unbound-method */
"use client";

import { NextUIProvider } from "@nextui-org/react";
import type { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
    <>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider attribute="class" enableSystem>
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
}
