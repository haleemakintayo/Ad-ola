

const products = {
  seafood: [
    { name: 'Bonga Fish', price: '$22 for 5oz', image: 'img/bongafish.jpeg' },
    // { name: 'Roasted Crayfish', price: '$00.00', image: 'img/crayfish.jpg', sale: true, originalPrice: '$20.00' },
    { name: 'Bonga Grounded fish', price: '$7/100g', image: 'img/bonga powder.jpg', sale: true, originalPrice: '$50.00' },
    { name: 'Crayfish whole', price: '$7/100g', image: 'img/crayfish.jpg' },
    { name: 'Grounded Crayfish', price: '$7/100g', image: 'img/groundedcrayfish.png' },
  ],
  vegetables: [
    { name: 'Dried Okazi leaves 50g', price: '$00.00', image: 'img/Okazi.jpg' },
    { name: 'Cameroon Pepper', price: '$00.00', image: 'img/Cameroonpepper.jpeg' },
    { name: 'Tiger Nutmeg powder 100g', price: '$00.00', image: 'img/nutmeg1.jpg', popular: true },
    { name: 'Lemon Grass', price: '$00.00', image: 'img/Lemongrass.jpg', popular: true },
    { name: 'Alligator Pepper', price: '$00.00', image: 'img/alligatorpepper.jpg', popular: true },
  ],
  grains: [
    { name: 'Ayoola Cassava Fufu (akpu)', price: ' 0.9kg - $10.00', image: 'img/Ayoola Foods Cassava Fufu .jpeg' },
    { name: 'Ayoola Foods Pounded yam', price: ' 0.9 kg - $18.00', image: 'img/Ayoola Foods Pounded Yam .jpg', sale: true, originalPrice: '$19.00' },
    { name: 'Ayoola Foods Beans Flour 0.9kg', price: '$00.00', image: 'img/Ayoola Beans Flour.jpeg', popular: true },
    { name: 'Praise Tom Brown 500g', price: '$00.00', image: 'img/Praise Tom Brown .jpg', popular: true },
    { name: 'Golden Morn(950g x 6)', price: '$78', image: 'img/Golden Morn.jpg', popular: true },
    { name: 'Honey Well Semolina', price: '$00.00', image: 'img/Honey Well Semolina.jpg', popular: true },
    { name: 'Gari Ijebu ', price: '$6.50/kg', image: 'img/Gari Ijebu (bag).jpg' },
    { name: 'Amala Isu', price: '$100/10kg', image: 'img/Elubo isu.png' },
    { name: 'Amala Lafun', price: 'nil', image: 'img/Elubo lafun.png' },
    { name: 'Ola Ola Pounded Yam', price: '$180/Carton', image: 'img/Ola Ola poundo.png' },
    { name: 'Oloyin Beans', price: '$13/kg', image: 'img/Oloyin beans .png' },
  ],
  snacks: [
    { name: 'Spicy kulikuli', price: '$00.00', image: 'img/Spicy Kulikuli.png' },
    { name: 'Minimie Chinchin', price: '$00.00', image: 'img/Minimie Chinchin.jpeg' },
    { name: 'Coconut candy (sisi pelebe0', price: '$00.00', image: 'img/Coconut Candy Sisi Pelebe.jpg' },
    { name: 'Fried plantain chips (kpekere)', price: '$00.00', image: 'img/Fried Plantain Chips.jpeg' },
    { name: 'Primara', price: '$00.00', image: 'img/Spicy Kulikuli.png' },
    { name: 'Edible Tiger Nuts 8oz', price: '$00.00', image: 'img/Edible Tiger Nuts 8oz.png' },
  ],
  dairy: [
    { name: 'Nido Fortified Milk Powder 400g', price: '$10.00', image: 'img/Nido.jpeg' },
    { name: 'Derica Tomato Paste 850g', price: '$100 per carton', image: 'img/Derica Tomato Paste .jpg' },
    { name: 'Gino Tomato Paste 210g', price: '$00.00', image: 'img/Gino Tomato Paste 210g.jpg' },
    { name: 'Maggi Arome', price: '$00.00', image: 'img/Maggi-Arome.jpg' },
  ],
  instantfoods: [
    // { name: 'Knorr maggi cubes', price: '$00.00', image: 'img/k' },
    { name: 'Nestle Maggi Crayfish flavour ', price: '$170 per carton', image: 'img/Maggi Crayfish Nestle.jpg' },
    { name: 'Indomie Noodles', price: '$00.00', image: 'img/indomiei.jpg' },
    { name: 'Maggi Chicken Flavour', price: '$00.00', image: 'img/maggic chicken flavour.jpg' },
    { name: 'Quaker White Oats', price: '$00.00', image: 'img/' },
    { name: 'Praise Palm Cream 400g', price: '$00.00', image: 'img/Praise Palm Cream 400g.jpeg' },
    { name: 'Praise Palm Oil 2 liters', price: '$20.00', image: 'img/Praise Palm Oil 2 liters.jpg' },
    { name: 'Peanut Butter NUTZY', price: '$00.00', image: 'img/Peanut Butter NUTZY.jpg' },
    { name: 'Original Ador Ogbono', price: '$00.00', image: 'img/Original Ador Ogbono.png' },
    { name: 'Ogbono Grounded', price: '50g @12.00', image: 'img/ground-ogbono.png' },
    { name: 'Ogbono Whole', price: '$00.00', image: 'img/Original Ador Ogbono.png' },
    { name: 'Palm oil', price: '$12/L', image: 'img/Palm oil.png' },
    { name: 'Egusi whole & Grounded', price: '$8/250g', image: 'img/Egusi whole & Grounded.png' },
    // { name: 'Ogbono', price: 'nil', image: 'img/ogbono.jpg' },
    { name: 'Knorr beef', price: '$130/carton', image: 'img/Knorr beef.png' },
    { name: 'Knorr chicken', price: '$130/carton', image: 'img/Knorr Chicken.png' },
    { name: 'Maggi star', price: '$200/carton @24 packets', image: 'img/Maggi star.png' },
    { name: 'Grandiose pap white, yellow, brown', price: '$120/carton', image: 'img/Grandiose pap.png' },
    // { name: 'Derica 850g', price: '$100/carton', image: 'img/derica.jpg' },
    { name: 'Spicity fried rice, joloff rice', price: '$70/Carton', image: 'img/Spicity fried rice.png' },
    // { name: 'Aguilera', price: '$78/carton', image: 'img/aguilera.jpg' },
    { name: 'Pepper soup spice', price: '$50/carton', image: 'img/Pepper-Soup-Spices-IG-traditiona.png' },
    { name: 'Suya spice', price: 'nil', image: 'img/Hakkan Foods Sweet Potato Chips Suya Pepper .jpg' },
    { name: 'Grounded Chili (ata gungun)', price: '250g @ $10', image: 'img/Grounded Chili (ata gungun).png' },
  ],
  beverages: [
    { name: 'Malta Guinness Non-Alcoholic Drink', price: '$00.00', image: 'img/Malta Guinness Non-Alcoholic Drink.png' },
    { name: 'Vimto Drink', price: '$00.00', image: 'img/Vimto Drink.jpg' },
    { name: 'Power Malt Extra Energy (50)', price: '$18.00', image: 'img/Power Malt Extra Energy (50).png' },
    
  ],
  oilsButters: [
    
  ],
  nutsSeeds: [
    
  ],
  hairProducts: [
    { name: 'S-CURL Extra Strength Texturizer Kit', price: '$15.00', image: 'img/S-CURL Extra Strength Texturizer Kit.jpg' },
    { name: 'Revlon Regular Relaxer', price: '$00.00', image: 'img/Revlon Regular Relaxer.png' },
    { name: 'Dark n Lovely Relaxer Super', price: '$15.00', image: 'img/Dark n Lovely Relaxer Super.png' },
    { name: 'Dark n Lovely Relaxer Regular', price: '$15.00', image: 'img/Dark n Lovely Relaxer Regular.png' },
    { name: 'Sportin Waves Gel Pomade Maximum Hold', price: '$10.00', image: 'img/Sportin Waves Gel Pomade Maximum Hold.png' },
    { name: 'Eco Styler Protein Styling Gel', price: '$15.00', image: 'img/Eco Styler Krystal Styling Gel.png' },
    { name: 'Eco Styler Krystal Styling Gel', price: '$15.00', image: 'img/Eco Styler Krystal Styling Gel.png' },
    { name: 'Eco Styler Olive Styling Gel', price: '$15.00', image: 'img/71Eco Styler Protein Styling Gel.png' },
    { name: 'World Of Curls Curl Activator', price: '$15.00', image: 'img/World Of Curls Curl Activato.png' },
    { name: 'Darling Afro Kinky Bulk', price: '$10.00', image: 'img/Darling Afro Kinky Bulk.png' },
    { name: 'Darling Kinky Styles', price: '$10.00', image: 'img/Darling Kinky Styles.png' },
    { name: 'Ampro Pro Styl - Super Hold Hair Gel 32 oz', price: '$15.00', image: 'img/Ampro Pro Styl - Super Hold Hair Gel 32 oz.png' },
    { name: 'Tcb No Base Creme Hair Creme 212g', price: '$15.00', image: 'img/Tcb No Base Creme Hair Creme 212g.png' },
    { name: 'Tcb No Base Creme Hair Relaxer (Regular) 15 oz', price: '$00.00', image: 'img/Tcb No Base Creme Hair Creme 212g.png' },
    { name: 'Dark & Lovely Beautiful Beginnings Relaxer', price: '$15.00', image: 'img/DADark & Lovely Beautiful Beginnings Relaxer.png' },
    { name: 'Dark & Lovely Beautiful Beginnings No Mistake Curl Softener', price: '$15.00', image: 'img/Dark & Lovely Beautiful Beginnings No Mistake Curl Softener.png' },
    { name: 'Jamaican Mango & Lime Black Castor Oil Original 4oz', price: '$15.00', image: 'img/Jamaican Mango & Lime Black Castor Oil Argan.jpg' },
    { name: 'Jamaican Mango & Lime Black Castor Oil Argan 4oz', price: '$15.00', image: 'img/Jamaican Mango & Lime Black Castor Oil Argan.jpg' },
    { name: 'Jamaican Mango & Lime Black Castor Oil (Extra Dark) 4oz', price: '$15.00', image: 'img//Jamaican Mango & Lime Black Castor Oil (Extra Dark.jpg' },
    { name: 'Revlon Realistic - Curl Softly - Activator 450ml/15 fl oz', price: '$10.00', image: 'img/Revlon Realistic - Curl Softly - Activator 450ml.png' },
    { name: 'S-Curl No-Drip Activator', price: '$20.00', image: 'img/S-Curl No-Drip Activator.png' },
    { name: 'Blue Magic Cholesterol Conditioning Rinse', price: '$10.00', image: 'img/Blue Magic Cholesterol Conditioning Rinse.png' },
    { name: 'Blue Magic Argan Oil Mango & Lime Leave-In Conditioner', price: '$10.00', image: 'img/Blue Magic Argan Oil Mango & Lime Leave-In Conditioner.png' },
    { name: 'Blue Magic Carrot Oil Leave-In Styling Conditioner', price: '$10.00', image: 'img/Blue Magic Carrot Oil Leave-In Styling Conditioner.png' },
    { name: 'Blue Magic Conditioner Hair Dress', price: '$10.00', image: 'img/Blue Magic Conditioner Hair Dress.png' },
    { name: 'Blue Magic Coconut Oil', price: '$10.00', image: 'img/Blue Magic Coconut Oil.jpg' },
    { name: 'Blue Magic Bergamot Hair & Scalp Conditioner', price: '$10.00', image: 'img/Blue Magic Bergamot Hair & Scalp Conditioner.png' },
    { name: 'African Pride Shea Butter Miracle', price: '$10.00', image: 'img/African Pride Shea Butter Miracle.png' },
    { name: 'S-Curl No-Drip Activator Moisturizer 236ml (8 fl oz)', price: '$12.00', image: 'img/S-Curl No-Drip Activator Moisturizer 236ml (8 fl oz).png' },

    { name: 'Carotone brightening oil', price: '$17.00', image: 'img/Carotone Oil Body Oil 65ml.png' },
    { name: 'Caro White Body Lotion 500ml', price: '$15.00', image: 'img/Caro White Body Lotion.png' },
    { name: 'Cantu Hydrating Body Wash 13.5 fl oz', price: '$25.00', image: 'img/Cantu Hydrating Body Wash .jpg' },
    { name: 'Queen Elizabeth Cocoa Butter Hand & Body Lotion', price: '$10.00', image: 'img/Queen Elizabeth Cocoa Butter Hand & Body Lotion.jpg' },
    { name: 'Carotone Brightening Body Cream 330ml', price: '$15.00', image: 'img/Carotone Brightening Body Cream 330m.png' },
    { name: 'Ever Sheen Cocoa Butter Cream 250ml', price: '$15.00', image: 'img/Ever Sheen Cocoa Butter Cream 250ml.png' },
    { name: 'Skin Light Body Cream Jar (500ml)', price: '$15.00', image: 'img/Skin Light Body Cream Jar (500ml).png' },
    { name: 'Princess Cocoa Paa! Cocoa Butter Hand & Body Cream', price: '$15.00', image: 'img/Princess Cocoa Paa! Cocoa Butter Hand & Body Cream.png' },
    { name: 'Jamaican Mango & Lime Black Castor Oil 4oz', price: '$15.00', image: 'img/Jamaican Mango & Lime Black Castor Oil Argan.jpg' },
    { name: 'ORS Coconut Oil 227g', price: '$10.00', image: 'img/ORS Coconut Oil 227g .jpeg' },
    { name: 'ORS Olive Oil Creme Hair Dress 227g', price: '$10.00', image: 'img/ORS Olive Oil Creme Hair Dress 227g.png' },
    { name: 'Kuza Hair Food With Vitamins A & E 226g', price: '$10.00', image: 'img/Kuza Hair Food With Vitamins A & E 226g.png' },
    { name: 'Organic Root Stimulator Olive Oil Replenishing Conditioner', price: '$10.00', image: 'img/Organic Root Stimulator Olive Oil Replenishing Conditioner.jpg' },
    { name: 'Clinic Clear Body Lotion 500ml', price: '$20.00', image: 'img/Clinic Clear Body Lotion 500ml.png' },
    { name: 'Fair and White Exclusive Whitenizer Body Lotion', price: '$35.00', image: 'img/Fair and White Exclusive Whitenizer Body Lotion.png' },
    { name: 'Fair and White Gold 2 Revitalizing Body Lotion', price: '$35.00', image: 'img/Fair and White Gold 2 Revitalizing Body Lotio.png' },
    { name: 'Blue Magic Cholesterol Conditioning Rinse', price: '$10.00', image: 'img/Blue Magic Cholesterol Conditioning Rinse.png' },
    { name: 'Blue Magic Argan Oil Mango & Lime Leave-In Conditioner', price: '$10.00', image: 'img/Blue Magic Argan Oil Mango & Lime Leave-In Conditioner.png' },
    { name: 'Blue Magic Carrot Oil Leave-In Styling Conditioner', price: '$10.00', image: 'img/Blue Magic Carrot Oil Leave-In Styling Conditioner.png' },
    { name: 'Blue Magic Conditioner Hair Dress', price: '$10.00', image: 'img/Blue Magic Conditioner Hair Dress.png' },
    { name: 'Blue Magic Coconut Oil', price: '$10.00', image: 'img/Blue Magic Coconut Oil.jpg' },
    { name: 'Blue Magic Bergamot Hair & Scalp Conditioner', price: '$10.00', image: 'img/Blue Magic Bergamot Hair & Scalp Conditioner.png' },
    { name: 'African Pride Shea Butter Miracle', price: '$10.00', image: 'img/African Pride Shea Butter Miracle.png' },
    { name: 'S-Curl No-Drip Activator Moisturizer 236ml (8 fl oz)', price: '$12.00', image: 'img/S-Curl No-Drip Activator Moisturizer 236ml (8 fl oz).png' },
    { name: 'Carotone 550ml',price:'$20.00', image:'img/Carotone 550ml.png'},
    { name: 'Carotone 250ml',price:'$11.00', image:'img/Carotone 550ml.png'},
    { name: 'Carotone Soap',price:'$13.00', image:'img/Carotone Soap.png'},
    { name: 'Carotone  Cream Cup',price:'$22.00', image:'img/carotone cream cup.png'},
    { name: 'Carotone Black spot corrector',price:'$7.00', image:'img/Carotone Black spot corrector.png'},
    { name: 'Fair and White Brightening soap',price:'$10.00', image:'img/Fair and white soap.png'},
    { name: 'Generic Caro white ',price:'$30.00', image:'img/Generic Carowhite 250ml.png'},
    { name: 'Carowhite soap ',price:'$12.00', image:'img/Carowhite soap .png'},
    { name: 'Mega growth for hair',price:'$15.00', image:'img/Mega growth for hair.png'}

  ],
};

// Add new items to the respective categories
const additionalItems = [
  { name: 'Nido Fortified Milk Powder 400g', price: '$10.00', image: 'img/Nido.jpeg' },
  { name: 'Derica Tomato Paste 850g', price: '$00.00', image: 'img/Derica Tomato Paste .jpg' },
  { name: 'Gino Tomato Paste 210g', price: '$00.00', image: 'img/Gino Tomato Paste 210g.jpg' },
  { name: 'Maggi Arome ', price: '$00.00', image: 'img/Maggi-Arome.jpg' },
];

products.dairy = additionalItems;

// Ensure to adjust other categories as needed

console.log(products);


const itemsPerPage = 8;
let currentPage = 1;
let currentCategory = 'seafood';

function renderProducts(category, page = 1) {
  currentCategory = category;
  const productList = document.getElementById(`product-list-${category}`);
  productList.innerHTML = '';
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = products[category].slice(startIndex, endIndex);

  paginatedProducts.forEach(product => {
    const productCard = `
    <div class="col mb-5">
      <div class="card h-100">
        ${product.sale ? '<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>' : ''}
        <img class="card-img-top" src="${product.image}" alt="${product.name}" />
        <div class="card-body p-4">
          <div class="text-center">
            <h5 class="fw-bolder">${product.name}</h5>
            ${product.popular ? '<div class="d-flex justify-content-center small text-warning mb-2"><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div></div>' : ''}
            ${product.sale ? `<span class="text-muted text-decoration-line-through">${product.originalPrice}</span> ${product.price}` : product.price}
          </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
            <button class="btn btn-outline-dark mt-auto buy-now-btn" data-bs-toggle="modal" data-bs-target="#contactModal">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  `;
    productList.insertAdjacentHTML('beforeend', productCard);
  });
  updatePagination(category, page);
}

function updatePagination(category, page) {
  currentPage = page;
  const totalPages = Math.ceil(products[category].length / itemsPerPage);
  document.getElementById('prev-page').parentElement.classList.toggle('disabled', page === 1);
  document.getElementById('next-page').parentElement.classList.toggle('disabled', page === totalPages);
}

document.querySelectorAll('.nav-link').forEach(tab => {
  tab.addEventListener('click', (event) => {
    const category = event.target.dataset.target.replace('#', '');
    renderProducts(category, 1);
  });
});

document.getElementById('prev-page').addEventListener('click', (event) => {
  event.preventDefault();
  if (currentPage > 1) {
    renderProducts(currentCategory, currentPage - 1);
  }
});

document.getElementById('next-page').addEventListener('click', (event) => {
  event.preventDefault();
  const totalPages = Math.ceil(products[currentCategory].length / itemsPerPage);
  if (currentPage < totalPages) {
    renderProducts(currentCategory, currentPage + 1);
  }
});

// Initial render for the first category
renderProducts('seafood');




function searchProducts(query) {
  const searchResultsContainer = document.getElementById('search-results');
  searchResultsContainer.innerHTML = '';

  Object.keys(products).forEach(category => {
      products[category].forEach(product => {
          if (product.name.toLowerCase().includes(query.toLowerCase())) {
              const productItem = document.createElement('li');
              productItem.classList.add('dropdown-item');
              
              const productDiv = document.createElement('div');
              productDiv.classList.add('d-flex', 'align-items-center');

              const productImage = document.createElement('img');
              productImage.src = product.image;
              productImage.alt = product.name;
              productImage.classList.add('me-3');
              productImage.style.width = '50px';

              const productDetails = document.createElement('div');
              
              const productName = document.createElement('h6');
              productName.textContent = product.name;

              const productPrice = document.createElement('p');
              productPrice.classList.add('mb-0');
              productPrice.textContent = product.price;

              productDetails.appendChild(productName);
              productDetails.appendChild(productPrice);

              if (product.sale) {
                  const productOriginalPrice = document.createElement('p');
                  productOriginalPrice.textContent = product.originalPrice;
                  productOriginalPrice.classList.add('original-price', 'mb-0');
                  productDetails.appendChild(productOriginalPrice);
              }

              if (product.popular) {
                  const popularTag = document.createElement('p');
                  popularTag.textContent = 'Popular';
                  popularTag.classList.add('popular-tag', 'mb-0');
                  productDetails.appendChild(popularTag);
              }

              productDiv.appendChild(productImage);
              productDiv.appendChild(productDetails);

              productItem.appendChild(productDiv);
              searchResultsContainer.appendChild(productItem);
          }
      });
  });

  if (query.length > 0) {
      document.getElementById('search-dropdown').classList.add('show');
      searchResultsContainer.classList.add('show');
  } else {
      document.getElementById('search-dropdown').classList.remove('show');
      searchResultsContainer.classList.remove('show');
  }
}

document.getElementById('search-input').addEventListener('input', function (event) {
  const query = event.target.value;
  searchProducts(query);
});

document.addEventListener('click', function (event) {
  if (!document.getElementById('search-dropdown').contains(event.target)) {
      document.getElementById('search-dropdown').classList.remove('show');
      document.getElementById('search-results').classList.remove('show');
  }
});
