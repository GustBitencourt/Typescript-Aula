//selecionando elemento html
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    //falando onde será o evento
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
})