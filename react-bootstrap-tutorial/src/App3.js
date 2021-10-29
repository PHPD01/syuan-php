
// 小學哥哥教的

// 引入
import '../components/css/RitButton.css';
// import carouselIMG from '../carouselIMG.jpg';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function RitButton() {

    let data = {
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
    }

    // for (let i in data["country"]["regions"]) {
    //     console.log(data["country"]["regions"][i]["name"]);
    //     let regions = data["country"]["regions"];

    //     let cities = regions[i]["cities"];
    //     for (let x in cities)
    //         console.log(cities[x]);
    // }
    // console.log(data["country"]["name"]);
    // console.log(data["country"]["regions"]);

    // data["country"]["regions"].map(function (region) {
    //     console.log(region["name"]);

    //     region["cities"].map(function (city) {

    //         console.log(city);
    //     })
    // })

    // data.country.regions.map(function (region) {
    //     console.log(region.name);

    //     region.cities.map(function (city) {

    //         console.log(city);
    //     })
    // })

    data.country.regions.map(region => {
        console.log(region.name);

        region.cities.map(city => {
            console.log(city);
        })
    })

    // return (

    // );
}



export default RitButton;