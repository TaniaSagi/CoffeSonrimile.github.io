//   MOSTRAR / OCULTAR PASS
const passInput = document.getElementById("password");
const togglePass = document.querySelector(".toggle-pass");

togglePass.addEventListener("click", () => {
    const type = passInput.type === "password" ? "text" : "password";
    passInput.type = type;

    togglePass.classList.toggle("fa-eye-slash");
});

//      VALIDACIÓN SIMPLE
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (email === "" || pass === "") {
        alert("Por favor llena todos los campos.");
        return;
    }

    alert("¡Bienvenido! Sesión iniciada correctamente.");
});

