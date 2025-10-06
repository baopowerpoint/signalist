"use client";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";

    return pathname.startsWith(path);
  };
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-5 font-normal">
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <Link
            className={cn(
              "hover:text-yellow-500 transition-colors",
              isActive(item.href) && "text-gray-100"
            )}
            href={item.href}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
