import { content1, content2 } from "@/utils/constant/staticContent";
import HomeSection from "@/components/home/HomeSection";
import AboutSection from "@/components/home/AboutSection";
import BannerSection from "@/components/home/BannerSection";
import DolorSection from "@/components/home/DolarSection";
import AccordionSection from "@/components/home/AccordionSection";
export default function Index() {
  return (
    <main>
      <section
        className="container mx-auto max-w-[1237px] px-5 pt-16"
        id="home"
      >
        <HomeSection data={content1} />

        <AboutSection />
      </section>

      <BannerSection />

      <section
        className="container mx-auto max-w-[1237px] px-5 pt-16"
        id="dolor"
      >
        <HomeSection data={content2} />

        <DolorSection />
      </section>
      <AccordionSection />
    </main>
  );
}
