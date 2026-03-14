import { Zap, Database, Cpu, Plug, Shield, Github, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "High Throughput",
    description:
      "State-of-the-art serving throughput with continuous batching, optimized CUDA kernels, and efficient scheduling for maximum GPU utilization.",
  },
  {
    icon: Database,
    title: "Memory Efficiency",
    description:
      "Near-zero waste of KV cache memory through intelligent memory management, enabling larger batch sizes and longer context lengths.",
  },
  {
    icon: Cpu,
    title: "PagedAttention",
    description:
      "Novel attention algorithm that manages attention keys and values like virtual memory pages, eliminating fragmentation and redundancy.",
  },
  {
    icon: Plug,
    title: "Easy Integration",
    description:
      "OpenAI-compatible API server, seamless HuggingFace model support, and simple Python SDK for quick integration into any workflow.",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description:
      "Battle-tested at scale with distributed inference, tensor parallelism, streaming outputs, and robust error handling built in.",
  },
  {
    icon: Github,
    title: "Open Source",
    description:
      "Apache 2.0 licensed with a vibrant community of contributors, transparent development, and enterprise-friendly licensing.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[400px] rounded-full bg-[var(--gradient-start)]/5 blur-[80px] sm:h-[500px] sm:w-[700px] sm:blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl md:text-4xl lg:text-5xl">
            Why <span className="gradient-text">vLLM</span>?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)] sm:mt-4 sm:text-lg">
            Built for speed, efficiency, and ease of use — everything you need
            to serve LLMs in production.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 md:mt-16 md:gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <div className="group relative rounded-xl p-px transition-all duration-300">
      {/* Default border */}
      <div className="absolute inset-0 rounded-xl border border-[var(--border)] transition-opacity duration-300 group-hover:opacity-0" />

      {/* Gradient border revealed on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative rounded-[11px] bg-[var(--card)] p-4 sm:p-5 md:p-6">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--muted)] transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-[var(--gradient-start)]/20 group-hover:to-[var(--gradient-end)]/20 sm:mb-4 sm:h-12 sm:w-12">
          <Icon className="h-5 w-5 text-[var(--gradient-start)] transition-colors duration-300 group-hover:text-[var(--gradient-end)] sm:h-6 sm:w-6" />
        </div>

        <h3 className="text-base font-semibold text-[var(--text-primary)] sm:text-lg">
          {title}
        </h3>

        <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)] sm:mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}
