import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-yellow-50 text-black py-10">
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
        <div className="flex justify-around flex-col md:flex-row gap-8 mb-8">
          {/* Section 1: Logo and Paragraph */}
          <div className="flex-1">
            <div className="mb-4">
              <img src="/tavisa.png" alt="Logo" className="w-32" />
              {/* Increased logo size */}
            </div>
            <h6>Our Care Team is ready to help answer your questions.</h6>
          </div>

          {/* Section 2: Pages */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Pages</h3>
            <ul className="list-none p-0">
              <li className="mb-2">
                <Link href="#">Who are we</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Symptoms</Link>
              </li>
              <li className="mb-2">
                <Link href="#">How we treat</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Learn</Link>
              </li>

              <li className="mb-2">
                <Link href="#">Cookie Policy</Link>
              </li>
              <li className="mb-2">
                <Link href="#">contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Privacy and Legal */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Privacy & Legal</h3>
            <ul className="list-none p-0">
              <li className="mb-2">
                <Link href="#">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Section 4: Social Media */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <ul className="list-none p-0">
              <li className="mb-2">
                <Link href="#">X</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Facebook</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Instagram</Link>
              </li>
              <li className="mb-2">
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
