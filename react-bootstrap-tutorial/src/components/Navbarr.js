
// 照著影片版本做

// import logo from './logo.svg';

// 引入
import '../components/css/Navcss.css';
import { Container, Nav, Button, NavDropdown, Navbar, Form, FormControl } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import FoodtypePage from "./FoodtypePage";
import CitytypePage from "./CitytypePage";
import MemberPage from "./MemberPage";
import Home from "./Home";
import ResterauntPage from "./ResterauntPage";
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbarr() {
    return (
        <div>

            <Router>
                <Container className="containerr">
                    <Navbar bg="light" expand="lg" className="navheight">
                        <Container fluid className="navbgc">
                            <Navbar.Brand href="/">LOGO</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    {/* <Nav.Link as={Link} to={"/home"} className="navlink">home</Nav.Link> */}
                                    <Nav.Link as={Link} to={"/foodtypePage"} className="navlink">類型篩選</Nav.Link>
                                    <Nav.Link as={Link} to={"/citytypePage"}>縣市篩選</Nav.Link>
                                    {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown> */}
                                    <Nav.Link as={Link} to={"/memberPage"}>會員登入
                                    </Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>

                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/foodtypePage">
                            <FoodtypePage />
                        </Route>
                        <Route path="/citytypePage">
                            <CitytypePage />
                        </Route>
                        <Route path="/memberPage">
                            <MemberPage />
                        </Route>
                        <Route path="/resterauntPage">
                            <ResterauntPage />
                        </Route>
                    </Switch>
                    {/*舉例解釋： Route只要偵測到目前的path「有包含你設定的字串」就會顯示該頁面，
                        當多個route符合時，Switch會導向第一個符合的Route，
                        所以你在http://localhost:3000/#/second 的時候實際上是顯示firstPage。
                        所以要透過在firstPage的Route的props當中加上 exact 這個屬性，
                        這個props會讓Route必須偵測到目前路徑完全符合path中的字串時才會顯示該頁面*/}
                </div>

            </Router>




        </div>
    );
}


export default Navbarr;