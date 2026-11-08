import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import CursorSpotlight from "@/components/ui/CursorSpotlight";
import JsonLdSchema from "@/components/seo/JsonLdSchema";
import { generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/seo/technicalSeo";
import "../globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://winhubsolutions.com"),
  title: "Winhub Solutions | Leading Web Development & IT Solutions Company in India",
  description:
    "Winhub Solutions is a technology-driven IT company delivering innovative web development, custom software, mobile applications, AI automation and digital marketing solutions.",
  keywords: [
    "Winhub Solutions",
    "Web Development Company in India",
    "Hire Web Developers in India",
    "Custom Web Applications",
    "Node.js Development",
    "React Development",
    "Angular Development",
    "AI Agent Development",
    "Open Journal Systems (OJS) Development",
    "UI/UX Design",
    "E-Commerce Development",
  ],
  authors: [{ name: "Winhub Solutions" }],
  openGraph: {
    title: "Winhub Solutions | Building Digital Solutions That Move Businesses Forward",
    description:
      "Winhub Solutions is a technology-driven IT company delivering innovative web development, custom software, mobile applications, AI automation and digital marketing solutions.",
    url: "https://winhubsolutions.com",
    siteName: "Winhub Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winhub Solutions | Technology Partner",
    description:
      "Building Digital Solutions That Move Businesses Forward. Web development, custom software, AI automation, and enterprise platforms.",
  },
  icons: {
    icon: [
      { url: "/icon.png?v=winhub4", type: "image/png" },
      { url: "/favicon.ico?v=winhub4", sizes: "any" },
    ],
    shortcut: "/icon.png?v=winhub4",
    apple: [
      { url: "/apple-touch-icon.png?v=winhub4", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://winhubsolutions.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();
  const localBizSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/icon.png?v=winhub4" />
        <link rel="shortcut icon" href="/favicon.ico?v=winhub4" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=winhub4" />
        <JsonLdSchema schema={orgSchema} id="organization-schema" />
        <JsonLdSchema schema={localBizSchema} id="local-business-schema" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('winhub-theme') || localStorage.getItem('wintech-theme');
                if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#F6F6F4] dark:bg-[#0A0A0C] text-[#0A0A0A] dark:text-[#F6F6F4]">
        <ThemeProvider>
          <CursorSpotlight />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
