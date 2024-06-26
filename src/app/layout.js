import { Inter } from "next/font/google";
import "./globals.css";
import { fontGeneralSans, fontVariableSatoshi, fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Job Dashboard",
  description: "A dashboard for managing job applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
         "bg-bg-primary",
        fontGeneralSans.variable,
        fontVariableSatoshi.variable,
        fontInter.variable,
  )}
     >{children}</body>
    </html>
  );
}
