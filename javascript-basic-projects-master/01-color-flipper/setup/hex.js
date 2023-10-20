const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector(".color");
const btn = document.getElementById('btn');
const items = 6;

const getRandomColors = () =>{
    const randomItems = [];
    for(let i=0; i<items; i++) {
        const randos = Math.floor(Math.random() *hex.length);
        randomItems.push(hex[randos]);
    }
    return randomItems.join('');
}


btn.addEventListener('click', () => {
    const randomItems = getRandomColors();
    console.log(randomItems);
    document.body.style.backgroundColor = '#' + randomItems;
    color.textContent = randomItems;
})
