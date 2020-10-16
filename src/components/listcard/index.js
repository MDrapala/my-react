import React from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';

import Card from './card';

const datas = [{
  title: 'FREAKY',
  description: 'Millie Kessler, une adolescente de 17 ans, occupée à faire bonne figure dans son très élitiste lycée, Blissfield High, devient la nouvelle cible du Boucher, un tueur en série .',
  url: 'https://fr.web.img3.acsta.net/c_222_296/pictures/20/09/22/11/54/5765737.jpg',
}, {
  title: 'TINTIN',
  description: 'Parce qu’il achète la maquette d’un bateau appelé la Licorne, Tintin, un jeune reporter, se retrouve entraîné dans une fantastique aventure à la recherche',
  url: 'https://lh3.googleusercontent.com/proxy/LSIAYt5K_-wlGoKnLvv-h7xkmQehLQkqvS-McKR8uI6KXe_4_c07mRct5GY8EArw1q8bHb8wPN67z8FCeTao8hyz3KbsZ4AdN-F3E8i-kZZMcOERf78QZFUjE6qTv3KM5SHtayrLxcsWI1Ky49sEzDfFEKYH1P7K40_e9gpx',
}, {
  title: 'TENET',
  description: 'Muni d\'un seul mot – Tenet – et décidé à se battre pour sauver le monde, notre protagoniste sillonne l\'univers crépusculaire de l\'espionnage international.',
  url: 'https://fr.web.img6.acsta.net/c_222_296/pictures/20/08/03/12/15/2118693.jpg',
}, {
  title: 'LAST WORDS',
  description: 'En 2085, la Terre n’est plus qu’un immense désert. Les derniers survivants se rejoignent à Athènes, appelés par un ultime espoir...',
  url: 'https://fr.web.img2.acsta.net/c_222_296/pictures/20/10/02/09/53/3407074.jpg',
}];

const ListCard = () => (
  <div>
    <h1>Movies Available</h1>
    <Row>
      {datas.map((data) => (
        <Col sm={4} key={data.id}>
          <Card title={data.title} description={data.description} url={data.url} />
        </Col>
      ))}
    </Row>

  </div>
);

export default ListCard;
