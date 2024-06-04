import { cardComponent } from "../component/cardComponent.js";


const renderArea = document.querySelector('#card-area');

var BASE_URL = "http://127.0.0.1:5500/data/product.json";

fetch(BASE_URL).then((res) => res.json()).then((data) => {
    data.map((product)=>{
            renderArea.innerHTML += cardComponent(product);
        })
})
