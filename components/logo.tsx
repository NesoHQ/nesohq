import Link from "next/link";
import { Orbit } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 group-hover:border-primary/50 transition-colors">
        <Orbit className="h-5 w-5 dark:text-primary text-[#00C9D3] transition-transform duration-500 group-hover:rotate-180" />
      </div>
      <span className="text-lg font-bold tracking-wider dark:text-foreground uppercase text-gray-900">
        Neso<span className="dark:text-primary text-[#00C9D3]">HQ</span>
      </span>
    </Link>
  );
}
