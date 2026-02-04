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
    return (
        <>
            <footer>
                <div className="bg-blue text-white">
                    <section className="container py-3" id="shops">
                        <ul className='d-flex align-items-center justify-content-around'>
                            <li className=''><a href="#"><img src={digitalComics} alt="Digital comics logo" className='shop-icons' />  DIGITAL COMICS</a></li>
                            <li className=''><a href="#"><img src={dcMerchandise} alt="Dc merchandise logo" className='shop-icons' />  DC MERCHANDISE</a></li>
                            <li className=''><a href="#"><img src={dcSubscription} alt="subscription logo" className='shop-icons' />  SUBSCRIPTION</a></li>
                            <li className=''><a href="#"><img src={dcShopLocator} alt="Comic shop locator logo" className='shop-icons' />  COMIC SHOP LOCATOR</a></li>
                            <li className=''><a href="#"><img src={dcPowerVisa} alt="Dc power visa logo" className='shop-icons' />  DC POWER VISA</a></li>
                        </ul>
                    </section>
                </div>
                <div className='bg-footer-links text-white'>
                    <div className="container d-flex justify-between">
                        <div className='pt-5 pb-4 footer-links-container'>
                            <div className="row">
                                <div className="col">
                                    <div className="row row-cols-1">
                                        <div className="col">
                                            <p className='fw-bold mb-2'>DC COMICS</p>
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
                                            <p className='fw-bold mt-2 mb-2'>SHOP</p>
                                            <ul>
                                                <li><a href="#">Shop DC</a></li>
                                                <li><a href="#">Shop Dc Collectibles</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <p className='fw-bold mb-2'>DC</p>
                                    <ul>
                                        <li><a href="#">Terms Of Use</a></li>
                                        <li><a href="#">Privacy Policy (New)</a></li>
                                        <li><a href="#">Ad Choises</a></li>
                                        <li><a href="#">Advertising</a></li>
                                        <li><a href="#">Jobs</a></li>
                                        <li><a href="#">Subscriptions</a></li>
                                        <li><a href="#">Talent Workshops</a></li>
                                        <li><a href="#">CPSC Certificates</a></li>
                                        <li><a href="#">Ratings</a></li>
                                        <li><a href="#">Shop Help</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <p className='fw-bold mb-2'>SITES</p>
                                    <ul>
                                        <li><a href="#">DC</a></li>
                                        <li><a href="#">MAD Magazine</a></li>
                                        <li><a href="#">DC Kids</a></li>
                                        <li><a href="#">DC Universe</a></li>
                                        <li><a href="#">DC Power Visa</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <figure className='logo-footer'>
                            <img src={dcLogoForFooter} alt="dc-logo" />
                        </figure>
                    </div>
                </div>
                <div className='bg-dark-custom py-5 newsletter-and-socials'>
                    <div className='container d-flex justify-content-between align-items-center'>
                        <div>
                            <a href="#" className='text-white signup-btn'>SIGN-UP NOW!</a>
                        </div>
                        <div className='socials'>
                            <p>FOLLOW US</p>
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