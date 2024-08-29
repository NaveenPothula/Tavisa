import Link from "next/link";
import Image from "next/image";

interface SocialMedia {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  mail: string | null;
  youtube: string;
  pinterest: string | null;
}

interface FooterProps {
  socialMedia: SocialMedia;
  footerLogo: string;
  copyrightMessage: string;
}

export default function Footer({
  socialMedia,
  footerLogo,
  copyrightMessage,
}: FooterProps) {
  return (
    <footer className="bg-blue-100  text-black py-10 relative">
      {/* <div className="max-w-7xl"> */}
      {/* Part 1: Heading and Paragraph */}
      {/* <div className="mb-8">
          <h2 className="text-2xl font-bold">
            What Next? - Book a Free 15 min Discovery Session or take our Free
            Menopause Assessment now.
          </h2>
          <p className="mt-2">
            This is a paragraph providing more details about the footer content.
          </p>
        </div> */}

      {/* Part 2: Sections */}
      <div className="flex flex-col md:flex-row justify-around items-start gap-8 mb-8">
        {/* Section 1: Logo and Paragraph */}
        <div className="flex-1">
          <Link href="/" className="mb-4">
            <Image
              src={footerLogo}
              alt="Logo"
              width={200}
              height={100}
              className="w-[100]px h-[40]px"
            />
            {/* Increased logo size */}
          </Link>
          <h6 className="text-sm px-6">
            Our Care Team is ready to help answer your questions.
          </h6>
        </div>

        {/* Section 2: Pages */}
        <div className="flex-1 px-6">
          <h3 className="text-xl font-semibold mb-2">Pages</h3>
          <ul className="list-none p-0">
            <li className="mb-2 text-sm hover:text-blue-500">
              <Link href="/who-are-we">Who are we</Link>
            </li>
            <li className="mb-2 text-sm hover:text-blue-500">
              <Link href="/symptoms">Symptoms</Link>
            </li>
            <li className="mb-2 text-sm hover:text-blue-500">
              <Link href="/how-we-treat">How we treat</Link>
            </li>
            <li className="mb-2 text-sm hover:text-blue-500">
              <Link href="/learn">Learn</Link>
            </li>

            <li className="mb-2 text-sm hover:text-blue-500">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Privacy and Legal */}
        <div className="flex-1 px-6">
          <h3 className="text-xl font-semibold mb-2">Privacy & Legal</h3>
          <ul className="list-none p-0">
            <li className="mb-2 text-sm hover:text-blue-500">
              <Link href="/privacy-and-policy">Privacy Policy</Link>
            </li>
            <li className="mb-2 text-sm hover:text-blue-500">
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </li>
            <li className="mb-2 text-sm hover:text-blue-500">
              <Link href="#">Cookie Policy</Link>
            </li>
          </ul>
        </div>

        {/* Section 4: Social Media */}
        <div className="flex-1 px-6">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <ul className="list-none p-0">
            <li className="mb-2 text-sm hover:text-blue-500">
              <Link
                href={socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </Link>
            </li>
            <li className="mb-2 text-sm hover:text-blue-500">
              <Link
                href={socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
            </li>
            <li className="mb-2 text-sm hover:text-blue-500">
              <Link
                href={socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </li>
            <li className="mb-2 text-sm hover:text-blue-500">
              <Link
                href={socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Part 3: Company Branding */}
      <div className="text-center">
        <h6 className="text-sm">{copyrightMessage}</h6>
      </div>
      {/* </div> */}
    </footer>
  );
}
