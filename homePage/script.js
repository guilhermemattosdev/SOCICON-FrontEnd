function checkWindowSize() {
    let centerFooter = document.getElementById('centerFooter');
    const footer = document.getElementById('footer');

    // Define o tamanho máximo permitido (em pixels)
    const maxWidth = 600;
    const minWidth = 610;

    // Verifica o tamanho da janela
    if (window.innerWidth < maxWidth) {
        // Remove o componente (centerFooter) se a janela for menor que o tamanho permitido
        if (centerFooter) {
            centerFooter.remove();
        }
    } else if (window.innerWidth > minWidth) {
        // Adiciona o componente (centerFooter) de volta se a janela for maior que o tamanho permitido
        if (!centerFooter) {
            centerFooter = document.createElement('div');
            centerFooter.className = 'centerFooter';
            centerFooter.id = 'centerFooter';
            centerFooter.innerHTML = `
                <span class="location">AVENIDA PRESIDENTE VARGAS<br> R. 25 de Agósto  132 - SALA 506 <br> JARDIM, Duque de Caxias - <a class="linkref" href="https://maps.app.goo.gl/LFoD1FQgEf7jgqzR9" target="_blank">RJ, 25070-330</a></span>`;
            
            footer.appendChild(centerFooter);
        }
    }
}

window.onload = checkWindowSize;
window.onresize = checkWindowSize;