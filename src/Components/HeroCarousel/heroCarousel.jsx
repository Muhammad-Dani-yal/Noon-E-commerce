import { useEffect, useRef } from 'react'
import './heroCarousel.css'

const HeroCarousel = ({ slides, miniSlides, banner }) => {
  const heroScroller = useRef(null)
  const miniScroller = useRef(null)

  const scrollHero = (direction) => {
    heroScroller.current?.scrollBy({
      left: direction * 900,
      behavior: 'smooth'
    })
  }

  const scrollMini = (direction) => {
    miniScroller.current?.scrollBy({
      left: direction * 260,
      behavior: 'smooth'
    })
  }

  const autoScroll = (scroller) => {
    if (!scroller.current) return

    const { scrollLeft, clientWidth, scrollWidth } = scroller.current
    const isLastSlide = scrollLeft + clientWidth >= scrollWidth - 5

    scroller.current.scrollTo({
      left: isLastSlide ? 0 : scrollLeft + clientWidth,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      autoScroll(heroScroller)
      autoScroll(miniScroller)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className='hero-shell'>
      <div className='hero-carousel-wrap'>
        <div className='hero-carousel' ref={heroScroller}>
          {slides.map((slide) => (
            <article className={`hero-slide ${slide.theme || ''} ${slide.fullImage ? 'full-image' : ''}`} key={slide.title}>
              {!slide.fullImage && (
                <div className='hero-copy'>
                  <span>{slide.eyebrow}</span>
                  <h1>{slide.title}</h1>
                  <p>{slide.text}</p>
                  <button type='button'>Shop now</button>
                </div>
              )}
              <img src={slide.image} alt={slide.title} />
            </article>
          ))}
        </div>
        <button className='hero-arrow left' type='button' onClick={() => scrollHero(-1)} aria-label='Previous hero'>&lt;</button>
        <button className='hero-arrow right' type='button' onClick={() => scrollHero(1)} aria-label='Next hero'>&gt;</button>
      </div>

      <div className='mini-carousel-wrap'>
        <div className='mini-carousel' ref={miniScroller}>
          {miniSlides.map((slide) => (
            <article className='mini-slide' key={slide.title}>
              <img src={slide.image} alt={slide.title} />
            </article>
          ))}
        </div>
        <button className='mini-arrow left' type='button' onClick={() => scrollMini(-1)} aria-label='Previous mini carousel'>&lt;</button>
        <button className='mini-arrow right' type='button' onClick={() => scrollMini(1)} aria-label='Next mini carousel'>&gt;</button>
      </div>

      <aside className={`hero-banner-card ${banner.fullImage ? 'full-image' : ''}`}>
        {!banner.fullImage && (
          <div>
            <span>{banner.title}</span>
            <strong>{banner.text}</strong>
          </div>
        )}
        <img src={banner.image} alt={banner.title} />
      </aside>
    </section>
  )
}

export default HeroCarousel
