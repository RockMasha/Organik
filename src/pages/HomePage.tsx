import { AboutSection } from '@/widgets/AboutSection'
import { CategoriesSection } from '@/widgets/CategoriesSection'
import { EcoFriendlySection } from '@/widgets/EcoFriendlySection'
import { HeroSection } from '@/widgets/HeroSection'
import { NewsSection } from '@/widgets/NewsSection'
import { OfferSection } from '@/widgets/OfferSection'
import { ProductsSection } from '@/widgets/ProductsSection'
import { TestimonialSection } from '@/widgets/TestimonialSection'
import { VegetablesSection } from '@/widgets/VegetablesSection'

function HomePage() {
  return (
    <main>
      <HeroSection />
      <OfferSection />
      <AboutSection />
      <ProductsSection />
      <TestimonialSection />
      <VegetablesSection />
      <EcoFriendlySection />
      <CategoriesSection />
      <NewsSection />
    </main>
  )
}

export default HomePage
