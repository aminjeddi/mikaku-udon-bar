import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Marquee from "@/components/Marquee";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-paper min-h-screen">
      <Nav />
      <Hero />
      <Story />
      <Marquee />
      <Menu />
      <Reviews />
      <Visit />
      <Footer />
    </main>
  );
}
