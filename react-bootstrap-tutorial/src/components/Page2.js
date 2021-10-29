
// import logo from './logo.svg';

// 引入
// import '../components/css/LftButton.css';
import carouselIMG from '../carouselIMG.jpg';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Page2() {

    return (
        <div>

            <div id="restaurantLeft">

                <div>
                    <form action="">
                        <p>營業</p>
                        <input type="checkbox" id="opennow" />
                        <label for="opennow">營業中</label><br />
                    </form>
                </div>
            </div>

            <div id="restaurantRight">
                <section class="storeSection">
                    <div class="row ">
                        <div class="col-3 ">
                            <a href="" class="">
                                <img class="storepic" src={carouselIMG} alt="" />
                            </a>
                        </div>
                        <div class="col-3 storeinfor">
                            <div>店名：假店名</div>
                            <div>營業時間：00:00 - 00:00</div>
                            <div>低消：xxx元</div>
                            <div>星星評分：</div>
                            <div class="storeaddress">地址：台中市南區某某某路某某某巷某某某某某號</div>
                            <div class="storetag">標籤：</div>
                        </div>
                        <div class="col-2">3</div>
                        <div class="col-2">4</div>
                        <div class="col-2">5</div>
                    </div>
                </section>
            </div>
        </div>
    );
}



export default Page2;