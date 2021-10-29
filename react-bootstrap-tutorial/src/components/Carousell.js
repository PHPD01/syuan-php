
// 相片輪播圖元件

// import logo from './logo.svg';

// 引入
import '../components/css/CarouselCSS.css';
import carouselIMG from '../carouselIMG.jpg';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@restart/ui/esm/Button';


function Carousell() {

    // 寫後端連接資料庫管理

    return (
        <div>
            <Carousel className="carouselcontrol">
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={carouselIMG}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carouselIMG}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carouselIMG}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            {/* <div class="carouselInput">
                <form action="">
                    <input type="radio" id="newactivity" name="carouselInput" />
                    <label for="newactivity">最新活動</label><br />

                    <input type="radio" id="hotsearch" name="carouselInput" />
                    <label for="hotsearch">熱門搜尋</label><br />

                    <input type="radio" id="newstore" name="carouselInput" />
                    <label for="newstore">新進店家</label>
                </form>
            </div> */}

        </div>
    );
}



export default Carousell;