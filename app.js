// Pika-pika suerte!

// NO MODIFICAR (salvo para conseguir el color sangría)

document.querySelector('#first').addEventListener('click', updateBgColor);
document.querySelector('#second').addEventListener('click', updateBgColor);
document.querySelector('#third').addEventListener('click', updateBgColor);

// MODIFICAR A PARTIR DE AQUÍ 

function updateBgColor(event) {
    const clickedDiv = event.currentTarget;
    
    // 2. Obtener el color del atributo data-color
    let color = clickedDiv.dataset.color;
    
    // 3. Caso especial para el cuarto div (sin data-color)
    if (!color && clickedDiv.id === 'fourth') {
        color = '#982551'; // Color sangría
    }
    
    // 4. Aplicar el color al fondo de Pikachu
    document.querySelector('#colors img').style.backgroundColor = color;
}

// Bonus: Añadir evento al cuarto div sin modificar el HTML
document.querySelector('#fourth').addEventListener('click', function(event) {
    document.querySelector('#colors img').style.backgroundColor = '#982551';
});