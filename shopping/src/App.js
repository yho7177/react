import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import main_bg from './img/bg.png';
import { useState } from 'react';
import shoes_data from './data';
import ShopNavBar from './comm/nav';
import { Routes, Route } from 'react-router-dom';
import Detail from './page/detail';

function App() {

  return (
    <div className="App">
      <ShopNavBar />
      
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/detail" element={ <Detail /> } />
        <Route path="/about" element={ <div>about 페이지임</div> } />
        <Route path="/home" element={ <div>home 페이지임</div> } />
        <Route path="*" element={ <div>404페이지임</div> } />
      </Routes>

    </div>

  );
}

function MainPage() {
  return <>

    <div className='main-bg' style={{ backgroundImage: 'url(' + main_bg + ')' }}></div>

    <Container>
      <Row>
        {
          shoes_data.map(function (e, i) {
            return <>
              <ShoesList index={i} />
            </>;
          })
        }
      </Row>
    </Container>
  </>;
}

function ShoesList(props) {
  let [shoes] = useState(shoes_data);

  return <>
    <Col xs={12} md={4} onClick={ ListClick }>
      <Image src={'https://codingapple1.github.io/shop/shoes' + (props.index + 1) + '.jpg'} fluid className='list-img' />
      <h4>{shoes[props.index].title}</h4>
      <p>{shoes[props.index].content}</p>
      <p>{shoes[props.index].price}원</p>
    </Col>
  </>;
}

function ListClick(shoes) {
  alert("!");
}

export default App;
