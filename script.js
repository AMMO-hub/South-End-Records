// Enkel animation vid klick på produkt
const products = document.querySelectorAll('.product');

products.forEach(item => {
    item.addEventListener('click', () => {
        alert(`${item.querySelector('.product-name').textContent} valdes!`);
    });
});

console.log("South Ends Records sida laddad");
