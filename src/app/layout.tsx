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
  icons: [
    {
      rel: "icon",
      url: "https://i0.wp.com/5fiftygame.ca/wp-content/uploads/2022/08/cropped-5Fiftygame-logo-4.6-icon-2-small.png?fit=32%2C32&ssl=1",
    },
  ],
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
