import Link from "next/link";
import {
  Star,
  MessageCircle,
  Twitter,
  ArrowRight,
  GitPullRequest,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface CommunityCard {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  href: string;
  linkText: string;
}

const communityCards: CommunityCard[] = [
  {
    icon: Star,
    title: "GitHub Stars",
    description:
      "Star the repo, track releases, and explore the source code powering LLM inference at scale.",
    stat: "50k+",
    statLabel: "Stars",
    href: "https://github.com/vllm-project/vllm",
    linkText: "Star on GitHub",
  },
  {
    icon: MessageCircle,
    title: "Discord",
    description:
      "Chat with maintainers and fellow users, ask questions, share ideas, and get real-time support.",
    stat: "15k+",
    statLabel: "Members",
    href: "https://discord.gg/vllm",
    linkText: "Join Discord",
  },
  {
    icon: Twitter,
    title: "Twitter / X",
    description:
      "Stay up to date with the latest announcements, benchmarks, community highlights, and releases.",
    stat: "30k+",
    statLabel: "Followers",
    href: "https://twitter.com/vaborators",
    linkText: "Follow on X",
  },
];

export function Community() {
  return (
    <section id="community" className="relative py-16 sm:py-20 md:py-28 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 right-1/4 hidden h-[500px] w-[700px] rounded-full bg-[var(--gradient-end)]/5 blur-[120px] sm:block" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[400px] rounded-full bg-[var(--gradient-start)]/5 blur-[80px] sm:h-[400px] sm:w-[600px] sm:blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl md:text-4xl lg:text-5xl">
            Join the <span className="gradient-text">Community</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)] sm:mt-4 sm:text-lg">
            Connect with thousands of developers building the future of LLM
            inference. Get help, share knowledge, and contribute.
          </p>
        </div>

        {/* Community cards */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 md:mt-16 md:gap-6 lg:grid-cols-3">
          {communityCards.map((card) => (
            <CommunityCardItem key={card.title} {...card} />
          ))}
        </div>

        {/* CTA section */}
        <div className="relative mt-16 overflow-hidden rounded-xl sm:mt-20 sm:rounded-2xl md:mt-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-90" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />

          <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16 md:px-16 md:py-20">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Ready to Build?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/80 sm:mt-4 sm:text-lg">
              Get started with vLLM in minutes. Install, configure, and deploy
              high-performance LLM inference with just a few lines of code.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                asChild
                size="lg"
                className="w-full rounded-lg bg-white px-8 py-3 text-base font-semibold text-[var(--gradient-start)] transition-opacity hover:bg-white/90 sm:w-auto"
              >
                <Link href="/docs/getting-started">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full rounded-lg border-white/30 bg-transparent px-8 py-3 text-base font-semibold text-white hover:bg-white/10 sm:w-auto"
              >
                <Link
                  href="https://github.com/vllm-project/vllm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Contributing section */}
        <div className="mt-16 text-center sm:mt-20 md:mt-24">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs text-[var(--text-secondary)] sm:px-4 sm:py-2 sm:text-sm">
            <GitPullRequest className="h-3.5 w-3.5 text-[var(--gradient-start)] sm:h-4 sm:w-4" />
            Open source and community driven
          </div>

          <h3 className="mt-5 text-xl font-bold tracking-tight text-[var(--text-primary)] sm:mt-6 sm:text-2xl md:text-3xl">
            Contribute to <span className="gradient-text">vLLM</span>
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] sm:mt-4 sm:text-base">
            vLLM is built by a growing community of contributors. Whether
            you&apos;re fixing bugs, adding features, or improving docs — every
            contribution matters.
          </p>

          <div className="mt-6 sm:mt-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full rounded-lg border-[var(--border)] bg-transparent px-8 py-3 text-base font-semibold text-[var(--text-primary)] hover:bg-[var(--muted)] sm:w-auto"
            >
              <Link
                href="https://github.com/vllm-project/vllm/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitPullRequest className="mr-2 h-4 w-4" />
                Contributing Guide
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunityCardItem({
  icon: Icon,
  title,
  description,
  stat,
  statLabel,
  href,
  linkText,
}: CommunityCard) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-xl p-px transition-all duration-300"
    >
      {/* Default border */}
      <div className="absolute inset-0 rounded-xl border border-[var(--border)] transition-opacity duration-300 group-hover:opacity-0" />

      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col rounded-[11px] bg-[var(--card)] p-6">
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--muted)] transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-[var(--gradient-start)]/20 group-hover:to-[var(--gradient-end)]/20">
            <Icon className="h-6 w-6 text-[var(--gradient-start)] transition-colors duration-300 group-hover:text-[var(--gradient-end)]" />
          </div>
          <div className="text-right">
            <span className="block text-2xl font-bold text-[var(--text-primary)]">
              {stat}
            </span>
            <span className="text-xs text-[var(--text-muted)]">
              {statLabel}
            </span>
          </div>
        </div>

        <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
          {description}
        </p>

        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[var(--gradient-start)] transition-colors duration-300 group-hover:text-[var(--gradient-end)]">
          {linkText}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
