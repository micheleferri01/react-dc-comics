import DcLogoForHeader from '../assets/img/dc-logo.png'
export default function Header() {
    return (
        <>
            <header className="bg-white">
                <nav className='container d-flex align-items-center justify-content-between'>
                    <figure className='logo-header'>
                        <img src={DcLogoForHeader} alt="Logo" />
                    </figure>
                    <div className='d-flex gap-3 fw-bold'>
                        <a href="#">CHARACTERS</a>
                        <a href="#" className='active'>COMICS</a>
                        <a href="#">MOVIES</a>
                        <a href="#">TV</a>
                        <a href="#">GAMES</a>
                        <a href="#">COLLECTIBLES</a>
                        <a href="#">VIDEOS</a>
                        <a href="#">FANS</a>
                        <a href="#">NEWS</a>
                        <a href="#">SHOP</a>
                    </div>
                </nav>
            </header>
        </>
    )
}