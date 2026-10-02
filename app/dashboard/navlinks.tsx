'use client';

import { HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  {
    name: 'Weather',
    href: '/dashboard',
    icon: HomeIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            aria-current={isActive ? 'page' : undefined}
            className={clsx(
              'flex h-12 grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': isActive,
                'bg-gray-300 text-gray-900': !isActive,
              },
            )}
          >
            <LinkIcon className="w-6" aria-hidden="true" />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}