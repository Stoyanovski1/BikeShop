let products = [{
    name: "Cube Bike",
    image: "cube2019.jpeg",
    price: 800.00,
    qtty: 1,
}, {
    name: "Trek Bike",
    image: "trekfull8.jpg",
    price: 500.00,
    qtty: 1,
}, {
    name: "GT Bike",
    image: "gtavalanche.jpg",
    price: 2100.00,
    qtty: 1,
}, {
    name: "Mountain GT Bike",
    image: "p1.png",
    price: 3000.00,
    qtty: 1,
}, {
    name: "Trek GT Bike",
    image: "p2.png",
    price: 1800.00,
    qtty: 1,
}, {
    name: "Ribale GT Bike",
    image: "p3.png",
    price: 1900.00,
    qtty: 1,
}]

for (let val of products) {
    document.getElementById("products").innerHTML +=
        `<div class="p-2 mb-3" style="width: 18rem; margin: 0 auto;">
  <img src="${val.image}" class="card-img-top" width="200" height="200" alt="${val.name}">
  <div class="card-body">
    <h5 class="card-title">${val.name}</h5>
    <p class="card-text">Price: €${val.price}</p>
    <button type="submit" value="Add to cart" class="btn btn-success addToCart"  style="width:130px">Add to cart</button> 


    
    </div>
  </div>
</div>`
} { /* <button type="submit" value="Buy now" class="btn btn-success buyNow" style="float:right">Buy now</button> */ }
let cart = [];

let addBtns = document.getElementsByClassName("addToCart");
console.log(addBtns)

for (let i = 0; i < addBtns.length; i++) {
    addBtns[i].addEventListener('click', function() {
        addToCart(products[i]);
        // with this function i added ("table") to the HTML!
    })
}
// function for the button (addToCart)!
function addToCart(obj) {
    if (cart.find(function(val) { return val.name == obj.name })) {
        obj.qtty++;
    } else {
        cart.push(obj);
    }
    createCartInHTML();
    total()
}

// let btn = document.getElementsByClassName("btnNumber");

// function addPlusOne() {
//     for (let i = 0; i < btn.length; i++) {
//         btn[i].addEventListener(click, function() {
//             cart[i].qtty++;
//             document.getElementsByClassName("qtty")[i].innerHTML = cart[i].qtty;
//         })
//     }
// }

// function for the sum the price and the qtty!
function total() {
    let total = 0
    for (let val of cart) {
        total = total + (val.price * val.qtty);
    }
    document.getElementById("total").innerHTML = `Total : ${total} $`
}

// function for create the small cart!
function createCartInHTML() {
    document.getElementById("cart").innerHTML = "";
    for (let val of cart) {
        document.getElementById("cart").innerHTML +=
            `<div style="display: flex; justify-content:space-around;"><p>${val.name}</p> 
    <p><img src="${val.image}" width="100"></p>
    <p>${val.price}$</p>
    <p><button type="button" class="btn btn-info minusBtn mx-2" style="align-items: center; border-radius: 50%; padding-bottom: 7px">-</button>
    <span class="qtty">${val.qtty}</span>
    <button type="button" class="btn btn-info plusBtn mx-2" style="align-items: center; border-radius: 50%">+</button>
    <button type="button" class="btn btn-info deleteBtn mx-2" style="align-items: center; border-radius: 50%"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
  </svg></button>
    </div> <hr>`
    }
    let minusBtn = document.getElementsByClassName("minusBtn");
    let plusBtn = document.getElementsByClassName("plusBtn");
    let deleteBtn = document.getElementsByClassName("deleteBtn")

    for (let i = 0; i < plusBtn.length; i++) {
        plusBtn[i].addEventListener('click', function() {
            cart[i].qtty++;
            document.getElementsByClassName("qtty")[i].innerHTML = cart[i].qtty;
            total();
        })
        minusBtn[i].addEventListener('click', function() {
            if (cart[i].qtty == 1) {
                cart.splice(i, 1);
                createCartInHTML();
                total();
            } else {
                cart[i].qtty--;
                document.getElementsByClassName("qtty")[i].innerHTML = cart[i].qtty;
                total();
            }
        })
        deleteBtn[i].addEventListener('click', function() {
            cart.splice(i, 1);
            createCartInHTML();
            total()
        })
    }
}


//<p class="minus">-</p>
//<p class="plus">+</p>

// particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "repulse" }, "onclick": { "enable": false, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; }
//     requestAnimationFrame(update);
// };
// requestAnimationFrame(update);;