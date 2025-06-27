// "use client";
// "use server";

"use i18n";

import Link from "next/link";
import { HeroTitle, HeroSubtitle, HeroActions } from "../components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <HeroTitle />
        <HeroSubtitle />
        <HeroActions />
        <Link href="/other_page">Other</Link>
      </div>
    </div>
  );
}
