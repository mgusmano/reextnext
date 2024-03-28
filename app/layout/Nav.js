"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Nav() {
  const links = [
    { name: 'Home', href: { pathname: '/' } },
    { name: 'ReExt Button', href: { pathname: '/reextbutton' } },
    { name: 'ReExt Grid with custom store', href: { pathname: '/reextgrid' } },
    { name: 'ReExt Grid and Server Component', href: { pathname: '/reextandservercomponent', query: { personid: 276597 } } },
  ];

  return (
    <div className="zcol znav">
      {links.map((link) => {
        return (
          <Link className="zlink" key={link.name} href={link.href}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
