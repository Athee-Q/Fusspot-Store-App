import About from "@/components/Home/About";
import Categories from "@/components/Home/Categories";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import MenuItems from "@/components/Home/MenuItems";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Categories/>
      <MenuItems/>
      <About/>
      <Contact/>
    </main>
  );
}

