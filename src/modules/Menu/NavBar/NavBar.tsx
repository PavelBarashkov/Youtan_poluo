import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IconBasket } from '../../../UI/IconBasket/IconBasket';
import { Logo } from '../../../UI/Logo/Logo';
import classesNavBar from './navbar.module.css'


export const NavBar = () => {
    const [sizeWindow, setSizeWindow] = useState<number>(window.innerWidth);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setSizeWindow(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
          document.body.style.overflow = 'hidden'; 
        } else {
          document.body.style.overflow = 'auto'; 
        }
      }, [isMenuOpen]);

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    if (sizeWindow < 1200) {
        return (
            <>
            <Navbar expand="xl" className={isMenuOpen ? classesNavBar.customNavbarMenuOpen : classesNavBar.customNavbar} data-bs-theme="dark" >
                <Container className="">

                    <Navbar.Brand className='p-0' href="#home"><Logo/></Navbar.Brand>

                    <Navbar.Toggle onClick={toggleMenu} aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className={`d-flex  ${classesNavBar.customContainerNav}`}>
                            <Nav className={`d-flex  ${classesNavBar.customContainerNav}`}>

                                <Nav.Link className={classesNavBar.customNavLink} href="#home">Магазин</Nav.Link>
                                <Nav.Link className={classesNavBar.customNavLink} href="#features">О бренде</Nav.Link>
                                <Nav.Link className={classesNavBar.customNavLink} href="#pricing">Контакты</Nav.Link>

                                <Nav.Link className={classesNavBar.customNavLink} href="#home">Доставка и оплата</Nav.Link>
                                <Nav.Link className={classesNavBar.customNavLink} href="#features">FAQ</Nav.Link>
                                <Nav.Link className={classesNavBar.customNavLink} href="#pricing">
                                    <IconBasket />
                                </Nav.Link>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        )
    }



    return (
        <>
            <Navbar className={classesNavBar.customNavbar} data-bs-theme="dark" >
                <Container className="d-flex justify-content-around">
                        <Nav className={`mo-auto gap-3 ${classesNavBar.customNav}`}>
                            <Nav.Link className={classesNavBar.customNavLink} href="#home">Магазин</Nav.Link>
                            <Nav.Link className={classesNavBar.customNavLink} href="#features">О бренде</Nav.Link>
                            <Nav.Link className={classesNavBar.customNavLink} href="#pricing">Контакты</Nav.Link>
                        </Nav>

                        <Navbar.Brand href="#home"><Logo/></Navbar.Brand>

                        <Nav className={`mo-auto gap-3 ${classesNavBar.customNav}`}>
                            <Nav.Link className={classesNavBar.customNavLink}  href="#home">Доставка и оплата</Nav.Link>
                            <Nav.Link className={classesNavBar.customNavLink}  href="#features">FAQ</Nav.Link>
                            <Nav.Link className={classesNavBar.customNavLink}  href="#pricing">
                                <IconBasket />
                            </Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </>
  )
}