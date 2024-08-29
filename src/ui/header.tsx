import Image from 'next/image';
import Link from 'next/link';

import logo from '#/images/brilla-logo.webp';

export function Header() {
  return (
    <header className="absolute top-4 z-30 w-full border-b pb-4 shadow-none [border-image:linear-gradient(to_right,transparent,theme(colors.lime.300/.16),transparent)1] md:top-6 md:pb-6">
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="relative flex h-12 items-center justify-between gap-x-2 rounded-lg bg-gradient-to-b from-zinc-900/80 to-zinc-900/70 px-3 shadow">
            {/* Border with dots in corners */}
            <div
              className="absolute -inset-1.5 -z-10 rounded-sm bg-zinc-500/15 before:absolute before:inset-y-0 before:left-0 before:w-[10px] before:bg-[length:10px_10px] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.lime.200/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.lime.200/.56)_1px,transparent_1px)] before:[background-position:top_center,bottom_center] after:absolute after:inset-y-0 after:right-0 after:w-[10px] after:bg-[length:10px_10px] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.lime.200/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.lime.200/.56)_1px,transparent_1px)] after:[background-position:top_center,bottom_center]"
              aria-hidden="true"
            />
            {/* Site branding */}
            <div className="flex-1">
              <Image src={logo} alt="Brilla Logo" width={80} height={50} />
            </div>
            {/* Navigation links */}
            <nav className="flex justify-center">
              <ul className="flex items-center text-sm font-medium sm:gap-x-3">
                <li>
                  <Link
                    className="rounded-lg px-3 py-1.5 text-zinc-200 transition-colors hover:text-zinc-200/80"
                    href="mailto:hi@bril.la"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
