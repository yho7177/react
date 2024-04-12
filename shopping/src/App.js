import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import main_bg from './img/bg.png';
import { useEffect, useState } from 'react';
import shoes_data from './data';
import ShopNavBar from './comm/nav';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Detail from './page/detail';
import About from './page/about';
import axios from 'axios';

function App() {
  let [shoes, setShoes] = useState(shoes_data);
  let [addCnt, setAddCnt] = useState(0);
  let [loading, setLoading] = useState("더보기");

  return (
    <div className="App">
      <ShopNavBar />


      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg' style={{ backgroundImage: 'url(' + main_bg + ')' }}></div>
            <MainPage shoes={shoes} />
            {
              addCnt < 2 ? <Button onClick={(e) => {
                setLoading("로딩중");
                axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((data) => {
                    setAddCnt(addCnt + 1);
                    if (addCnt < 2) {
                      let copy = [...shoes, ...data.data];
                      setShoes(copy);
                    }
                    setLoading("더보기");
                  })
                  .catch(() => {
                    console.log("실패함");
                    setLoading("더보기");
                  });

                // axios.post('/urlpage', {name : 'kim'})
                // Promise.all([axios.get('url1'), axios.get('url1')])
                // .then(() => {
                // })


              }} >{loading}</Button> : <></>

            }
          </>
        } />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/home" element={<div>home 페이지임</div>} />
        <Route path="*" element={<div>404페이지임</div>} />

        <Route path="/about" element={<About />}>
          <Route path="location" element={<div>location임</div>} />
          <Route path="member" element={<div>member임</div>} />
        </Route>

        <Route path="/event" element={
          <div>오늘의 이벤트
            <Outlet />
          </div>}>
          <Route path="one" element={<div>첫 주문시 서비스</div>} />
          <Route path="two" element={<div>생일쿠폰</div>} />
        </Route>

      </Routes>

    </div>

  );
}


function MainPage(props) {
  return <>
    <Container>
      <Row>
        {
          props.shoes.map(function (e, i) {
            return <>
              <ShoesList shoes={props.shoes} index={i} />
            </>;
          })
        }
      </Row>
    </Container>
  </>;
}

function ShoesList(props) {
  let navigate = useNavigate();


  return <>
    <Col xs={12} md={4} onClick={() => {
      navigate('/detail/' + props.shoes[props.index].id);
    }}>
      <Image src={'https://codingapple1.github.io/shop/shoes' + (props.index + 1) + '.jpg'} fluid className='list-img' />
      <h4>{props.shoes[props.index].title}</h4>
      <p>{props.shoes[props.index].content}</p>
      <p>{props.shoes[props.index].price}원</p>
    </Col>
  </>;
}


export default App;
