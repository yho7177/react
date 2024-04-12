import { Outlet, useNavigate } from 'react-router-dom';

function About() {
    let navi = useNavigate();
    return (
        <div>
            <h4>회사정보임</h4>
            <Outlet />
        </div>
    );
}

export default About;