const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
    .then(res=>res.json())
    .then(data=>cities.push(...data));


function filtrarResultados(palabraClave, cities){
    let resul = cities.filter(res=>{
        let expr = new RegExp(palabraClave,'gi');
        return res.city.match(expr) || res.state.match(expr);
    })
    return resul;
}

function mostrarResultados(){
    if(this.value !== ''){
        let array = filtrarResultados(this.value,cities);
        let expr2 = new RegExp(this.value,'gi');
        const html = array.map(valor=>{
            let ciudad = valor.city.replace(expr2,`<span class="resaltado">${this.value}</span>`);
            let estado = valor.state.replace(expr2,`<span class="resaltado">${this.value}</span>`);
            return `<li>
                            <span>${ciudad}, ${estado}</span>
                       </li>`;
        }).join('');
        lista.innerHTML=html;
    } 
    else{
        lista.innerHTML='';
    }
}


const entrada = document.querySelector(".input");
const lista = document.querySelector(".lista");

entrada.addEventListener('change', mostrarResultados);
entrada.addEventListener('keyup', mostrarResultados);
