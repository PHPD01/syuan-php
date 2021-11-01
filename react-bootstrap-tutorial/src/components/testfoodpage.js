import React, { Component, IMG } from 'react';
import '../components/css/Page2.css';
import carouselIMG from '../carouselIMG.jpg';
// import igbacktop from '../igbacktop.png';
import emailbacktop from '../emailbacktop.png';
import upbacktop from '../upbacktop.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CitytypePage from "./CitytypePage";
import MemberPage from "./MemberPage";
import ResterauntPage from "./ResterauntPage";
import Page2 from "./Page2";


export default class FoodtypePage extends Component {
    render() {
        return (
            <div className="page2mdstyle">

                <div id="restaurantLeft">

                    {/* 左側篩選器 */}
                    <div>
                        <form action="">
                            <p>營業</p>
                            <input type="checkbox" id="opennow" />
                            <label for="opennow">營業中</label><br />
                        </form>
                    </div>
                </div>

                {/* 右側店家列表 */}
                <section>
                    <div id="restaurantRight">
                        <section className="storeSection">
                            <div className="row ">
                                <div className="col-3 ">

                                    <Link to="/ResterauntPage">

                                        <img className="storepic" src={carouselIMG} alt="" />
                                    </Link>

                                </div>
                                <div className="col-3 storeinfor">
                                    <div>店名：foodtype</div>
                                    <div>營業時間：00:00 - 00:00</div>
                                    <div>低消：xxx元</div>
                                    <div>星星評分：</div>
                                    <div className="storeaddress">地址：台中市南區某某某路某某某巷某某某某某號</div>
                                    <div className="storetag">標籤：</div>
                                </div>
                                <div className="col-2">3</div>
                                <div className="col-2">4</div>
                                <div className="col-2">5</div>
                            </div>
                        </section>

                    </div>
                </section>


                {/* 返回最上層按鈕BACKTOP */}
                <section className="backtop">
                    {/* <a href="#" target="_blanket">
                        <img src={igbacktop} className="backtopimg" alt="" />
                        <p>追蹤我</p>
                    </a> */}
                    {/* <a href="mailto:syuaneat@gmail.co">
                        <div>
                            <img src={emailbacktop} className="backtopimg" alt="" />
                            <p>商業合作</p>
                        </div>
                    </a> */}
                    <a href="#">
                        <img src={upbacktop} className="backtopimg" alt="" />
                    </a>
                </section>


                <div>
                    <Switch>
                        <Route path="/page2">
                            <Page2 />
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
                </div>

            </div>
        )
    }
}