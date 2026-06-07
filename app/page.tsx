import { Hero } from "@/components/hero";
import {
  DashboardPreview,
  FashionPlanningSection,
  GroceryPlanningSection,
  HomeFAQ,
  MapDiscoverySection,
  PlanningCategories,
  PricingPreview,
  SavedPlansSection,
  SellerJoinSection
} from "@/components/home-sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DashboardPreview />
      <PlanningCategories />
      <FashionPlanningSection />
      <GroceryPlanningSection />
      <MapDiscoverySection />
      <SellerJoinSection />
      <SavedPlansSection />
      <PricingPreview />
      <HomeFAQ />
    </>
  );
}
