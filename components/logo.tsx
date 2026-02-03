import Link from "next/link";
import { Orbit } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 group-hover:border-primary/50 transition-colors">
        <Orbit className="h-5 w-5 text-primary transition-transform duration-500 group-hover:rotate-180" />
      </div>
      <span className="text-lg font-bold tracking-wider text-foreground uppercase">
        Neso<span className="text-primary">HQ</span>
      </span>
    </Link>
  );
}
