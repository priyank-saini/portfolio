import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Priyank Saini",
  description: "Welcome to the Portfolio.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
