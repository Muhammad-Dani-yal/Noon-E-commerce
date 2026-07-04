import shop1 from '../../assets/shop 1.avif'
import shop2 from '../../assets/shop 2.avif'
import shop3 from '../../assets/shop 3.avif'
import shop4 from '../../assets/shop 4.avif'
import shop5 from '../../assets/shop 5.avif'
import shop6 from '../../assets/shop 6.avif'
import shop7 from '../../assets/shop 7.avif'
import shop8 from '../../assets/shop 8.avif'
import shop9 from '../../assets/shop 9.avif'
import shop10 from '../../assets/shop 10.avif'
import './promoCollections.css'

const reasonCards = [
  { title: 'More reasons to shop 1', image: shop1 },
  { title: 'More reasons to shop 2', image: shop2 },
  { title: 'More reasons to shop 3', image: shop7 },
  { title: 'More reasons to shop 4', image: shop8 }
]

const megaCards = [
  { title: 'Mega deal 1', image: shop3 },
  { title: 'Mega deal 2', image: shop4 },
  { title: 'Mega deal 3', image: shop9 },
  { title: 'Mega deal 4', image: shop10 }
]

const focusCards = [
  { title: 'In focus 1', image: shop5 },
  { title: 'In focus 2', image: shop6 }
]

const PromoCollections = () => {
  return (
    <section className='promo-collections' aria-label='Homepage promotions'>
      <div className='promo-group'>
        <h2>More reasons to shop</h2>
        <div className='reason-grid'>
          {reasonCards.map((card) => (
            <a className='reason-card' href='#' key={card.title}>
              <img src={card.image} alt={card.title} loading='lazy' />
            </a>
          ))}
        </div>
      </div>

      <div className='promo-group'>
        <h2>Mega deals</h2>
        <div className='mega-grid'>
          {megaCards.map((card) => (
            <a className='mega-card' href='#' key={card.title}>
              <img src={card.image} alt={card.title} loading='lazy' />
            </a>
          ))}
        </div>
      </div>

      <div className='promo-group'>
        <h2>In focus</h2>
        <div className='focus-grid'>
          {focusCards.map((card) => (
            <a className='focus-card' href='#' key={card.title}>
              <img src={card.image} alt={card.title} loading='lazy' />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PromoCollections
