document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Desplazamiento suave (Smooth Scroll) para los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Excluimos el enlace que abre el modal legal
            if(this.getAttribute('id') === 'openModal') return;
            
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Manejo del Modal de Términos Legales
    const modal = document.getElementById("legalModal");
    const btnOpenModal = document.getElementById("openModal");
    const spanClose = document.querySelector(".close-btn");

    // Abrir modal
    btnOpenModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = "block";
    });

    // Cerrar modal desde la 'X'
    spanClose.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Cerrar modal haciendo click fuera de la caja
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });

    // 3. Manejo del envío del formulario
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que la página recargue al enviar
        
        // Aquí capturamos los datos
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const servicio = document.getElementById('servicio').value;
        const mensaje = document.getElementById('mensaje').value;

        // Opcional: Redirigir el mensaje directamente a tu WhatsApp
        // Descomenta el bloque de abajo y pon tu número si prefieres que el form abra WhatsApp
        
        /*
        const numeroWhatsApp = "5493489592140"; // Reemplaza con tu número
        const textoWP = `Hola, soy ${nombre}. Necesito un servicio de ${servicio}. Mi problema es: ${mensaje}. Mi teléfono es ${telefono}.`;
        const urlWP = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWP)}`;
        window.open(urlWP, '_blank');
        */

        // Mensaje de éxito simulado
        alert(`¡Gracias ${nombre}! Tu consulta ha sido recibida. Nos comunicaremos al ${telefono} a la brevedad.`);
        form.reset(); // Limpia el formulario
    });
});
