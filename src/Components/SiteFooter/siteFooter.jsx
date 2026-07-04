import './siteFooter.css'

const footerColumns = [
  ['Electronics', 'Mobiles', 'Laptops', 'Headphones', 'Gaming'],
  ['Fashion', 'Women', 'Men', 'Kids', 'Sportswear'],
  ['Home', 'Kitchen', 'Furniture', 'Decor', 'Appliances'],
  ['Help', 'Contact us', 'Returns', 'Warranty', 'Shipping'],
  ['About', 'Careers', 'Sell with us', 'Terms', 'Privacy']
]

const SiteFooter = () => {
  return (
    <footer className='site-footer'>
      <div className='service-band'>
        <div>
          <strong>We are always here to help</strong>
          <span>Reach us through help center, email, or phone support.</span>
        </div>
        <div>
          <strong>Secure shopping</strong>
          <span>Protected payments, easy returns, and trusted delivery.</span>
        </div>
        <div>
          <strong>Fast delivery</strong>
          <span>Express options available on selected products.</span>
        </div>
      </div>

      <div className='footer-columns'>
        {footerColumns.map((column) => (
          <div className='footer-column' key={column[0]}>
            <h3>{column[0]}</h3>
            {column.slice(1).map((item) => (
              <a href='#' key={item}>{item}</a>
            ))}
          </div>
        ))}
      </div>

      <div className='footer-bottom'>
        <span>© 2026 Marketplace demo. Built for your assignment.</span>
        <div className='footer-actions'>
          <a href='#'>App store</a>
          <a href='#'>Google play</a>
          <a href='#'>Social</a>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
