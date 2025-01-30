export default function Footer() {
    // Array navigazione principale
    const navLinks = [
        { text: 'Characters', path: '/characters' },
        { text: 'Comics', path: '/comics' },
        { text: 'Movies', path: '/movies' },
        { text: 'Tv', path: '/tv' },
        { text: 'Games', path: '/games' },
        { text: 'Videos', path: '/videos' },
        { text: 'News', path: '/news' }
      ];

    // Array navigazione shop
  const shopNavLinks = [
    { text: 'Shop DC', path: '/shop' },
    { text: 'Shop DC Collectibles', path: '/collectibles' }
  ];

  // Array navigazione footer
  const footerLinks = [
    { text: 'Terms Of Use', path: '/terms' },
    { text: 'Privacy Policy (New)', path: '/privacy',},
    { text: 'Ad Choices', path: '/ad-choices' },
    { text: 'Advertising', path: '/advertising' },
    { text: 'Jobs', path: '/jobs' },
    { text: 'Subscriptions', path: '/subscriptions' },
    { text: 'Talent Workshops', path: '/talent' },
    { text: 'CPSC Certificates', path: '/certificates' },
    { text: 'Ratings', path: '/ratings' },
    { text: 'Shop Help', path: '/help' },
    { text: 'Contact Us', path: '/contact' }
  ];

  const dcLinks = [
    { text: 'DC', path: '/dc' },
    { text: 'MAD Magazine', path: '/mad-magazine' },
    { text: 'DC Kids', path: '/dc-kids' },
    { text: 'DC Universe', path: '/dc-universe' },
    { text: 'DC Power Visa', path: '/dc-power-visa' }
  ];

  return (
    <footer>
      <div className="section-1">
        <div className="container">
          <div className="content">
            <ul>
              <div className="container-image">
                <img src="./img/buy-comics-digital-comics.png" alt="" />
                <a href="#">DIGITAL COMICS</a>
              </div>
              <div className="container-image">
                <img src="./img/buy-comics-merchandise.png" alt="" />
                <a href="#">DC MERCHANDISE</a>
              </div>
              <div className="container-image">
                <img src="./img/buy-comics-subscriptions.png" alt="" />
                <a href="#">SUBSCRIPTION</a>
              </div>
              <div className="container-image">
                <img src="./img/buy-comics-shop-locator.png" alt="" />
                <a href="#">COMIC SHOP LOCATOR</a>
              </div>
              <div className="container-image">
                <img src="./img/buy-dc-power-visa.svg" alt="" />
                <a href="#">DC POWER VISA</a>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="container">
            <div className="row">
            <div className="col-1">
                <div className="col-A">
                    <h3>DC COMICS</h3>
                    <ul>
                        {navLinks.map((Objects, Id) =>(
                            <li key={Id}>
                                <a href={Objects.path}>{Objects.text}</a>
                            </li>
                        ))}
                    </ul>
                    <h3>SHOP</h3>
                    <ul>
                        {shopNavLinks.map((Objects, Id) =>(
                            <li key={Id}>
                                <a href={Objects.path}>{Objects.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-B">
                <h3>DC</h3>
                    <ul>
                        {footerLinks.map((Objects, Id) =>(
                          <li key={Id}>
                            <a href={Objects.path}>{Objects.text}</a>
                          </li>  
                        ))}
                    </ul>
                </div>
                <div className="col-C">
                <h3>SITES</h3>
                    <ul>
                        {dcLinks.map((Objects, Id) => (
                            <li key={Id}>
                                <a href={Objects.path}>{Objects.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="col-2">
              
            </div>
            </div>
        </div>
      </div>
      <div className="section-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <button class="button-73" role="button">SIGN-UP NOW!</button>
            </div>
            <div className="Social">
                <h3>FOLLOW US</h3>
                    <ul>
                        <li>
                        <a href="#" class="fa fa-facebook"></a>
                        </li>
                        <li>
                        <a href="#" class="fa fa-twitter"></a>
                        </li>
                        <li>
                        <a href="#" class="fa fa-youtube"></a>
                        </li>
                        <li>
                        <a href="#" class="fa fa-pinterest"></a>
                        </li>
                        <li>
                        <a href="#" class="fa fa-tumblr"></a>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
    </footer>
  );
}
