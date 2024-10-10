

import './Partners.css';

const PartnersData = [
    {
        id: 1,
        image: 'https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg',  
    },
    {
        id: 2,
        image: 'https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg',
    },
    {
        id: 3,
        image: 'https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg',
    },
    {
        id: 4,
        image: 'https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg',
    }
]

const Partners = () => {
    return (
        <section className="Partners-section">
            <div className='container-Title'>
                <h2>Partners</h2>
                <div className='enderline' />
            </div>
            <div className='PartnersBody'> 
                <div className='title-body'>
                    <div className='PartnersHeader'>
                        <h3>TEAM.</h3>
                        <h3>CUSTOMER.</h3>
                        <h3>COMMUNITY</h3>
                    </div>
                    <div className='title-subBody'>
                        <h2>We Work With the Best Partners</h2>
                        <p>While we are at the forefront of and specialize in design-build, we are very familiar with a number of delivery methods and are confident we can find the process that will best help you meet your goals.</p>
                    </div>
                </div>
                <div className='PartnersLogos'>
                    {
                        PartnersData.map((item) => {
                            return (
                                <div key={item.id} className='PartnersLogo'>
                                    <img src={item.image} alt='PartnersLogo' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Partners;