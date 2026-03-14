import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/vllm-project/vllm",
    icon: Github,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/vaborators",
    icon: Twitter,
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight">
            <span className="gradient-text">vLLM</span>
          </Link>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} vLLM Project. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
