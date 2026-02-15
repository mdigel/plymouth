import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="px-4 py-3 md:px-8 md:py-4">
      <Link href="/" className="inline-flex items-center gap-1.5">
        <Image
          src="/Plymouth App Labs Logo_Square.png"
          alt="Plymouth App Labs"
          width={40}
          height={40}
          priority
          className="w-9 h-9 md:w-10 md:h-10"
        />
        <span className="text-lg md:text-xl text-gray-900 tracking-tight">
          <span className="font-bold">plymouth</span>{" "}
          <span className="font-light">app labs</span>
        </span>
      </Link>
    </header>
  );
}
