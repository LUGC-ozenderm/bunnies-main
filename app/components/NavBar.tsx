"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/worlds", label: "Worlds" },
  { href: "/bunnies", label: "Bunnies" },
  { href: "/code", label: "Code" },
];

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-inner">


        <Link href="/" className="nav-logo">
          <Image
            src="/images/bunny2.png"   
            alt="Vacuum Bunnies Logo"
            width={42}
            height={42}
            className="nav-logo-icon"
          />

          <div>
            <div className="nav-logo-text-main">Vacuum Bunnies</div>
            <div className="nav-logo-text-sub">Adventure Kids Game</div>
          </div>
        </Link>


        <nav className="nav-links">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={"nav-link" + (active ? " nav-link-active" : "")}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>


        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </div>


      {open && (
        <nav className="nav-mobile">
          <div className="nav-mobile-inner">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    "nav-mobile-link" +
                    (active ? " nav-mobile-link-active" : "")
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
