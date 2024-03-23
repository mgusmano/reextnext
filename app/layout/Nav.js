"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Nav() {
  const pathname = usePathname();
  const links = [
    { name: 'Home', href: { pathname: '/' } },
    { name: 'ReExt Button', href: { pathname: '/reextbutton' } },
    { name: 'ReExt Grid', href: { pathname: '/reextgrid' } },
    { name: 'ref', href: { pathname: '/ref' } },
  ];

  return (
    <div className="zcol navborder">
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href} className="link">
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
