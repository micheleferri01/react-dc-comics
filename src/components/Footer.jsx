import digitalComics from '../assets/img/buy-comics-digital-comics.png'
import dcMerchandise from '../assets/img/buy-comics-merchandise.png'
import dcSubscription from '../assets/img/buy-comics-subscriptions.png'
import dcShopLocator from '../assets/img/buy-comics-shop-locator.png'
import dcPowerVisa from '../assets/img/buy-dc-power-visa.svg'
import dcLogoForFooter from '../assets/img/dc-logo-bg.png'
import facebook from '../assets/img/footer-facebook.png'
import twitter from '../assets/img/footer-twitter.png'
import youTube from '../assets/img/footer-youtube.png'
import pinterest from '../assets/img/footer-pinterest.png'
import periscope from '../assets/img/footer-periscope.png'

export default function Footer() {

    const menuDcAndSites = [
        {
            id: 1,
            title: 'DC',
            links: [
                {
                    id: 1,
                    url: '#',
                    text: 'Terms Of Use'
                },
                {
                    id: 2,
                    url: '#',
                    text: 'Privacy policy (New)'
                },
                {
                    id: 3,
                    url: '#',
                    text: 'Ad Choices'
                },
                {
                    id: 4,
                    url: '#',
                    text: 'Advertising'
                },
                {
                    id: 5,
                    url: '#',
                    text: 'Jobs'
                },
                {
                    id: 6,
                    url: '#',
                    text: 'Subscriptions'
                },
                {
                    id: 7,
                    url: '#',
                    text: 'Talent Workshops'
                },
                {
                    id: 8,
                    url: '#',
                    text: 'CPSC Certificates'
                },
                {
                    id: 9,
                    url: '#',
                    text: 'Ratings'
                },
                {
                    id: 10,
                    url: '#',
                    text: 'Shop Help'
                },
                {
                    id: 11,
                    url: '#',
                    text: 'Contact Us'
                }
            ]
        },
        {
            id: 2,
            title: 'SITES',
            links: [
                {
                    id: 1,
                    url: '#',
                    text: 'DC'
                },
                {
                    id: 2,
                    url: '#',
                    text: 'MAD Magazine'
                },
                {
                    id: 3,
                    url: '#',
                    text: 'DC Kids'
                },
                {
                    id: 4,
                    url: '#',
                    text: 'DC Universe'
                },
                {
                    id: 5,
                    url: '#',
                    text: 'DC Power Visa'
                }
            ]
        }
    ]

    return (
        <>
            <footer className='position-relative'>
                <div className="bg-blue text-white py-4">
                    <section className="container py-3" id="shops">
                        <ul className='d-flex align-items-center justify-content-around m-0'>
                            <li className=''><a href="#"><img src={digitalComics} alt="Digital comics logo" className='shop-icons' />  DIGITAL COMICS</a></li>
                            <li className=''><a href="#"><img src={dcMerchandise} alt="Dc merchandise logo" className='shop-icons' />  DC MERCHANDISE</a></li>
                            <li className=''><a href="#"><img src={dcSubscription} alt="subscription logo" className='shop-icons' />  SUBSCRIPTION</a></li>
                            <li className=''><a href="#"><img src={dcShopLocator} alt="Comic shop locator logo" className='shop-icons' />  COMIC SHOP LOCATOR</a></li>
                            <li className=''><a href="#"><img src={dcPowerVisa} alt="Dc power visa logo" className='shop-icons' />  DC POWER VISA</a></li>
                        </ul>
                    </section>
                </div>
                <div className='bg-footer-links text-white'>
                    <div className="container d-flex justify-content-between">
                        <div className='pt-5 pb-4 footer-links-container'>
                            <div className="row">
                                <div className="col">
                                    <div className="row row-cols-1">
                                        <div className="col">
                                            <h3 className='fs-4'>DC COMICS</h3>
                                            <ul>
                                                <li><a href="#">Characters</a></li>
                                                <li><a href="#">Comics</a></li>
                                                <li><a href="#">Movies</a></li>
                                                <li><a href="#">TV</a></li>
                                                <li><a href="#">Games</a></li>
                                                <li><a href="#">Videos</a></li>
                                                <li><a href="#">News</a></li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <h3 className='fs-4 mt-2 mb-2'>SHOP</h3>
                                            <ul>
                                                <li><a href="#">Shop DC</a></li>
                                                <li><a href="#">Shop Dc Collectibles</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {
                                    menuDcAndSites.map((menu) => (
                                        <div key={menu.id} className="col">
                                            <h3 className="fs-4">{menu.title}</h3>
                                            <ul>
                                                {menu.links.map((link) => (
                                                    <li key={link.id}><a href={link.url}>{link.text}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <figure className='logo-footer-container'>
                            <img src={dcLogoForFooter} alt="dc-logo" className='img-fluid' />
                        </figure>
                    </div>
                </div>
                <div className='bg-dark-custom py-5 newsletter-and-socials'>
                    <div className='container d-flex justify-content-between align-items-center'>
                        <div>
                            <a href="#" className='text-white signup-btn'>SIGN-UP NOW!</a>
                        </div>
                        <div className='socials'>
                            <h2 className='fw-bold fs-4 m-0'>FOLLOW US</h2>
                            <a href="#"><img src={facebook} alt="facebook" /></a>
                            <a href="#"><img src={twitter} alt="twitter" /></a>
                            <a href="#"><img src={youTube} alt="you tube" /></a>
                            <a href="#"><img src={pinterest} alt="pinterest" /></a>
                            <a href="#"><img src={periscope} alt="periscope" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}