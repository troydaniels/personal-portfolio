import React from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { Wrapper, Overlay } from './styles';

 class Header extends React.Component {
     componentDidMount() {
        console.log("window", window)
        window.addEventListener('scroll', () => {
            const {pageYOffset, screen} = window;
            const { height } = screen;
            const header = document.getElementById('header');

            header.style.opacity = (1 - ((height -pageYOffset)/height)).toString();
            });
    }

    render() {
         const {sidebar, toggle} = this.props;
        return (
            <Wrapper id="header">
                <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)}/>
                <Navbar/>
                <Hamburger sidebar={sidebar} toggle={toggle}/>
                <Sidebar sidebar={sidebar} toggle={toggle}/>
            </Wrapper>
        );
    }
};

export default Header;
