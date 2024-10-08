import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
// Adjust the path if necessary
import "./globals.css";
import Footer from "@/components/footer";

interface SocialMedia {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  mail: string | null;
  youtube: string;
  pinterest: string | null;
}

interface Logo {
  Headerlogo: string;
  Footerlogo: string;
  Adminlogo: string;
}

interface FetchedData {
  appName: string;
  copyrightMessage: string;
  socialMedia: SocialMedia[];
  logo: Logo[];
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fetchData = async (): Promise<FetchedData[]> => {
    const res = await fetch("https://pulseayur-api.onrender.com/api/config"); // Replace with your API URL
    const data = await res.json();
    console.log("being fetched");
    return data.result;
  };

  const data = await fetchData();
  const headerLogo = data[0].logo[0].Headerlogo;

  const footerLogo = data[0].logo[0].Footerlogo;
  const socialMedia = data[0].socialMedia[0];
  const copyrightMessage = data[0].copyrightMessage;

  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.className} px-4 md:px-10 text-black`}>
        <Navbar headerLogo={headerLogo} />
        <div className="py-10">{/* Add top padding to prevent overlap */}</div>
        {children}
        <Footer
          socialMedia={socialMedia}
          footerLogo={footerLogo}
          copyrightMessage={copyrightMessage}
        />
      </body>
    </html>
  );
}
