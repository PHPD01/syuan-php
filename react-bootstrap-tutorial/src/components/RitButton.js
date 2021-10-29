
// import logo from './logo.svg';

// 引入
import '../components/css/RitButton.css';
// import carouselIMG from '../carouselIMG.jpg';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function RitButton() {

    return (
        <React.Fragment>
            <section class="Citytype">
                <div class="CitytypeGrid">
                    <div class="Citytype_section">北部</div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">臺北</button>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">新北</button>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">基隆</button>
                        </a>
                    </div>
                    <div class="Citytype_section"></div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">桃園</button>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">新竹</button>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">宜蘭</button>
                        </a>
                    </div>
                </div>
            </section><br />

            <section class="Citytype">
                <div class="CitytypeGrid">
                    <div class="Citytype_section">中部</div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">苗栗</button>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">臺中</button>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">彰化</button>
                        </a>
                    </div>
                    <div class="Citytype_section"></div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">南投</button>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">雲林</button>
                        </a>
                    </div>

                </div>
            </section><br></br>

            <section class="Citytype">
                <div class="CitytypeGrid">
                    <div class="Citytype_section">南部</div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">嘉義</button>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">臺南</button>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">高雄</button>
                        </a>
                    </div>
                    <div class="Citytype_section"></div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">屏東</button>
                        </a>
                    </div>
                </div>
            </section><br></br>



            {/* 會斷開的東部 */}
            <section class="Citytype testttt">
                <div class="CitytypeGrid_east ">
                    <div class="Citytype_east ">東部</div>
                    <div class="citytype_btnnn">
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn ">花蓮</button>
                        </a>
                    </div>
                    <div class="citytype_btnnn">
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">臺東</button>
                        </a>
                    </div>
                    <div class="eastspace">

                    </div>
                </div>
            </section><br></br>

            <section class="Citytype">
                <div class="CitytypeGrid">
                    <div class="Citytype_section">離島</div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">澎湖</button>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">金門</button>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">連江</button>
                        </a>
                    </div>
                    <div class="Citytype_section"></div>
                    <div>
                        <a href="">
                            <button type="button" class="btn btn-outline-success citytype_btn">小琉球</button>
                        </a>
                    </div>
                </div>
            </section>

        </React.Fragment >
    );
}



export default RitButton;