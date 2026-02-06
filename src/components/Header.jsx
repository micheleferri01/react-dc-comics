import DcLogoForHeader from '../assets/img/dc-logo.png'

export default function Header({links}) {


    return (
        <>
            <header className="bg-white">
                <div className="container">
                    <nav className='container-fluid'>
                        <figure className='logo-header'>
                            <img src={DcLogoForHeader} alt="Logo" className='img-fluid' />
                        </figure>
                        <div className='header-links fw-bold'>
                            {
                                links.map((link) => (<a key={link.id} href={link.url} className={link.isActive ? 'active' : ''}>{link.text}</a>))
                            }
                        </div>
                    </nav>
                    
                </div>
            </header>
        </>
    )
}