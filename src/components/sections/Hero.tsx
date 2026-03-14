import Link from "next/link";
import { ArrowRight, Github, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

const codeExample = `$ pip install vllm

from vllm import LLM, SamplingParams

llm = LLM(model="meta-llama/Llama-3.1-8B-Instruct")
params = SamplingParams(temperature=0.8, top_p=0.95)

outputs = llm.generate(["Hello, my name is"], params)
print(outputs[0].outputs[0].text)`;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-[var(--gradient-start)]/10 blur-[80px] sm:h-[400px] sm:w-[600px] sm:blur-[100px] lg:h-[600px] lg:w-[800px] lg:blur-[120px]" />
        <div className="absolute top-40 right-1/4 hidden h-[400px] w-[600px] rounded-full bg-[var(--gradient-end)]/8 blur-[100px] sm:block" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="gradient-text">vLLM</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:mt-6 sm:text-lg md:text-xl">
              High-throughput and memory-efficient LLM inference and serving
              engine
            </p>

            <div className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
              <Button
                asChild
                size="lg"
                className="gradient-bg hover:opacity-90 w-full rounded-lg px-8 py-3 text-base font-semibold text-white transition-opacity sm:w-auto"
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
                className="w-full rounded-lg border-[var(--border)] bg-transparent px-8 py-3 text-base font-semibold text-[var(--text-primary)] hover:bg-[var(--muted)] sm:w-auto"
              >
                <Link
                  href="https://github.com/vllm-project/vllm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>

          {/* Right column — code block */}
          <div className="relative">
            {/* Gradient border glow */}
            <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-20 blur-sm" />

            <div className="gradient-border relative rounded-xl bg-[var(--card)]">
              {/* Title bar */}
              <div className="flex items-center justify-between border-b border-[var(--border)] px-3 py-2.5 sm:px-4 sm:py-3">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444] sm:h-3 sm:w-3" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B] sm:h-3 sm:w-3" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E] sm:h-3 sm:w-3" />
                </div>
                <span className="font-mono text-[10px] text-[var(--text-muted)] sm:text-xs">
                  quickstart.py
                </span>
                <button
                  className="text-[var(--text-muted)] transition-colors hover:text-[var(--text-secondary)]"
                  aria-label="Copy code"
                >
                  <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </div>

              {/* Code content */}
              <pre className="overflow-x-auto p-3 text-xs leading-relaxed sm:p-4 sm:text-sm md:p-5 md:text-base">
                <code className="font-mono text-[var(--text-secondary)]">
                  {codeExample.split("\n").map((line, i) => (
                    <span key={i} className="block">
                      {formatLine(line)}
                    </span>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function formatLine(line: string) {
  if (line.startsWith("$")) {
    return (
      <>
        <span className="text-[var(--gradient-end)]">$</span>
        <span className="text-[var(--text-primary)]">{line.slice(1)}</span>
      </>
    );
  }

  if (line.startsWith("from ") || line.startsWith("import ")) {
    const parts = line.match(/^(from |import )(.+?)( import )(.+)$/);
    if (parts) {
      return (
        <>
          <span className="text-[var(--gradient-start)]">{parts[1]}</span>
          <span className="text-[var(--text-primary)]">{parts[2]}</span>
          <span className="text-[var(--gradient-start)]">{parts[3]}</span>
          <span className="text-[var(--text-primary)]">{parts[4]}</span>
        </>
      );
    }
    return <span className="text-[var(--gradient-start)]">{line}</span>;
  }

  if (line.startsWith("print(")) {
    return (
      <>
        <span className="text-[#22C55E]">print</span>
        <span className="text-[var(--text-primary)]">{line.slice(5)}</span>
      </>
    );
  }

  if (line.includes("=")) {
    const [varName, ...rest] = line.split("=");
    const value = rest.join("=");
    return (
      <>
        <span className="text-[var(--text-primary)]">{varName}</span>
        <span className="text-[var(--gradient-end)]">=</span>
        <span className="text-[var(--text-secondary)]">{value}</span>
      </>
    );
  }

  return <span>{line}</span>;
}
