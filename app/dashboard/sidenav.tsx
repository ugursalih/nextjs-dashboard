import Link from 'next/link';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import NavLinks from './navlinks';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        href="/dashboard"
        className="mb-2 flex h-20 items-end rounded-md bg-blue-600 p-4 md:h-40"
      >
        <div className="flex items-center gap-2 text-white">
          <GlobeAltIcon className="h-10 w-10" aria-hidden="true" />
          <span className="text-3xl font-semibold">Weather</span>
        </div>
      </Link>

      <nav
        aria-label="Main navigation"
        className="flex grow flex-col gap-2"
      >
        <NavLinks />
      </nav>
    </div>
  );
}