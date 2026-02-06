import jumbotronPic from '../assets/img/jumbotron.jpg'
import ComicCard from './comics-cards/comic-card.jsx'
export default function Main({list}) {
   

    return (
        <>
            <main>
                <div className='ow-hidden jumbo'>
                    <img src={jumbotronPic} alt="jumbotron" />
                </div>
                <div className="bg-comics text-white pt-5 pb-3 position-relative">
                    <div className='container position-relative'>
                        <h1 className='bg-blue fs-3 fw-bold px-3 py-1 my-badge'>CURRENT SERIES</h1>
                        <div className='row g-3'>
                            {list.map((comic,index) => (
                                <ComicCard key={index} card={comic}/>
                            ))}
                        </div>
                        <button className='bg-blue text-white py-2 px-5 btn-load-more'>LOAD MORE</button>
                    </div>
                </div>

            </main>
        </>
    )
}