let openCart = document.querySelector('.cart');
let closeCart = document.querySelector('.goBack');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openCart.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeCart.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Elegant Evening Gown',
        image: 'prod1.jpg',
        price: 250
    },
    {
        id: 2,
        name: 'Bohemian Maxi Dress',
        image: 'prod2.jpg',
        price: 80
    },
    {
        id: 3,
        name: 'Vintage-Inspired Tea Dress',
        image: 'prod3.jpg',
        price: 120
    },
    {
        id: 4,
        name: 'Formal Cocktail Dress',
        image: 'prod4.jpg',
        price: 150
    },
    {
        id: 5,
        name: 'Casual Summer Sundress',
        image: 'prod5.jpg',
        price: 50
    },
    {
        id: 6,
        name: 'Chic Little Black Dress',
        image: 'prod6.jpg',
        price: 100
    },
    {
        id: 7,
        name: 'Fairy-Tale Ballgown',
        image: 'prod7.jpg',
        price: 300
    },
    {
        id: 8,
        name: 'Flowy Beach Cover-Up',
        image: 'prod8.jpg',
        price: 40
    }

];

let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="images/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add to Cart</button>
        `;
        list.appendChild(newDiv);
    })
}

initApp();

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="images/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class = "count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+   </button>
            </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }
    else {
        listCards[key].quantity = quantity; 
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}



