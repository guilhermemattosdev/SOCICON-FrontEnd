document.addEventListener('DOMContentLoaded', (event) => {
    const radioButtons = document.querySelectorAll('input[name="Assunto"]');
    const selectedOptionText = document.getElementsByClassName('radio_input');
    const changevalue = document.getElementsByName('subject');



    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            const radio_input = document.querySelector('input[name="Assunto"]:checked').value;
            selectedOptionText.textContent = `Opção selecionada: ${radio_input}`;
            document.getElementById("apiInput").value = radio_input;
        });
    });
});
