import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Hotels", href: "/hotels/room" },
  { label: "Explore the map", href: "/onmap" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50 px-6 py-10 text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Nestora
          </Link>
          <p className="mt-2 max-w-sm text-sm leading-6">
            Find a comfortable place to stay, wherever your next trip takes you.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-col gap-3 text-sm">
          <span className="font-semibold text-gray-900 dark:text-white">Explore</span>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-red-500">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm">
          <p className="font-semibold text-gray-900 dark:text-white">Need help?</p>
          <a href="mailto:hello@nestora.example" className="mt-3 block transition-colors hover:text-red-500">
            hello@nestora.example
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-gray-200 pt-5 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
        © {new Date().getFullYear()} Nestora. All rights reserved.
      </div>
    </footer>
  );
}
