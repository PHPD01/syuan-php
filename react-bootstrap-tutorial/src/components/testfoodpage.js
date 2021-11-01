// 連接後端資料，按照大均教法

// 測試接後端
import React, { useState, useEffect } from 'react';

import { Button } from 'react-bootstrap';
import '../components/css/Page2.css';
import carouselIMG from '../carouselIMG.jpg';
import emailbacktop from '../emailbacktop.png';
import upbacktop from '../upbacktop.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ResterauntPage from "./ResterauntPage";
// import FoodtypePage from "./FoodtypePage";
import CitytypePage from "./CitytypePage";

function FoodtypePage() {

    //                     useState是系統給的名稱，是固定不能自己改的
    //                     []是看後端到時給的資料型態，再做更改
    const [data, setData] = useState([]);
    const [change, setChange] = useState(false);

    useEffect(() => {
        let apidata = [{
            "country": {
                "name": "台灣",
                "regions": [
                    {
                        "name": "北部",
                        "cities": ["台北", "桃園"]
                    },
                    {
                        "name": "中部",
                        "cities": ["台中", "南投"]
                    }
                ]
            }
        },
        {
            "country": {
                "name": "美國",
                "regions": [
                    {
                        "name": "北部",
                        "cities": ["台", "桃園"]
                    },
                    {
                        "name": "中部",
                        "cities": ["台中", "南投"]
                    }
                ]
            }
        }]

        setData(apidata)
        console.log("已更新");
        // []是參數，根據你想改變的參數，呼叫此箭頭函式
        //change
    }, [change])
    // console.log(data);

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
                {data.map(item => {
                    console.log(item);
                    return (
                        <Button>
                            {
                                item.country.name
                            }
                        </Button>
                    )
                })}
                <Button onClick={() => setChange(true)}>re</Button>

                <div>
                    <Button as={Link} to={"/citytpePage"} variant="success">中式</Button>
                </div>
                <div id="restaurantRight">
                    <section className="storeSection">
                        <div className="row ">
                            <div className="col-3 ">
                                {/* <Button as={Link} to={"/citytpePage"} variant="success">中式</Button> */}
                                {/* <Link to="/resterauntPage">
                                    <img className="storepic" src={carouselIMG} alt="" />
                                </Link> */}
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

            {/* 在照片和第二格時，都可以點選跳轉第三頁 */}
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
                                <Link to="/resterauntPage" className="topage3">
                                    <div>店名：foodtype</div>
                                    <div>營業時間：00:00 - 00:00</div>
                                    <div>低消：xxx元</div>
                                    <div>星星評分：</div>
                                    <div className="storeaddress">地址：台中市南區某某某路某某某巷某某某某某號</div>
                                    <div className="storetag">標籤：</div>
                                </Link>
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
                <a href="#">
                    <img src={upbacktop} className="backtopimg" alt="" />
                </a>
            </section>



        </div>
    );
}

export default FoodtypePage;
