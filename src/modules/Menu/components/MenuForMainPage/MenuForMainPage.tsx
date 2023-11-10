import { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { IconBasket } from '../../../../UI/IconBasket/IconBasket'
import classesMenu from '../../styles/menu.module.css'
import { useNavigate } from 'react-router-dom'
import { MAIN_ROUTE, STORE_ROUTE } from '../../../../routes/consts'
import { Logo } from '../../../../UI/Logo/Logo'

export const MenuForMainPage = () => {
    const [sizeWindow, setSizeWindow] = useState<number>(window.innerWidth);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const navigate = useNavigate();


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
                <Navbar expand="xl" className={isMenuOpen ? classesMenu.customNavbarMenuOpen : classesMenu.customNavbarMain} data-bs-theme="dark" >
                    <Container className="">
                        <Navbar.Brand className={`p-0 ${classesMenu.logo}`} onClick={() => navigate(MAIN_ROUTE)}><Logo/></Navbar.Brand>
                        <Navbar.Toggle onClick={toggleMenu} aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className={`d-flex  ${classesMenu.customContainerNav}`}>
                                <Nav className={`d-flex  ${classesMenu.customContainerNav}`}>
                                    <Nav.Link className={classesMenu.customNavLink} onClick={() => navigate(STORE_ROUTE)}>Магазин</Nav.Link>
                                    <Nav.Link className={classesMenu.customNavLink} href="#features">О бренде</Nav.Link>
                                    <Nav.Link className={classesMenu.customNavLink} href="#pricing">Контакты</Nav.Link>
                                    <Nav.Link className={classesMenu.customNavLink} href="#home">Доставка и оплата</Nav.Link>
                                    <Nav.Link className={classesMenu.customNavLink} href="#features">FAQ</Nav.Link>
                                    <Nav.Link className={classesMenu.customNavLink} href="#pricing">
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
            <Navbar className={classesMenu.customNavbarMain} data-bs-theme="dark" >
                <Container className="d-flex justify-content-around">
                        <Nav className={`mo-auto gap-3 ${classesMenu.customNav}`}>
                            <Nav.Link className={classesMenu.customNavLink} onClick={() => navigate(STORE_ROUTE)}>Магазин</Nav.Link>
                            <Nav.Link className={classesMenu.customNavLink} href="#features">О бренде</Nav.Link>
                            <Nav.Link className={classesMenu.customNavLink} href="#pricing">Контакты</Nav.Link>
                        </Nav>
                        <Navbar.Brand className={`${classesMenu.logo}`} onClick={() => navigate(MAIN_ROUTE)}><Logo/></Navbar.Brand>
                        <Nav className={`mo-auto gap-3 ${classesMenu.customNav}`}>
                            <Nav.Link className={classesMenu.customNavLink}  href="#home">Доставка и оплата</Nav.Link>
                            <Nav.Link className={classesMenu.customNavLink}  href="#features">FAQ</Nav.Link>
                            <Nav.Link className={classesMenu.customNavLink}  href="#pricing">
                                <IconBasket />
                            </Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </>
    )
}
