let felinos = {
    Tigre: {
        imgDuermiendo: './imagenes/tigre_durmiendo.jpg',
        imgDespierto: './imagenes/tiger.jpg',
        subtitulo: 'El tigre',
        texto: 'El tigre (Panthera tigris) es una de las especies​ de la subfamilia de los panterinos (familia Felidae) pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño.'
    },
    Leon: {
        imgDuermiendo: './imagenes/leon_durmiendo.jpg',
        imgDespierto: './imagenes/leon.jpg',
        subtitulo: 'El leon',
        texto: 'El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India.'
    },
    Leopardo: {
        imgDuermiendo: './imagenes/leopardo_durmiendo.jpg',
        imgDespierto: './imagenes/leopardo.jpg',
        subtitulo: 'El leopardo',
        texto: 'El leopardo (Panthera pardus) es un mamífero carnívoro de familia de los félidos. Al igual que tres de los demás félidos del género Panthera: el león, el tigre y el jaguar, están caracterizados por una modificación en el hueso hioides que les permite rugir. También se lo conoce como pantera parda y, cuando presenta un pelaje completamente oscuro como pantera negr (melánico).'
    },
    Pantera_negra: {
        imgDuermiendo: './imagenes/pantera-negra_durmiendo.jpg',
        imgDespierto: './imagenes/pantera-negra.jpg',
        subtitulo: 'La pantera negra',
        texto: 'La pantera negra es una variación negra (melanismo) de varias especies de grandes félidos, en especial del leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni siquiera una subespecie, es simplemente una variación negra de estos animales.'
    },
    Jaguar: {
        imgDuermiendo: './imagenes/jaguar_durmiendo.jpg',
        imgDespierto: './imagenes/jaguar.jpg',
        subtitulo: 'El jaguar',
        texto: 'El jaguar, yaguar o yaguareté (Panthera onca) es un carnívoro félido de la subfamilia de los Panterinos y género Panthera. Es la única de las cinco especies actuales de este género que se encuentra en América. También es el mayor félido de América y el tercero del mundo, después del tigre (Panthera tigris) y el león (Pantheraleo).'
    },
    Guepardo: {
        imgDuermiendo: './imagenes/chita_durmiendo.jpg',
        imgDespierto: './imagenes/chita.jpg',
        subtitulo: 'El guepardo',
        texto: 'El guepardo o chita (Acinonyx jubatus)1​ es un miembro atípico de la familia de los félidos. Es el único representante vivo del género Acinonyx. Caza gracias a su vista y a su gran velocidad. Es el animal terrestre más veloz, ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos metros.'
    }
}


let body = document.querySelector('body');
let sol = document.querySelector('.sol');
let luna = document.querySelector('.luna');
let contenedor = document.querySelector('.contenedor');


for (let element of Object.values(felinos)){

    contenedor.innerHTML +=
    `<div class="item">
        <img src=${element.imgDespierto}>
        <h2>${element.subtitulo}</h2>
        <p>
        ${element.texto}
        </p>
    </div>`
}  

let imagenes = document.querySelectorAll('img');


document.querySelector('.sol').addEventListener('click', function () {
    body.classList.toggle('dark');
    sol.style.display = 'none';
    luna.style.display = 'inline';

    for (let i = 0; i < Object.values(felinos).length; i++) {
        imagenes[i].src = `${Object.values(felinos)[i].imgDespierto}`
        imagenes[i].style.filter='grayscale(0%)'
   }

})

document.querySelector('.luna').addEventListener('click', function () {
    body.classList.toggle('dark');
    sol.style.display = 'inline';
    luna.style.display = 'none';  

    for (let i = 0; i < Object.values(felinos).length; i++) {
        imagenes[i].src = `${Object.values(felinos)[i].imgDuermiendo}`
        imagenes[i].style.filter='grayscale(0%)'
   }
    
})