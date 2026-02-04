import DcLogoForHeader from '../assets/img/dc-logo.png'
export default function Header () {
    return (
        <>
        <header className="bg-white">
            <div className='container-fluid d-flex align-items-center justify-content-around py-3'>
                <figure className='logo-header'>
                    <img src= {DcLogoForHeader} alt="Logo" />
                </figure>
                <ul>
                    <li className='d-inline-block px-2'><a href="#">CHARACTERS</a></li>
                    <li className='d-inline-block px-2'><a href="#">COMICS</a></li>
                    <li className='d-inline-block px-2'><a href="#">MOVIES</a></li>
                    <li className='d-inline-block px-2'><a href="#">TV</a></li>
                    <li className='d-inline-block px-2'><a href="#">GAMES</a></li>
                    <li className='d-inline-block px-2'><a href="#">COLLECTIBLES</a></li>
                    <li className='d-inline-block px-2'><a href="#">VIDEOS</a></li>
                    <li className='d-inline-block px-2'><a href="#">FANS</a></li>
                    <li className='d-inline-block px-2'><a href="#">NEWS</a></li>
                    <li className='d-inline-block px-2'><a href="#">SHOP</a></li>
                </ul>
            </div>
        </header>
        </>
    )
}