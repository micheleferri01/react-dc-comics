import DcLogoForHeader from '../assets/img/dc-logo.png'

export default function Header() {

    const headerLinks = [
        {
            id:1,
            url: '#',
            text: 'CHARACTERS',
            isActive: false,
        },
        {
            id:2,
            url: '#',
            text: 'COMICS',
            isActive: true,
        },
        {
            id:3,
            url: '#',
            text: 'MOVIES',
            isActive: false,
        },
        {
            id:4,
            url: '#',
            text: 'TV',
            isActive: false,
        },
        {
            id:5,
            url: '#',
            text: 'GAMES',
            isActive: false,
        },
        {
            id:6,
            url: '#',
            text: 'COLLECTIBLES',
            isActive: false,
        },
        {
            id:7,
            url: '#',
            text: 'VIDEOS',
            isActive: false,
        },
        {
            id:8,
            url: '#',
            text: 'FANS',
            isActive: false,
        },
        {
            id:9,
            url: '#',
            text: 'NEWS',
            isActive: false,
        },
        {
            id:10,
            url: '#',
            text: 'SHOP',
            isActive: false,
        },
    ];

    return (
        <>
            <header className="bg-white">
                <nav className='container d-flex align-items-center justify-content-between'>
                    <figure className='logo-header'>
                        <img src={DcLogoForHeader} alt="Logo" />
                    </figure>
                    <div className='d-flex gap-3 fw-bold'>
                        {
                            headerLinks.map((link) => (<a key={link.id} href={link.url} className={link.isActive? 'active':''}>{link.text}</a>))
                        }
                    </div>
                </nav>
            </header>
        </>
    )
}