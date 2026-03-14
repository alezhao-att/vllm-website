import { Header } from "@/components/shared/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { QuickStart } from "@/components/sections/QuickStart";
import { Community } from "@/components/sections/Community";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Features />
        <QuickStart />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
