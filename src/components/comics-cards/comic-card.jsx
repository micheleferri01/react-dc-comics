export default function comicCard({card}) {
    return (
        <div key={card.id} className="col-6 col-md-4 col-lg-3 col-xl-2">
            <div className='h-100 p-2'>
                <div className='card-image'>
                    <img src={card.thumb} alt={card.title} className='img-fluid' />
                </div>
                <h1 className='fs-6 pt-2'>{card.series}</h1>
            </div>
        </div>
    )
}