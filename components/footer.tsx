import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-yellow-50 text-black py-10 relative md:px-10 px-4">
      <div className="max-w-7xl mx-auto">
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
        <div className="flex flex-col md:flex-row justify-between items-left gap-8 mb-8">
          {/* Section 1: Logo and Paragraph */}
          <div className="flex-1">
            <div className="mb-4">
              <Image
                src="/tavisa.png"
                alt="Logo"
                width={200}
                height={100}
                className="w-[100]px h-[40]px"
              />
              {/* Increased logo size */}
            </div>
            <h6 className="text-sm">
              Our Care Team is ready to help answer your questions.
            </h6>
          </div>

          {/* Section 2: Pages */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Pages</h3>
            <ul className="list-none p-0">
              <li className="mb-2 text-sm">
                <Link href="#">Who are we</Link>
              </li>
              <li className="mb-2 text-sm">
                <Link href="#">Symptoms</Link>
              </li>
              <li className="mb-2 text-sm">
                <Link href="#">How we treat</Link>
              </li>
              <li className="mb-2 text-sm">
                <Link href="#">Learn</Link>
              </li>

              <li className="mb-2 text-sm">
                <Link href="#">Cookie Policy</Link>
              </li>
              <li className="mb-2 text-sm">
                <Link href="#">contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Privacy and Legal */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Privacy & Legal</h3>
            <ul className="list-none p-0">
              <li className="mb-2 text-sm">
                <Link href="#">Privacy Policy</Link>
              </li>
              <li className="mb-2 text-sm">
                <Link href="#">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Section 4: Social Media */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <ul className="list-none p-0">
              <li className="mb-2 text-sm">
                <Link href="#">X</Link>
              </li>
              <li className="mb-2 text-sm">
                <Link href="#">Facebook</Link>
              </li>
              <li className="mb-2 text-sm">
                <Link href="#">Instagram</Link>
              </li>
              <li className="mb-2 text-sm">
                <Link href="#">LinkedIn</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Part 3: Company Branding */}
        <div className="text-center">
          <h6 className="text-sm">
            ©Tavisa Company Name. All rights reserved.
          </h6>
        </div>
      </div>
    </footer>
  );
}
