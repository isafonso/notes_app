import type { Metadata } from "next";
import { TRootLayout } from "@/src/types";

export const metadata: Metadata = {
  title: "Bookmarks Management",
  description: "System builded to manage bookmarks",
  keywords: "management, bookmarks, schools",
  authors: [{ name: "Nexus", url: "https://nexus.co.ao" }],
  robots: "index, follow",
};

export default function RootLayout({ children }: TRootLayout) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/styles/bootstrap.min.css" />
      </head>
      <body>
        {children}
        <script src="/scripts/bootstrap.min.js"></script>
      </body>
    </html>
  );
}
