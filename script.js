document.addEventListener('DOMContentLoaded', function() {
  // Inicializa o carrossel de produtos
  const productSlider = new Swiper(".product-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    },
  });

  // Atualização do carrossel ao redimensionar a janela
  window.addEventListener("resize", function () {
    setTimeout(function () {
      productSlider.update();
    }, 300);
  });

  // Funcionalidade de busca
  const searchBtn = document.getElementById("search-btn");
  const searchInput = document.getElementById("search-input");
  const searchResult = document.getElementById("search-result");
  const searchTerm = document.getElementById("search-term");

  searchBtn.addEventListener("click", function () {
    const query = searchInput.value.trim();

    if (query !== "") {
      searchTerm.textContent = query;
      searchResult.style.display = "block";
      searchResult.scrollIntoView({ behavior: "smooth" });
      searchInput.value = "";
    } else {
      searchResult.style.display = "none";
    }
  });

  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      searchBtn.click();
    }
  });

  // Funcionalidade de menu de categorias (submenu em forma de tabela)
  const menuCategorias = document.querySelectorAll(".menu-categorias");
  const submenu = document.querySelector(".submenu");

  // Hide submenu by default (for safety, even though CSS should handle this)
  submenu.style.display = "none";

  menuCategorias.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Simple toggle
      if (submenu.style.display === "block") {
        submenu.style.display = "none";
      } else {
        submenu.style.display = "block";
      }
    });
  });

  // Close when clicking outside
  document.addEventListener("click", function (e) {
    const clickedInsideMenu = [...menuCategorias].some((link) =>
      link.contains(e.target)
    );
    if (!clickedInsideMenu && !submenu.contains(e.target)) {
      submenu.style.display = "none";
    }
  });

  // Hover nos departamentos para ativar categorias
  const departamentos = document.querySelectorAll(".departamento");
  const categorias = document.querySelectorAll(".categorias");

  departamentos.forEach((departamento) => {
    departamento.addEventListener("mouseenter", function () {
      categorias.forEach((categoria) => categoria.classList.remove("active"));
      const targetId = this.getAttribute("data-target");
      const targetCategoria = document.getElementById(targetId);
      if (targetCategoria) {
        targetCategoria.classList.add("active");
      }
    });
  });

  //  Acordeo

  function toggleAccordion() {
    this.classList.toggle("avnt-active");
    const content = this.nextElementSibling;
    content.classList.toggle("avnt-active");
  }

  function setupAccordion() {
    const isMobile = window.innerWidth < 768;
    const accordionHeaders = document.querySelectorAll(
      ".avnt-accordion-header"
    );
    const accordionContents = document.querySelectorAll(
      ".avnt-accordion-content"
    );

    accordionHeaders.forEach((header) => {
      header.removeEventListener("click", toggleAccordion);
    });

    if (isMobile) {
      accordionHeaders.forEach((header) => {
        header.style.cursor = "pointer";
        header.addEventListener("click", toggleAccordion);

        const content = header.nextElementSibling;
        if (content) {
          content.classList.remove("avnt-active");
          header.classList.remove("avnt-active");
        }
      });
    } else {
      accordionHeaders.forEach((header) => {
        header.style.cursor = "default";
        header.classList.remove("avnt-active");
      });

      accordionContents.forEach((content) => {
        content.classList.remove("avnt-active");
        content.style.maxHeight = "none";
        content.style.display = "block";
      });
    }
  }

  setupAccordion();
  window.addEventListener("resize", function () {
    setupAccordion();
  });

  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const categoriesNav = document.querySelector(".categories-nav");
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);

  hamburgerBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    categoriesNav.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", function () {
    hamburgerBtn.classList.remove("active");
    categoriesNav.classList.remove("active");
    this.classList.remove("active");
  });

  // Fechar o menu ao clicar em um item
  const navItems = document.querySelectorAll(".categories-nav a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      hamburgerBtn.classList.remove("active");
      categoriesNav.classList.remove("active");
      overlay.classList.remove("active");
    });
  });

  // Busca Mobile
  const mobileSearchBtn = document.getElementById("mobile-search-btn");
  const mobileSearchInput = document.getElementById("mobile-search-input");
  const mobileSearchTerm = document.getElementById("mobile-search-term");
  const searchResultMobile = document.querySelector(".search-result-mobile");

  mobileSearchBtn.addEventListener("click", function () {
    const query = mobileSearchInput.value.trim();

    if (query !== "") {
      mobileSearchTerm.textContent = query;
      searchResultMobile.style.display = "block";
      mobileSearchInput.value = "";
    } else {
      searchResultMobile.style.display = "none";
    }
  });

  mobileSearchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      mobileSearchBtn.click();
    }
  });
});




