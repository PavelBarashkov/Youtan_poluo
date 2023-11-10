import { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { IconBasket } from '../../../../UI/IconBasket/IconBasket'
import classesMenu from '../../styles/menu.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { MAIN_ROUTE, STORE_ROUTE } from '../../../../routes/consts'
import { Logo } from '../../../../UI/Logo/Logo'
import { scrollToBrand } from '../../helpers/scrollTo'
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

    const active = ({isActive}: any) => {
        return isActive ? `${classesMenu.customNavLink_active}` : `${classesMenu.customNavLink}`;
    }

    if (sizeWindow < 1200) {
        return (
            <Navbar  
                expanded={isMenuOpen} 
                expand="xl" 
                className={isMenuOpen ? classesMenu.customNavbarMenuOpen : classesMenu.customNavbarMain} 
                data-bs-theme="dark" 
            >
                <Container className="">
                    <Navbar.Brand 
                        className={`p-0 ${classesMenu.logo}`} 
                        onClick={() =>  {
                            toggleMenu();
                            navigate(MAIN_ROUTE);
                        }}
                    >
                        <Logo/>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={toggleMenu} aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className={`d-flex  ${classesMenu.customContainerNav}`}>
                            <Nav className={`d-flex  ${classesMenu.customContainerNav}`}>
                                <NavLink 
                                    className={active} 
                                    to={STORE_ROUTE} 
                                    onClick={() => {
                                        toggleMenu();
                                        navigate(STORE_ROUTE);
                                    }}
                                >
                                        Магазин
                                </NavLink>
                                <NavLink 
                                    className={classesMenu.customNavLink} 
                                    to={MAIN_ROUTE}  
                                    onClick={() => {
                                        toggleMenu();
                                        scrollToBrand('info');
                                    }}
                                >
                                        О бренде
                                </NavLink>
                                <NavLink 
                                    className={classesMenu.customNavLink} 
                                    to={MAIN_ROUTE}  
                                    onClick={() =>{
                                        toggleMenu();
                                        scrollToBrand('footer');
                                    }} 
                                >
                                    Контакты
                                </NavLink>
                                <NavLink 
                                    className={classesMenu.customNavLink}  
                                    to={MAIN_ROUTE} 
                                    onClick={() => toggleMenu()} 
                                >
                                    Доставка и оплата
                                </NavLink>
                                <NavLink 
                                    className={classesMenu.customNavLink}  
                                    to={MAIN_ROUTE}  
                                    onClick={() => {
                                        toggleMenu();
                                        scrollToBrand('FAQ');
                                    }}
                                >
                                    FAQ
                                </NavLink>
                                <NavLink 
                                    className={classesMenu.customNavLink}  
                                    to={MAIN_ROUTE}  
                                    onClick={() => {
                                        toggleMenu();
                                    }}
                                >
                                    <IconBasket />
                                </NavLink>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
   
    return (
        <>
            <Navbar className={classesMenu.customNavbarMain} data-bs-theme="dark" >
                <Container className="d-flex justify-content-around">
                        <Nav className={`mo-auto gap-3 ${classesMenu.customNav}`}>
                            <NavLink 
                                className={active} 
                                to={STORE_ROUTE} 
                            >
                                Магазин
                            </NavLink>
                            <NavLink    
                                className={classesMenu.customNavLink} 
                                to={MAIN_ROUTE}  
                                onClick={() => scrollToBrand('info')}
                            >   
                                О бренде
                            </NavLink>
                            <NavLink 
                                className={classesMenu.customNavLink} 
                                to={MAIN_ROUTE}  
                                onClick={() => scrollToBrand('footer')} 
                            >
                                Контакты
                            </NavLink>
                        </Nav>
                        <Navbar.Brand 
                            className={`${classesMenu.logo}`} 
                            onClick={() => navigate(MAIN_ROUTE)}
                        >
                            <Logo/>
                        </Navbar.Brand>
                        <Nav className={`mo-auto gap-3 ${classesMenu.customNav}`}>
                            <NavLink 
                                className={classesMenu.customNavLink}  
                                to={MAIN_ROUTE} 
                            >
                                Доставка и оплата
                            </NavLink>
                            <NavLink 
                                className={classesMenu.customNavLink}  
                                to={MAIN_ROUTE}  
                                onClick={() => scrollToBrand('FAQ')}
                            >
                                FAQ
                            </NavLink>
                            <NavLink 
                                className={classesMenu.customNavLink}  
                                to={MAIN_ROUTE} 
                            >
                                <IconBasket />
                            </NavLink>
                        </Nav>
                </Container>
            </Navbar>
        </>
    )
}
