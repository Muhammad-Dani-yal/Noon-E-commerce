import { useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import cat1 from '../../assets/cat 1.gif'
import cat2 from '../../assets/cat 2.avif'
import cat3 from '../../assets/cat 3.avif'
import cat4 from '../../assets/cat 4.avif'
import cat5 from '../../assets/cat 5.avif'
import cat6 from '../../assets/cat 6.avif'
import cat7 from '../../assets/cat 7.avif'
import cat8 from '../../assets/cat 8.avif'
import cat9 from '../../assets/cat 9.avif'
import cat10 from '../../assets/cat 10.avif'
import cat11 from '../../assets/cat 11.avif'
import cat12 from '../../assets/cat 12.avif'
import cat13 from '../../assets/cat 13.avif'
import cat14 from '../../assets/cat 14.gif'
import cat15 from '../../assets/cat 15.avif'
import cat16 from '../../assets/cat 16.avif'
import cat17 from '../../assets/cat 17.avif'
import cat18 from '../../assets/cat 18.avif'
import cat19 from '../../assets/cat 19.avif'
import cat20 from '../../assets/cat 20.avif'
import cat21 from '../../assets/cat 21.avif'
import cat22 from '../../assets/cat 22.avif'
import cat23 from '../../assets/cat 23.avif'
import cat24 from '../../assets/cat 24.avif'
import './categoryCarousel.css'

const categories = [
  { title: 'Get Game Ready', image: cat1 },
  { title: 'Category 2', image: cat2 },
  { title: 'Category 3', image: cat3 },
  { title: 'Category 4', image: cat4 },
  { title: 'Category 5', image: cat5 },
  { title: 'Category 6', image: cat6 },
  { title: 'Category 7', image: cat7 },
  { title: 'Category 8', image: cat8 },
  { title: 'Category 9', image: cat9 },
  { title: 'Category 10', image: cat10 },
  { title: 'Category 11', image: cat11 },
  { title: 'Category 12', image: cat12 },
  { title: 'Category 13', image: cat13 },
  { title: 'Category 14', image: cat14 },
  { title: 'Category 15', image: cat15 },
  { title: 'Category 16', image: cat16 },
  { title: 'Category 17', image: cat17 },
  { title: 'Category 18', image: cat18 },
  { title: 'Category 19', image: cat19 },
  { title: 'Category 20', image: cat20 },
  { title: 'Category 21', image: cat21 },
  { title: 'Category 22', image: cat22 },
  { title: 'Category 23', image: cat23 },
  { title: 'Category 24', image: cat24 }
]

const CategoryCarousel = () => {
  const categoryScroller = useRef(null)

  const scrollCategories = (direction) => {
    if (!categoryScroller.current) return

    categoryScroller.current.scrollBy({
      left: direction * categoryScroller.current.clientWidth * 0.9,
      behavior: 'smooth'
    })
  }

  return (
    <section className='category-carousel-section' aria-label='Shop categories'>
      <button className='category-scroll-button left' type='button' onClick={() => scrollCategories(-1)} aria-label='Previous categories'>
        <KeyboardArrowLeftIcon fontSize='small' />
      </button>

      <div className='category-carousel-track' ref={categoryScroller}>
        {categories.map((category) => (
          <a className='category-carousel-card' href='#' key={category.title}>
            <img src={category.image} alt={category.title} />
          </a>
        ))}
      </div>

      <button className='category-scroll-button right' type='button' onClick={() => scrollCategories(1)} aria-label='Next categories'>
        <KeyboardArrowRightIcon fontSize='small' />
      </button>
    </section>
  )
}

export default CategoryCarousel
