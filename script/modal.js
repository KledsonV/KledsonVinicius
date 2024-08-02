import { websiters } from "./database.js";

// Obtém o modal e os elementos do modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalDescription = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");
const closeBtn = document.getElementsByClassName("close")[0];

const helper_ul = document.getElementById("#helpers-ul");

// Adiciona as informações dos websites à lista
websiters.forEach(({ name, image, url, description, categorie }) => {
  const helper_li = document.createElement("li");

  const category_name = document.createElement("h4");
  category_name.textContent = categorie;
  category_name.className = "category-name";

  const helper_image = document.createElement("img");
  helper_image.src = image;
  helper_image.alt = name;
  helper_image.className = "expandable";
  helper_image.dataset.name = name;
  helper_image.dataset.image = image;
  helper_image.dataset.url = url;
  helper_image.dataset.description = description;

  const helper_text = document.createTextNode(name);

  helper_li.appendChild(category_name);
  helper_li.appendChild(helper_image);
  helper_li.appendChild(helper_text);

  helper_ul.appendChild(helper_li);
});

// Adiciona um evento de clique para todas as imagens
document.querySelectorAll(".expandable").forEach((img) => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.dataset.image;
    modalDescription.textContent = this.dataset.description;
    modalLink.href = this.dataset.url;
    modalLink.textContent = "Visite o Site";
  });
});

// Adiciona um evento de clique para fechar o modal
closeBtn.addEventListener("click", function () {
  modal.style.display = "none"; // Esconde o modal
});

// Fecha o modal se o usuário clicar fora da imagem
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none"; // Esconde o modal
  }
});
