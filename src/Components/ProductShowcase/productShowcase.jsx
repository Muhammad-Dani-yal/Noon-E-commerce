import brand50 from '../../assets/brand 50.png'
import brand51 from '../../assets/brand 51.png'
import brand52 from '../../assets/brand 52.png'
import brand53 from '../../assets/brand 53.png'
import brand54 from '../../assets/brand 54.png'
import brand55 from '../../assets/brand 55.png'
import brand56 from '../../assets/brand 56.png'
import brand57 from '../../assets/brand 57.png'
import brand58 from '../../assets/brand 58.png'
import brand60 from '../../assets/brand 60.png'
import brand61 from '../../assets/brand 61.png'
import brand67 from '../../assets/brand 67.png'
import brand76 from '../../assets/brand 76.png'
import brand77 from '../../assets/brand 77.png'
import brand80 from '../../assets/brand 80.png'
import brand89 from '../../assets/brand 89.png'
import brand123 from '../../assets/brand 123.png'
import banner1 from '../../assets/2nd caro 2nd.png'
import banner2 from '../../assets/2nd caro 3rd.png'
import banner3 from '../../assets/2nd caro 4th.png'
import './productShowcase.css'

const productRows = [
  {
    title: 'Recommended for you',
    products: [
      { title: 'Wireless headphones with long battery life', image: brand53, price: 'AED 89', oldPrice: 'AED 149', tag: 'Best seller' },
      { title: 'Portable laptop for everyday work', image: brand51, price: 'AED 1,899', oldPrice: 'AED 2,399', tag: 'Deal' },
      { title: 'Smart fitness watch with heart monitor', image: brand50, price: 'AED 129', oldPrice: 'AED 219', tag: 'Express' },
      { title: 'Personal care grooming kit', image: brand67, price: 'AED 74', oldPrice: 'AED 119', tag: 'Low price' },
      { title: 'Everyday running shoes', image: brand76, price: 'AED 159', oldPrice: 'AED 249', tag: 'Hot' },
      { title: 'Premium skincare bundle', image: brand60, price: 'AED 99', oldPrice: 'AED 165', tag: 'New' }
    ]
  },
  {
    title: 'Bestsellers in electronics',
    products: [
      { title: 'Gaming monitor with vivid display', image: brand52, price: 'AED 599', oldPrice: 'AED 799', tag: 'Top rated' },
      { title: 'Android smartphone with fast charging', image: brand58, price: 'AED 699', oldPrice: 'AED 949', tag: 'Limited' },
      { title: 'Noise cancelling earbuds', image: brand54, price: 'AED 149', oldPrice: 'AED 229', tag: 'Express' },
      { title: 'Compact home speaker', image: brand55, price: 'AED 119', oldPrice: 'AED 189', tag: 'Deal' },
      { title: 'Office laptop with SSD storage', image: brand56, price: 'AED 1,499', oldPrice: 'AED 1,999', tag: 'Save more' },
      { title: 'Tablet for streaming and study', image: brand57, price: 'AED 499', oldPrice: 'AED 699', tag: 'Popular' }
    ]
  },
  {
    title: 'Beauty, fashion and home',
    products: [
      { title: 'Makeup essentials set', image: brand61, price: 'AED 45', oldPrice: 'AED 85', tag: 'Beauty' },
      { title: 'Signature body mist collection', image: brand80, price: 'AED 69', oldPrice: 'AED 115', tag: 'Fresh' },
      { title: 'Classic lifestyle sneakers', image: brand77, price: 'AED 189', oldPrice: 'AED 279', tag: 'Fashion' },
      { title: 'Cookware starter set', image: brand89, price: 'AED 129', oldPrice: 'AED 199', tag: 'Home' },
      { title: 'Power tool home kit', image: brand123, price: 'AED 179', oldPrice: 'AED 269', tag: 'DIY' },
      { title: 'Sports training shoes', image: brand76, price: 'AED 139', oldPrice: 'AED 219', tag: 'Active' }
    ]
  }
]

const storeTiles = [
  { title: 'Mobiles & accessories', image: banner1 },
  { title: 'Home refresh deals', image: banner2 },
  { title: 'Beauty offers', image: banner3 }
]

const ProductShowcase = () => {
  return (
    <>
      <section className='store-strip' aria-label='Featured stores'>
        {storeTiles.map((tile) => (
          <a className='store-tile' href='#' key={tile.title}>
            <img src={tile.image} alt={tile.title} loading='lazy' />
          </a>
        ))}
      </section>

      {productRows.map((row) => (
        <section className='product-section' key={row.title}>
          <div className='section-heading'>
            <h2>{row.title}</h2>
            <a href='#'>View all</a>
          </div>

          <div className='product-track'>
            {row.products.map((product) => (
              <a className='product-card' href='#' key={product.title}>
                <span className='product-image-wrap'>
                  <img src={product.image} alt={product.title} loading='lazy' />
                </span>
                <span className='product-tag'>{product.tag}</span>
                <strong>{product.title}</strong>
                <span className='price-row'>
                  <b>{product.price}</b>
                  <del>{product.oldPrice}</del>
                </span>
                <span className='rating-row'>4.4 <small>(1.2K)</small></span>
              </a>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}

export default ProductShowcase
