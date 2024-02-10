import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Providers from "./_components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "5FiftyGaming | Home",
  description:
    "Best gaming cafe in the heart of Vancouver Downtown. Open to reservations and game requests.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
