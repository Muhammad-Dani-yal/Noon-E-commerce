import HeroCarousel from '../HeroCarousel/heroCarousel.jsx'
import CategoryCarousel from '../CategoryCarousel/categoryCarousel.jsx'
import PromoCollections from '../PromoCollections/promoCollections.jsx'
import ProductShowcase from '../ProductShowcase/productShowcase.jsx'
import SiteFooter from '../SiteFooter/siteFooter.jsx'
import {
  heroBanner,
  heroSlides,
  miniCarouselSlides
} from './data/homePageData.js'
import './landingPage.css'

const LandingPage = () => {
  return (
    <main className='landing-page'>
      <HeroCarousel slides={heroSlides} miniSlides={miniCarouselSlides} banner={heroBanner} />
      <CategoryCarousel />
      <PromoCollections />
      <ProductShowcase />
      <SiteFooter />
    </main>
  )
}

export default LandingPage
