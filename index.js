let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Spinnaker Three Eyes Mens Shoes',
        image: '1.webp',
        price: 6400
    },
    {
        id: 2,
        name: 'Classic Dan Womens Shoes',
        image: '2.webp',
        price: 8400
    },
    {
        id: 3,
        name: 'Janet Waxy Womens Shoes',
        image: '3.webp',
        price: 5600
    },
    {
        id: 4,
        name: 'Joe Polaris Mens Shoes',
        image: '4.webp',
        price: 5040
    },
    {
        id: 5,
        name: 'Docksides Mens Shoes',
        image: '5.webp',
        price: 6400
    },
    {
        id: 6,
        name: 'Spinnaker Mens Shoes (2)',
        image: '6.webp',
        price: 6400
    },
    {
        id: 7,
        name: 'Topsider Mens Shoes',
        image: '7.webp',
        price: 5640
    },
    {
        id: 8,
        name: 'Mens Endeavor Waxed Leather ',
        image: '8.webp',
        price: 4478
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})"><i class="fa-solid fa-cart-plus"></i></button>`;
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
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    console.log(key, quantity);
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}