const BASE_URL = "https://fakestoreapi.com/products";

let products = document.querySelectorAll(".shop");

const updateProducts = async () => {
    let response = await fetch(BASE_URL);
    let data = await response.json();

    data.forEach((element) => {
        let productName = element.title;
        let productDescription = element.description;
        let productCategory = element.category;
        let productImage = element.image;
        let productPrice = element.price;
        let productRating = element.rating.rate;
        let productCount = element.rating.count;

        let productContainer = document.createElement("div");
        productContainer.classList.add("container");

        let cName = document.createElement("p");
        cName.classList.add("category");
        cName.innerText = productCategory;

        let pName = document.createElement("h2");
        pName.classList.add("name");
        pName.innerText = productName;

        let pDescription = document.createElement("p");
        pDescription.classList.add("description");
        pDescription.innerText = productDescription;

        let pImage = document.createElement("img");
        pImage.setAttribute("src", productImage);

        let pPrice = document.createElement("p");
        pPrice.classList.add("price");
        pPrice.innerText = `Price: $${productPrice}`;

        let pRating = document.createElement("span");
        pRating.classList.add("rating");
        pRating.innerHTML = `<i class="fa-solid fa-star" style="color: #FFD43B;"></i> ${productRating}`;


        let pCount = document.createElement("span");
        pCount.classList.add("count");
        pCount.innerHTML = `<i class="fa-solid fa-cart-flatbed"></i>  ${productCount} available`;


        let pRatingContainer = document.createElement("div");
        pRatingContainer.classList.add("rating-container");
        pRatingContainer.append(pRating, pCount);

        productContainer.append(cName, pImage, pName, pDescription, pPrice, pRatingContainer);

        for (product of products) {
            product.append(productContainer);
        }

    });
}
window.addEventListener("load", updateProducts)