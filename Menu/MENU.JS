/* MENÚ LATERAL */
document.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector(".menu");
	const icon = document.querySelector(".fa-bars");

	icon.addEventListener("click", () => {
		menu.classList.toggle("open");
	});
});

/* CARRITO */
let contador = 0;
const carritoNum = document.querySelector('.content-shopping-cart .number');

document.querySelectorAll('.add-cart').forEach(boton => {
    boton.addEventListener('click', () => {

        const producto = boton.dataset.producto || "Producto sin nombre";
        contador++;

        carritoNum.textContent = `(${contador})`;

        alert(`Agregaste al carrito: ${producto}`);
    });
});


