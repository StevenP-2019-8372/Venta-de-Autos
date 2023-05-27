const carButtons = document.querySelectorAll('.car button');

carButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('El auto ha sido agregado al carrito de compras.');
  });
});
function changeRainbowColor() {
    const buttons = document.querySelectorAll('.car button');
    let hue = 0;
  
    function changeColor() {
      hue = (hue + 1) % 360;
      const color = `hsl(${hue}, 100%, 50%)`;
  
      buttons.forEach(button => {
        button.style.backgroundColor = color;
      });
    }
  
    setInterval(changeColor, 50);
  }
  window.addEventListener('load', changeRainbowColor);