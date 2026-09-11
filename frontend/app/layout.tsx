import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitRite | Auto Body Parts",
  description: "Repuestos y carroceria de precision industrial.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
