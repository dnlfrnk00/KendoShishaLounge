import React, { useEffect } from 'react';
import '../styles/Impressum.css';
import Background3D from '../components/Background3D';
import BurgerMenu from '../components/BurgerMenu';
import Footer from '../components/Footer';

const Impressum: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="impressum-page">
            <Background3D />
            <BurgerMenu />

            <div className="impressum-container">
                <h1 className="impressum-title">Impressum</h1>

                <section className="impressum-section">
                    <h2>Angaben gemäß § 5 TMG</h2>
                    <p>
                        <strong>KENDO Lounge</strong><br />
                        Inhaber: Maxwell Jegel<br />
                        Bürgermeister-Wohlfarth-Straße 85 c<br />
                        86343 Königsbrunn<br />
                        Deutschland
                    </p>
                </section>

                <section className="impressum-section">
                    <h2>Kontakt</h2>
                    <p>
                        Telefon: <a href="tel:082319249059">08231 9249059</a><br />
                        E-Mail: <a href="mailto:maxwellje@gmx.net">maxwellje@gmx.net</a>
                    </p>
                </section>

                {/* <section className="impressum-section">
                    <h2>Umsatzsteuer-ID</h2>
                    <p>
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                        <span className="placeholder">[HIER DE-NUMMER EINFÜGEN, z.B. DE123456789]</span>
                    </p>
                </section> */}

                <section className="impressum-section">
                    <h2>Aufsichtsbehörde</h2>
                    <p>
                        Stadt Königsbrunn (Ordnungsamt / Gewerbeamt)<br />
                        Marktstraße 3a<br />
                        86343 Königsbrunn<br />
                        <a href="https://www.koenigsbrunn.de" target="_blank" rel="noopener noreferrer">https://www.koenigsbrunn.de</a>
                    </p>
                </section>

                <section className="impressum-section">
                    <h2>Redaktionell verantwortlich</h2>
                    <p>
                        Maxwell Jegel<br />
                        Bürgermeister-Wohlfarth-Straße 85 c<br />
                        86343 Königsbrunn
                    </p>
                </section>

                <section className="impressum-section">
                    <h2>EU-Streitschlichtung</h2>
                    <p>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"> https://ec.europa.eu/consumers/odr/</a>.<br />
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                </section>

                <section className="impressum-section">
                    <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                    <p>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default Impressum;
