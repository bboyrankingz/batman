import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import './Studio.css';

class Studio extends Component {
    render() {
        return (
            <div>
                <section id="studio" className="section-full studio-area">
                    <Container>
                        <Row>
                            <Col className="col-lg-6">
                                <p className="text-uppercase text-white">Présentation de l’association</p>
                                <h2 className="h1 text-white text-uppercase mb-20">BREAK MA BARAQUE</h2>
                                <p className="text-white mb-30">L’association parisienne Break Ma Baraque a pour vocation de développer les expressions artistiques liées à la culture Hip-Hop traditionnelle. A travers le Breakdance, le Graffiti et l’art du DJing, Matthieu Hourquebie, connu sous le nom de Bboy Bruce Wayne, fondateur et coordinateur de l’association, propose des cours de danse et des expériences autour des arts de rue mais aussi organise des événements rassemblant les différents acteurs de la communauté Hip-Hop. C’est également grâce à un travail transversal mêlant ces derniers et les partenaires du champs socio-culturel que l’association s’inscrit dans une démarche éducative et pédagogique.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Studio;