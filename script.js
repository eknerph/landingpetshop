const modal = document.getElementById("product-modal");
const modalImage = modal.querySelector(".modal-image");
const modalTitle = modal.querySelector(".modal-title");
const modalDescription = modal.querySelector(".modal-description");
const modalPrice = modal.querySelector(".modal-price");
const closeButton = modal.querySelector(".close-button");

document.querySelectorAll(".card button").forEach((button, index) => {
    button.addEventListener("click", () => {
        const card = button.parentElement;
        const imageSrc = card.querySelector("img").src;
        const title = card.querySelector("h3").textContent;
        const price = card.querySelector("p").textContent;

        // Dados detalhados do produto (você pode obter esses dados de um array de objetos)
        const productDetails = [
            {
                description: "Ração premium para cães de todas as raças.",
                size: "10kg",
                material: "Ingredientes naturais",
            },
            {
                description: "Comedouro interativo para estimular a alimentação lenta.",
                size: "Tamanho único",
                material: "Plástico resistente",
            },
            {
                description: "Shampoo e condicionador para pelos macios e brilhantes.",
                size: "500ml",
                material: "Extratos naturais",
            },
            {
                description: "Cama confortável para o descanso do seu cão.",
                size: "Grande",
                material: "Algodão e espuma",
            },
            {
                description: "Shampoo antipulgas para cães e gatos.",
                size: "250ml",
                material: "Ingredientes antiparasitários",
            },
        ];

        modalImage.src = imageSrc;
        modalTitle.textContent = title;
        modalDescription.textContent = `Descrição: ${productDetails[index].description}\nTamanho: ${productDetails[index].size}\nMaterial: ${productDetails[index].material}`;
        modalPrice.textContent = price;
        modal.style.display = "block";
    });
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});