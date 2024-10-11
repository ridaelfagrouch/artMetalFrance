import './Quote.css';

const Quote = () => {
    return (
        <div className="blockquote-wrapper">
            <div className="blockquote">
                  
                <h1>
                    Une ville <span className="white-text">n'est pas construite pour une petite vie d'un jour,</span> mais pour être le cadre solide d'une société.
                </h1>
                <h4>&mdash;Charles-Édouard Jeanneret-Gris<br /><em>architecte, urbaniste, décorateur, peintre et écrivain franco-suisse</em></h4>
            </div>
        </div>
    );
};

export default Quote;