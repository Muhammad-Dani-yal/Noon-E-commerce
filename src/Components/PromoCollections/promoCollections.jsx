import './promoCollections.css'

const makePromoImage = (title, bg, accent) => {
  const svg = `
    <svg width="420" height="260" viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="260" fill="${bg}"/>
      <circle cx="350" cy="42" r="56" fill="rgba(255,255,255,0.42)"/>
      <circle cx="60" cy="230" r="72" fill="rgba(255,255,255,0.35)"/>
      <rect x="30" y="34" width="360" height="192" rx="18" fill="rgba(255,255,255,0.72)"/>
      <rect x="54" y="62" width="118" height="118" rx="16" fill="${accent}"/>
      <rect x="194" y="72" width="148" height="16" rx="8" fill="#101628"/>
      <rect x="194" y="104" width="108" height="12" rx="6" fill="#404553" opacity="0.35"/>
      <rect x="194" y="128" width="132" height="12" rx="6" fill="#404553" opacity="0.25"/>
      <text x="210" y="214" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="800" fill="#101628">${title}</text>
    </svg>
  `

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const reasonCards = [
  { title: 'Mega deals', image: makePromoImage('Mega deals', '#ffe9bf', '#ff7a1a') },
  { title: 'Noon One', image: makePromoImage('Noon One', '#dbeafe', '#3866df') },
  { title: 'Lowest prices', image: makePromoImage('Low prices', '#dcfce7', '#28a745') },
  { title: 'New arrivals', image: makePromoImage('New arrivals', '#fce7f3', '#d63384') }
]

const focusCards = [
  { title: 'Beauty offers', image: makePromoImage('Beauty offers', '#ffe4ef', '#e83e8c') },
  { title: 'Tech essentials', image: makePromoImage('Tech essentials', '#e0f2fe', '#0284c7') }
]

const PromoCollections = () => {
  return (
    <section className='promo-collections' aria-label='Homepage promotions'>
      <div className='promo-group'>
        <h2>More reasons to shop</h2>
        <div className='reason-grid'>
          {reasonCards.map((card) => (
            <a className='reason-card' href='#' key={card.title}>
              <img src={card.image} alt={card.title} />
            </a>
          ))}
        </div>
      </div>

      <div className='promo-group'>
        <h2>In focus</h2>
        <div className='focus-grid'>
          {focusCards.map((card) => (
            <a className='focus-card' href='#' key={card.title}>
              <img src={card.image} alt={card.title} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PromoCollections
