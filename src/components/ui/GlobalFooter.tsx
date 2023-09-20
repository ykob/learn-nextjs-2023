"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GlobalFooter() {
  const pathname = usePathname();

  return (
    pathname !== "/" && (
      <sub>
        <p>
          <Link href="/">Back to Home</Link>
        </p>
      </sub>
    )
  );
}
