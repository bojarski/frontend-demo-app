const listingElement = document.querySelector('#listing');
console.log(listingElement.inn);
const response = getProductList();

response.products
    .map(renderProduct)
    .forEach((html) => {
        listingElement.innerHTML += html;
    })
