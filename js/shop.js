
'use strict';
$(function () {
 
getAllProductsList();
 
let allProducts = [];
let prods = {};
let counter = 1;
 
 
 
 
    let productCount = 0;
    let total = 0;
 
    $(document).on('click', '.add-to-cart-btn', function () {
 
    let img = $(this).parent().prev().attr('src');
    let priceElmnt = $(this).parents('li').find('.pro-price');
    let price = parseFloat(priceElmnt.text().replace('$', ''));
    let title = $(this).parents('li').find('h5').text();
    let listLength = $('.cart_list li').length;
 
    let cartItemLi = `
    <li class="mini_cart_item">
    <a href="#" class="remove remove_from_cart_button" aria-label="Remove this item" data-product_id="1763" data-cart_item_key="df9028fcb6b065e000ffe8a4f03eeb38" data-product_sku="">×</a>
    <a href="#"><img width="370" height="492" src="${img}" class="prod-img" alt="">${title}</a>
    <span class="quantity">1 × <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>${price}</span></span></li>
    `
        $('.cart_list').append(cartItemLi);
        productCount++;
 
        $('.cart_total').text(productCount);
 
        console.log(listLength);
 
        $('p.sub-total').append(total);
 
 
let product = {
    Image: img,
    Title: title,
    Price: price
}
 
 
if (prods[`product:${counter}`] == undefined) {
    prods[`product:${counter}`] = [];
}
prods[`product:${counter}`].push(product);
localStorage.setItem('data', JSON.stringify(prods));
counter++;
 
})
 
function getAllProductsList() {
    let localProduct = localStorage.getItem('data');
    let object = JSON.parse(localProduct);
 
    for (const key in object) {
 
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            
            element.forEach(e => {
                
                $('.cart_list').append(`
    <li class="mini_cart_item">
    <a href="#" class="remove remove_from_cart_button" aria-label="Remove this item" data-product_id="1763" data-cart_item_key="df9028fcb6b065e000ffe8a4f03eeb38" data-product_sku="">×</a>
    <a href="#"><img width="370" height="492" src="${e.Image}" class="prod-img" alt="">${e.Title}</a>
    <span class="quantity">1 × <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>${e.Price}</span></span></li>
                `)
 
            });
        }
    }
}
 
$(document).on('click', '.remove_from_cart_button', function () {
    $(this).parent('li').remove();
    
})
 
 
//     let productCount = 0;
//     let total = 0;
//     $(document).on('click', '.add-to-cart-btn', function () {
 
//         let img = $(this).parent().prev().attr('src');
 
//         let priceElmnt = $(this).parents('li').find('.pro-price');
//         let price = parseFloat(priceElmnt.text().replace('$', ''));
//         let title = $(this).parents('li').find('h5').text();
 
//         total += price;
 
//         console.log(total);
 
//         $('.empty-msg').hide();
//         $('p.buttons').show();
//         $('p.sub-total').show();
 
//         let cartItemLi = `
// <li class="mini_cart_item">
// <a href="#" class="remove remove_from_cart_button" aria-label="Remove this item" data-product_id="1763" data-cart_item_key="df9028fcb6b065e000ffe8a4f03eeb38" data-product_sku="">×</a>
// <a href="#"><img width="370" height="492" src="${img}" class="prod-img" alt="">${title}</a>
// <span class="quantity">1 × <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>${price}</span></span></li>
// `
//         $('.cart_list').append(cartItemLi);
//         productCount++;
 
//         $('.cart_total').text(productCount);
 
//         console.log(listLength);
 
//         $('p.sub-total').append(total);
 
 
 
// let listLength = $('.cart_list li').length;
 
//             $(document).on('click', '.remove_from_cart_button', function () {
//                 $(this).parent('li').remove();
//                 UpdateBasket()
//                 if (listLength === 0) {
//                     productCount--;
                    
//                 } else {
//                     productCount = 0;
//                     $('.empty-msg').show();
//                     $('p.buttons').hide();
//                     $('p.sub-total').hide();
//             }
//                     $('.cart_total').text(productCount);
//     }
 
 
 
 
 
 
// function UpdateBasket() {
//     var basket = JSON.parse(localStorage.getItem("basket"));
//     document.querySelector('#basket-count').innerText = basket.length; // document.querySelector('#basket-count').innerText = basket.reduce((t, p) => t + p.count, 0);
//   }
 
 
 
})
