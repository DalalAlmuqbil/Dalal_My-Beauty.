
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");


const container = document.getElementById("product-container");


const product = products.find((p) => p.id === productId);


if (product) {
  container.innerHTML = `
  <div class="product-title">
    <h1>${product.name}</h1>
  </div>

  <div class="detail-box">
    <div class="image">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="info">
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Price:</strong> ${product.price.toFixed(2)} SR 
        <span class="old-price">${product.oldPrice.toFixed(2)} SR</span>
      </p>
      <p><strong>Description:</strong> ${product.description}</p>

      <!-- Buy Now Button Section -->
      <div class="buy-now-wrapper">
        <a href="#" class="buy-now-btn">
          <i class="fas fa-shopping-cart"></i> Buy Now
        </a>
      </div>

      
    </div>
  </div>
`;
}