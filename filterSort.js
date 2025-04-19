document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".indicator li");
  const products = document.querySelectorAll(".box");
  const sortSelect = document.getElementById("select");
  const productContainer = document.querySelector(".box-container");

 filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(".indicator .active").classList.remove("active");
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      products.forEach((product) => {
        const category = product.getAttribute("data-category");
        if (filter === "all" || filter === category) {
          product.style.display = "block";
          product.style.transform = "scale(1)";
        } else {
          product.style.display = "none";
          product.style.transform = "scale(0)";
        }
      });
    });
  });

  
  sortSelect.addEventListener("change", () => {
    const sortType = sortSelect.value;
    const sorted = Array.from(products).sort((a, b) => {
      const priceA = parseFloat(a.getAttribute("data-price"));
      const priceB = parseFloat(b.getAttribute("data-price"));

      if (sortType === "LowToHigh") return priceA - priceB;
      if (sortType === "HighToLow") return priceB - priceA;
      return 0; 
    });

   productContainer.innerHTML = "";
    sorted.forEach((product) => {
      productContainer.appendChild(product);
    });
  });
});

document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value.toUpperCase();
  let elements = document.querySelectorAll(".box .content h3");
  let cards = document.querySelectorAll(".box");

  console.log(searchInput);

  elements.forEach((element, index) => {
    if (element.innerText.toUpperCase().includes(searchInput)) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

