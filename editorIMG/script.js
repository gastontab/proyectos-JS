const filtros = document.querySelectorAll(".controls input");

filtros.forEach(filtro => filtro.addEventListener('change',modificar));
filtros.forEach(filtro => filtro.addEventListener('mousemove',modificar));


function modificar(){
    console.log(this.dataset);
    document.documentElement.style.setProperty(`--${this.name}`,this.value + (this.dataset.sizing || ''));
}