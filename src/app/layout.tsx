import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'AI Receptionist Agency | 24/7 Natural Voice Agent',
  description: 'Elevate customer interactions with our cutting-edge AI agency, providing natural, human-like 24/7 AI receptionist voice agents for seamless business operations.',
  keywords: ["AI receptionist, voice agent, natural language processing, 24/7 AI, customer service AI, AI agency, virtual receptionist"],
  openGraph: {
    "title": "AI Receptionist Agency | 24/7 Natural Voice Agent",
    "description": "Elevate customer interactions with our cutting-edge AI agency, providing natural, human-like 24/7 AI receptionist voice agents for seamless business operations.",
    "url": "https://www.aireceptionist.com",
    "siteName": "AI Receptionist Agency",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-futuristic-ai-receptionist-interface-s-1774495678348-058d3396.jpg",
        "alt": "AI receptionist interface"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "AI Receptionist Agency | 24/7 Natural Voice Agent",
    "description": "Elevate customer interactions with our cutting-edge AI agency, providing natural, human-like 24/7 AI receptionist voice agents for seamless business operations.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-futuristic-ai-receptionist-interface-s-1774495678348-058d3396.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${poppins.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
