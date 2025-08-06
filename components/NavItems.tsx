"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const publicNavItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
];

const authenticatedNavItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      <SignedOut>
        {publicNavItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={cn(pathname === href && "text-primary font-semibold")}
          >
            {label}
          </Link>
        ))}
      </SignedOut>
      <SignedIn>
        {authenticatedNavItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={cn(pathname === href && "text-primary font-semibold")}
          >
            {label}
          </Link>
        ))}
      </SignedIn>
    </nav>
  );
};

export default NavItems;
