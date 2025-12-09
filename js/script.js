// ===== SELECCIÓN DEL BOTÓN =====

// Busca en el documento el botón con el ID "btnSaludo"
const boton = document.getElementById("btnSaludo");

// ===== EVENTO DE CLIC =====
// Cuando el usuario haga clic en el botón, se ejecutará esta función
boton.addEventListener("click", () => {
    // Muestra una ventana emergente con un mensaje personalizado
    alert("¡Hola! Soy Juan Monsalve 😎\nGracias por visitar mi portfolio oscuro 💜");
});
