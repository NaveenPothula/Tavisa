import Link from "next/link";
import Image from "next/image";

export default async function Logo() {
  const res = await fetch("https://pulseayur-api.onrender.com/api/config", {
    cache: "no-cache",
  });
  const data = await res.json();

  return (
    <Link href="/" className="flex-shrink-0">
      <Image
        src={data.result[0].logo[0].Headerlogo}
        alt="Logo"
        width={250}
        height={80}
        className="h-16 w-auto" // Ensure height is set properly
      />
    </Link>
  );
}
