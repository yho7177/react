import ShopNavBar from "../comm/nav";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getValue } from "@testing-library/user-event/dist/utils";
import { Nav } from 'react-bootstrap';

let YellowButton = styled.button`
    background : yellow;
    color : red;
    padding : 10px;
`

let BlackBox = styled.div`
    background : ${props => props.bg};
    width : ${props => props.width};
    height : 100px;
`

function Detail(props) {
    /*
        LifeSycle
        Mount : 페이지에 장착
        update : 페이지 업데이트
        unMount : 페이지 제거
        --> 사이사이 로직 추가 가능
    */
    let [count, setCount] = useState(0);
    let [hideSwitch, setHideSwitch] = useState(true);
    useEffect(() => {
        /*
         쓰는이유 : html 렌더링 후에 작동 -> 어려운 연산, 서버에서 데이터가져오는 작업, 타이머
         mount, update시 실행
        */
        let a = setTimeout(() => { setHideSwitch(false) }, 3000)
        return () => {
            // useEffect 동작전에 실행  -> 기존코드 치우는거 작성많이함
            // ex -> 기존 데이터 요청은 제거해주세요~
            clearTimeout(a);
        }
    }, [hideSwitch /* 애가 변할떄마다 실행 없으면 mount에만 실행*/]);

    let [text, setText] = useState("");
    useEffect(() => {
        if (isNaN(text)) {
            alert("숫자만 입력가능합니다!");
            setText('');
        }
        return () => {

        }
    }, [text]);



    let { id } = useParams();
    let shoesData = props.shoes.find((e) => e.id == id);
    let [tabState, setTabState] = useState(0);
    let [fade, setFade] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setFade('end');
            return () => {
                setFade('');
            }
        }, 100);
    })
    return <>
        <div className={"container start " + fade}>
            {
                hideSwitch === true
                    ? <div className="alert alert-warning" style={{}}>
                        2초이내 구매시 할인!!
                    </div>
                    : null
            }

            <button onClick={() => {
                setHideSwitch(true);
            }}>ㅁㄴ</button>
            <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
            <div className="row">
                <div className="col-md-6">
                    <img src={shoesData.imgUrl} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{shoesData.title}</h4>
                    <p>{shoesData.content}</p>
                    <p>{shoesData.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
                {/* <BlackBox bg = 'blue' width = '100px'>
                    <YellowButton>버튼</YellowButton>
                </BlackBox> */}
                <Nav variant="tabs" defaultActiveKey="link-0">
                    <Nav.Item onClick={() => {
                        setTabState(0);
                    }}>
                        <Nav.Link eventKey="link-0">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={() => {
                        setTabState(1);
                    }}>
                        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={() => {
                        setTabState(2);
                    }}>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                </Nav>
               <TabState tabState = {tabState} />

            </div>


        </div>
    </>;
  
}

function TabState({tabState}) {
    let [fade, setFade] = useState("")
    
    useEffect(function() {
        let a = setTimeout(() => {
            setFade("end")    
        }, 10);
        
        return () => {
            clearTimeout(a)
            setFade('');
        }
    }, [tabState])
    
    return <div className={"start " + fade}>
        { [<div>0번내용</div>, <div>1번내용</div>, <div>2번내용</div>][tabState] }
    </div>
}







export default Detail;