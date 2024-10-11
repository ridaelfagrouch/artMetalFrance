

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
            <div className='Partners-wrapper'>
                <div className='container-Title'>
                    <h2>Partenaires</h2>
                    <div className='enderline' />
                </div>
                <div className='PartnersBody'>
                    <div className='title-body'>
                        <div className='PartnersHeader'>
                            <h3>ÉQUIPE.</h3>
                            <h3>CLIENT.</h3>
                            <h3>COMMUNAUTÉ.</h3>
                        </div>
                        <div className='title-subBody'>
                            <h2>Nous travaillons avec les meilleurs partenaires.</h2>
                            <p>Bien que nous soyons à la pointe et spécialisés dans le design-build, nous connaissons bien plusieurs méthodes de livraison et sommes convaincus de pouvoir trouver le processus qui vous aidera le mieux à atteindre vos objectifs.</p>
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
            </div>
        </section>
    );
}

export default Partners;