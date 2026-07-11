import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import FeaturedServices from "@/components/FeaturedServices";
import CaseStudyHighlights from "@/components/CaseStudyHighlights";
import LatestInsights from "@/components/LatestInsights";
import Newsletter from "@/components/Newsletter";
import ProductLaunchHighlight from "@/components/ProductLaunchHighlight";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductLaunchHighlight />
      <Pillars />
      <FeaturedServices />
      <CaseStudyHighlights />
      <LatestInsights />
      <Newsletter />
    </div>
  );
}
