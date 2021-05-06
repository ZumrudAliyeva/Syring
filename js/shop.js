'use strict';
$(function () {

    let productCount = 0;
    let total = 0;
    $(document).on('click', '.add-to-cart-btn', function () {
        $('.empty-msg').hide();
        $('p.buttons').show();
        $('p.sub-total').show();

        let img = $(this).parent().prev().attr('src');

        let priceElmnt = $(this).parents('li').find('.pro-price');
        let price = parseFloat(priceElmnt.text().replace('$', ''));
        let title = $(this).parents('li').find('h5').text();

        total += price;

        let cartItemLi = `
<li class="mini_cart_item">
<a href="#" class="remove remove_from_cart_button" aria-label="Remove this item" data-product_id="1763" data-cart_item_key="df9028fcb6b065e000ffe8a4f03eeb38" data-product_sku="">×</a>
<a href="#"><img width="370" height="492" src="${img}" class="prod-img" alt="">${title}</a>
<span class="quantity">1 × <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>${price}</span></span></li>
`
        $('.cart_list').append(cartItemLi);
        productCount++;

        $('.cart_total').text(productCount);
        $('span.Price').children().last().text(total);

    })
        
    $(document).on('click', '.remove_from_cart_button', function () {
        let listLength = $('.cart_list li').length;
        let priceElmnt = $(this).parents('li').find('.quantity').children();
        let price = parseFloat(priceElmnt.text().replace('$', ''));
        $(this).parent().remove();
        if (listLength > 0) {
            productCount--;
            
        total -= price;

        } else {
            $('.empty-msg').show();
            $('p.buttons').hide();
            $('p.sub-total').text('0');
        }
        $('.cart_total').text(productCount);
    $('span.Price').children().last().text(total);

})
})