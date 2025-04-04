document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o carrossel de produtos
    const productSlider = new Swiper('.product-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
        }
    });

    // Atualização do carrossel ao redimensionar a janela
    window.addEventListener('resize', function() {
        setTimeout(function() {
            productSlider.update();
        }, 300);
    });


    // Funcionalidade de busca
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const searchResult = document.getElementById('search-result');
    const searchTerm = document.getElementById('search-term');

    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        
        if (query !== '') {
            searchTerm.textContent = query;
            searchResult.style.display = 'block';
            searchResult.scrollIntoView({ behavior: 'smooth' });
            searchInput.value = '';
        } else {
            searchResult.style.display = 'none';
        }
    });

    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchBtn.click();
        }
    });
    
    // Funcionalidade de menu de categorias (submenu em forma de tabela)
    const menuCategorias = document.querySelectorAll(".menu-categorias");
    const submenu = document.querySelector(".submenu");

    menuCategorias.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            submenu.style.display = submenu.style.display === "block" ? "none" : "block";
        });
    });





});




