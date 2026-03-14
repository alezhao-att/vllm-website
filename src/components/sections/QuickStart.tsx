"use client";

import { useState } from "react";
import { Copy, Check, Terminal, Lightbulb } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  filename: string;
  code: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Install with pip",
    description:
      "Install vLLM from PyPI. It includes all dependencies for running inference on NVIDIA GPUs.",
    filename: "terminal",
    code: `$ pip install vllm`,
  },
  {
    number: 2,
    title: "Launch API server",
    description:
      "Start an OpenAI-compatible API server with a single command. It handles batching, scheduling, and memory management automatically.",
    filename: "terminal",
    code: `$ vllm serve meta-llama/Llama-3.1-8B-Instruct \\
    --dtype auto \\
    --api-key token-abc123`,
  },
  {
    number: 3,
    title: "Query the model",
    description:
      "Use the OpenAI client library or any HTTP client to send requests to your running server.",
    filename: "query.py",
    code: `from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:8000/v1",
    api_key="token-abc123",
)

completion = client.chat.completions.create(
    model="meta-llama/Llama-3.1-8B-Instruct",
    messages=[
        {"role": "user", "content": "Hello!"}
    ],
)
print(completion.choices[0].message.content)`,
  },
];

const tips = [
  "Use --tensor-parallel-size N to shard models across multiple GPUs.",
  "Set --max-model-len to limit context length and reduce memory usage.",
  "Enable --quantization awq for 4-bit quantized models with minimal quality loss.",
  "Add --enforce-eager to disable CUDA graph capture for debugging.",
];

function CodeBlock({ filename, code }: { filename: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const cleanCode = code
      .split("\n")
      .map((line) => (line.startsWith("$ ") ? line.slice(2) : line))
      .join("\n");
    navigator.clipboard.writeText(cleanCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[#0D0D0D] sm:rounded-xl">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-[var(--border)] px-3 py-2 sm:px-4 sm:py-2.5">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Terminal className="h-3 w-3 text-[var(--text-muted)] sm:h-3.5 sm:w-3.5" />
          <span className="font-mono text-[10px] text-[var(--text-muted)] sm:text-xs">
            {filename}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] text-[var(--text-muted)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--text-secondary)] sm:gap-1.5 sm:px-2 sm:py-1 sm:text-xs"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-[#22C55E] sm:h-3.5 sm:w-3.5" />
              <span className="text-[#22C55E]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <pre className="overflow-x-auto p-3 text-xs leading-relaxed sm:p-4 sm:text-sm">
        <code className="font-mono">
          {code.split("\n").map((line, i) => (
            <span key={i} className="block">
              {formatCodeLine(line)}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

function formatCodeLine(line: string) {
  if (line.startsWith("$ ")) {
    return (
      <>
        <span className="text-[var(--gradient-end)]">$ </span>
        <span className="text-[var(--text-primary)]">{line.slice(2)}</span>
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

  if (line.trimStart().startsWith("#")) {
    return <span className="text-[var(--text-muted)]">{line}</span>;
  }

  const stringMatch = line.match(/^(.*?)(".*?")(.*?)$/);
  if (stringMatch) {
    return (
      <>
        <span className="text-[var(--text-secondary)]">{stringMatch[1]}</span>
        <span className="text-[#F59E0B]">{stringMatch[2]}</span>
        <span className="text-[var(--text-secondary)]">{stringMatch[3]}</span>
      </>
    );
  }

  if (line.includes("=") && !line.trimStart().startsWith('"') && !line.trimStart().startsWith('{')) {
    const eqIndex = line.indexOf("=");
    const before = line.slice(0, eqIndex);
    const after = line.slice(eqIndex + 1);
    return (
      <>
        <span className="text-[var(--text-primary)]">{before}</span>
        <span className="text-[var(--gradient-end)]">=</span>
        <span className="text-[var(--text-secondary)]">{after}</span>
      </>
    );
  }

  return <span className="text-[var(--text-secondary)]">{line}</span>;
}

export function QuickStart() {
  return (
    <section id="quick-start" className="relative py-16 sm:py-20 md:py-28 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gradient-start)]/5 blur-[100px] sm:h-[600px] sm:w-[800px] sm:blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl md:text-4xl lg:text-5xl">
            Get Started in{" "}
            <span className="gradient-text">Minutes</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)] sm:mt-4 sm:text-lg">
            Three steps to go from zero to serving your first model with an
            OpenAI-compatible API.
          </p>
        </div>

        {/* Steps — two-column grid */}
        <div className="mt-10 grid gap-8 sm:mt-12 md:mt-16 md:gap-10 lg:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`flex flex-col gap-3 sm:gap-4${step.number === 3 ? " lg:col-span-2 lg:mx-auto lg:w-full lg:max-w-[calc(50%-1.25rem)]" : ""}`}
            >
              {/* Step label */}
              <div className="flex items-center gap-3">
                <span className="gradient-bg flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white sm:h-8 sm:w-8 sm:text-sm">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] sm:text-xl">
                  {step.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {step.description}
              </p>

              <CodeBlock filename={step.filename} code={step.code} />
            </div>
          ))}
        </div>

        {/* Tips section */}
        <div className="mt-10 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 sm:mt-12 sm:p-6 md:mt-16 md:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--gradient-start)]/20 to-[var(--gradient-end)]/20 sm:h-10 sm:w-10">
              <Lightbulb className="h-4 w-4 text-[var(--gradient-end)] sm:h-5 sm:w-5" />
            </div>
            <h3 className="text-base font-semibold text-[var(--text-primary)] sm:text-lg">
              Pro Tips
            </h3>
          </div>

          <ul className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)]" />
                <span className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  {tip}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
