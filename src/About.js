import React, { Component } from 'react';
import {
    Container,
    Row,
} from 'reactstrap';
import './About.css';
import { Collapse } from 'react-collapse';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpened: false};
      }
    render() {
        const {isOpened} = this.state;

        return (
            <div>
                <section id="about" className="section-full gray-bg">
                    <Container>
                        <Row className="justify-content-center">
                            <div className="col-lg-10">
                                <div className="section-title text-center">
                                    <p className="text-uppercase">Bboy Bruce Wayne</p>
                                    <h3>Membre du collectif Total Feeling Crew, Matthieu est un danseur professionnel spécialisé en Breakdance. Il est diplomé d’une licence en animation sociale et socioculturelle. </h3>
                                    <h3>Passionné par la culture Hip-Hop depuis toujours, il s'initie au Graffiti et au DJing mais c'est dans la danse qu'il persévère.
En 2007, il intègre Total Feeling Crew avec lequel il se fera connaitre dans le monde des compétitions. Groupe de renommée internationale, les B-boys prennent la première place au Battle Of the Year France en 2015.</h3>
                                    <Collapse isOpened={isOpened}>
                                        <h3>Son voyage en Australie en 2010, marqué par son intégration au sein du groupe Kings Only (Melbourne), lui permet de faire évoluer sa danse. Mais celle-ci prend une tout autre ampleur à son retour à Paris en 2013 lorsqu'il rencontre Karim Barouche, Laos et Xavier Plutus avec lesquels il approfondit son approche musicale et sa vision artistique de la danse.</h3>
                                        <h3>Dès lors, Matthieu en fait son métier en intégrant l'association Break Dance Crew qui lui donne l'opportunité de dispenser des cours réguliers et de faire des spectacles et prestations événementiels à travers la France.</h3>
                                        <h3>A partir de 2015, il devient une figure notable du Breakdance français de sa génération, notamment après sa victoire solo au HipOpsession.
Il multiplie alors les déplacements en Europe et dans le monde pour juger des "battles" et organiser des "workshops, tout en continuant de donner des cours de danse à Paris, l'enseignement restant sa principale activité depuis 2012. </h3>
                                        <h3>En quête constante de nouvelles expériences, il se remet au graffiti et au DJing et profite de ses voyages pour dénicher des vinyles et les jouer dans des "Jams".
Musicien depuis son plus jeune âge, Matthieu s’initie au Live Looping avec ses instruments (guitare, clarinette, basse, harmonicas) qui viendront agrémenter ses projets personnels.</h3>
                                        <h3>Nourri d'expériences scéniques depuis ses débuts dans la musique et dans la danse, il se produit récemment dans différents shows en vidéo mapping avec la compagnie Hybride.</h3>
                                        <h3>De plus, ayant le goût de partager son savoir et marqué par son cursus universitaire, il met en scène des spectacles avec ses différents élèves. Aussi, il intervient en centre social pour des enfants déscolarisés ainsi qu'en prison et développe une initiation danse avec les enfants de l’Insititut National des Jeunes aveugles à Paris. </h3>
                                        <h3>En véritable passionné de la culture Hip-Hop, il organise des jams de danse sur Paris et créer son association afin de promouvoir ces arts auprès de tous les publics. </h3>
                                    </Collapse>
                                    <a onClick={() => this.setState({isOpened: true})} className="primary-btn d-inline-flex align-items-center">Show more<span className="lnr lnr-arrow-right"></span></a>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default About;