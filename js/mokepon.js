const sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque')
const sectionReiniciar=document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('button-seleccionar')
const botonReiniciar = document.getElementById('boton-reiniciar')
const auxBody = document.body
const sectionMensajes = document.getElementById("resultado")
const ataqueJugadorMesaje = document.getElementById("ataque-del-jugador")
const ataqueEnemigoMensaje = document.getElementById("ataque-del-enemigo")
const resultadoRondaAtaqueMensaje = document.getElementById("resultado-combate-rondas")
const botonesAccion = document.getElementById('botonesAccion')
const spanVidasJugador = document.getElementById('span-vidasJugador')
const spanVidasEnemigo = document.getElementById('span-vidasEnemigo')
const spanMascotaJugador = document.getElementById('span-mascotaJugador')
const sectionSeleccionarMascota=document.getElementById('seleccionar-mascota')
const spanMascotaEnemigo = document.getElementById('span-mascotaEnemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let mokepones=[]
let inputHipodoge 
let inputCapipepo 
let inputRatigueya
let inputRytos
let inputLangostelvis
let inputTucapalma
let inputBotrelys
let inputPydos 
let inputOctimpel 
let inputCatrepos
let inputBoltymon
let inputRhintank
let botonFuego 
let botonAgua 
let botonTierra 
let botonAire 
let ataqueJugador=[]
let ataqueEnemigo=[]
let opcionDeMokepones
let mascotaJugador
let mascotaJugadorObjeto 
let botonesTodos=[]
let ataquesMokeponEnemigo
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador=0
let victoriasEnemigo=0
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth-20
const anchoMaximoDelmapa = 700

if(anchoDelMapa>anchoMaximoDelmapa){
    anchoDelMapa = anchoMaximoDelmapa -20
}
alturaQueBuscamos= anchoDelMapa * 588 / 1000
mapa.width=anchoDelMapa 
mapa.height=alturaQueBuscamos

class Mokepon{
    constructor(nombre, foto, vida,estiloTarjeta, fotoMapa){
        this.nombre = nombre
        this.foto=foto
        this.vida=vida
        this.ataques=[]
        this.estiloTarjeta=estiloTarjeta
        this.ancho=60
        this.alto = 50
        this.x=Aleteario(0, mapa.width-this.ancho)
        this.y=Aleteario(0, mapa.height-this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src= fotoMapa
        this.velocidadX =0
        this.velocidadY=0
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let hipodoge = new Mokepon('Hipodoge','./assets/Hipodoge.png', 5, 'tarjeta-de-mokepon', './assets/Hipodoge.png')
let capipepo = new Mokepon('Capipepo','./assets/Capipepo.png', 5, 'tarjeta-de-mokepon','./assets/Capipepo.png')
let ratigueya = new Mokepon('Ratigueya','./assets/Ratigueya.png', 5, 'tarjeta-de-mokepon','./assets/Ratigueya.png')
let rytos = new Mokepon('Rytos','./assets/Rytos.png', 5, 'tarjeta-de-mokepon2','./assets/Rytos.png')
let langostelvis = new Mokepon('Langostelvis','./assets/Langostelvis.png', 5, 'tarjeta-de-mokepon','./assets/Langostelvis.png')
let tucapalma = new Mokepon('Tucapalma','./assets/Tucapalma.png', 5, 'tarjeta-de-mokepon','./assets/Tucapalma.png')
let botrelys = new Mokepon('Botrelys','./assets/Botrelys.png', 5, 'tarjeta-de-mokepon2','./assets/Botrelys.png')
let pydos = new Mokepon('Pydos','./assets/Pydos.png', 5, 'tarjeta-de-mokepon2','./assets/Pydos.png')
let octimpel = new Mokepon('Octimpel','./assets/Octimpel.png', 5, 'tarjeta-de-mokepon2','./assets/Octimpel.png')
let catrepos = new Mokepon('Catrepos','./assets/Catrepos.png', 5, 'tarjeta-de-mokepon','./assets/Catrepos.png')
let rhintank = new Mokepon('Rhintank','./assets/Rhintank.png', 5, 'tarjeta-de-mokepon','./assets/Rhintank.png')
let boltymon = new Mokepon('Boltymon','./assets/Boltymon.png', 5, 'tarjeta-de-mokepon','./assets/Boltymon.png')
//recuerda que cada uno de estos mokepones tiene su propio LET INPUTXXX donde xxx es el nombre del mokepon y despues del froeach en
//iniciar juego se le asigna el id de cada mokepon
let hipodogeEnemigo = new Mokepon('Hipodoge','./assets/Hipodoge.png', 5, 'tarjeta-de-mokepon', './assets/Hipodoge.png')
let capipepoEnemigo = new Mokepon('Capipepo','./assets/Capipepo.png', 5, 'tarjeta-de-mokepon','./assets/Capipepo.png')
let ratigueyaEnemigo = new Mokepon('Ratigueya','./assets/Ratigueya.png', 5, 'tarjeta-de-mokepon','./assets/Ratigueya.png')
let rytosEnemigo = new Mokepon('Rytos','./assets/Rytos.png', 5, 'tarjeta-de-mokepon2','./assets/Rytos.png')
let langostelvisEnemigo = new Mokepon('Langostelvis','./assets/Langostelvis.png', 5, 'tarjeta-de-mokepon','./assets/Langostelvis.png')
let tucapalmaEnemigo = new Mokepon('Tucapalma','./assets/Tucapalma.png', 5, 'tarjeta-de-mokepon','./assets/Tucapalma.png')
let botrelysEnemigo = new Mokepon('Botrelys','./assets/Botrelys.png', 5, 'tarjeta-de-mokepon2','./assets/Botrelys.png')
let pydosEnemigo = new Mokepon('Pydos','./assets/Pydos.png', 5, 'tarjeta-de-mokepon2','./assets/Pydos.png')
let octimpelEnemigo = new Mokepon('Octimpel','./assets/Octimpel.png', 5, 'tarjeta-de-mokepon2','./assets/Octimpel.png')
let catreposEnemigo = new Mokepon('Catrepos','./assets/Catrepos.png', 5, 'tarjeta-de-mokepon','./assets/Catrepos.png')
let rhintankEnemigo = new Mokepon('Rhintank','./assets/Rhintank.png', 5, 'tarjeta-de-mokepon','./assets/Rhintank.png')
let boltymonEnemigo = new Mokepon('Boltymon','./assets/Boltymon.png', 5, 'tarjeta-de-mokepon','./assets/Boltymon.png')

hipodoge.ataques.push(
    {nombre: '💧', id:'button-agua'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🌱', id:'button-tierra'},
)
hipodogeEnemigo.ataques.push(
    {nombre: '💧', id:'button-agua'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🌱', id:'button-tierra'},
)
capipepo.ataques.push(
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🌀', id:'button-aire'},
)
capipepoEnemigo.ataques.push(
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🌀', id:'button-aire'},
)
ratigueya.ataques.push(
    {nombre: '🌀', id:'button-aire'},
    {nombre: '🌀', id:'button-aire'},
    {nombre: '🌀', id:'button-aire'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '💧', id:'button-agua'},
)
ratigueyaEnemigo.ataques.push(
    {nombre: '🌀', id:'button-aire'},
    {nombre: '🌀', id:'button-aire'},
    {nombre: '🌀', id:'button-aire'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '💧', id:'button-agua'},
)
rytos.ataques.push(
    {nombre: '🌀', id:'button-aire'},
    {nombre: '🌀', id:'button-aire'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '🔥', id:'button-fuego'},
)
rytosEnemigo.ataques.push(
    {nombre: '🌀', id:'button-aire'},
    {nombre: '🌀', id:'button-aire'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '🔥', id:'button-fuego'},
)
langostelvis.ataques.push(
    {nombre: '💧', id:'button-agua'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🌀', id:'button-aire'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🌱', id:'button-tierra'},
)
langostelvisEnemigo.ataques.push(
    {nombre: '💧', id:'button-agua'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🌀', id:'button-aire'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🌱', id:'button-tierra'},
)
tucapalma.ataques.push(
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🌱', id:'button-tierra'},
)
tucapalmaEnemigo.ataques.push(
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🌱', id:'button-tierra'},
)
botrelys.ataques.push(
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🌱', id:'button-tierra'},
)
botrelysEnemigo.ataques.push(
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🌱', id:'button-tierra'},
)
pydos.ataques.push(
    {nombre: '🌀', id:'button-aire'},
    {nombre: '🌀', id:'button-aire'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🌀', id:'button-aire'},
)
pydosEnemigo.ataques.push(
    {nombre: '🌀', id:'button-aire'},
    {nombre: '🌀', id:'button-aire'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🌀', id:'button-aire'},
)
octimpel.ataques.push(
    {nombre: '💧', id:'button-agua'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🌀', id:'button-aire'},
)
octimpelEnemigo.ataques.push(
    {nombre: '💧', id:'button-agua'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🌀', id:'button-aire'},
)
catrepos.ataques.push(
    {nombre: '🌀', id:'button-aire'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🌀', id:'button-aire'},
)
catreposEnemigo.ataques.push(
    {nombre: '🌀', id:'button-aire'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🌀', id:'button-aire'},
)
rhintank.ataques.push(
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '🌱', id:'button-tierra'},
)
rhintankEnemigo.ataques.push(
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '🔥', id:'button-fuego'},
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '🌱', id:'button-tierra'},
    {nombre: '🌱', id:'button-tierra'},
)
boltymon.ataques.push(
    {nombre: '💧', id:'button-agua'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🌀', id:'button-aire'},
    {nombre: '🌀', id:'button-aire'},
)
boltymonEnemigo.ataques.push(
    {nombre: '💧', id:'button-agua'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '💧', id:'button-agua'},
    {nombre: '🌀', id:'button-aire'},
    {nombre: '🌀', id:'button-aire'},
)
mokepones.push(hipodoge,capipepo,ratigueya,rytos,langostelvis,tucapalma,botrelys,pydos,octimpel,catrepos,rhintank,boltymon)

function iniciarJuego(){   
    sectionSeleccionarAtaque.style.display='none'
    sectionVerMapa.style.display='none'

    let auxCotador =1
    mokepones.forEach((mokepon)=>{
        if (auxCotador==1){
            opcionDeMokepones = 
            ` 
            <div class="tarjetas">
            `
        }
        opcionDeMokepones+= 
        ` 
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class=${mokepon.estiloTarjeta} for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        if (auxCotador==3){
            opcionDeMokepones+=
            ` 
            </div>
            `
            contenedorTarjetas.innerHTML+=opcionDeMokepones
            auxCotador=0 //reiniciamos nuestro contador para poder comenzar con el nuevo div
        }
        auxCotador+=1
    })
    //validar que se haya agregado el ultimo iiner html
    if(auxCotador!=1){
        opcionDeMokepones+=
            ` 
            </div>
            `
            contenedorTarjetas.innerHTML+=opcionDeMokepones
            auxCotador=0 //reiniciamos nuestro contador para poder comenzar con el nuevo div
    }
    if (mokepones.length>12){
        auxBody.className='body2'
    }

    inputHipodoge = document.getElementById(hipodoge.nombre)
    inputCapipepo = document.getElementById(capipepo.nombre)
    inputRatigueya = document.getElementById(ratigueya.nombre)
    inputRytos = document.getElementById(rytos.nombre)
    inputLangostelvis = document.getElementById(langostelvis.nombre)
    inputTucapalma = document.getElementById(tucapalma.nombre)
    inputBotrelys = document.getElementById(botrelys.nombre)
    inputPydos = document.getElementById(pydos.nombre)
    inputOctimpel = document.getElementById(octimpel.nombre)
    inputCatrepos = document.getElementById(catrepos.nombre)
    inputRhintank = document.getElementById(rhintank.nombre)
    inputBoltymon = document.getElementById(boltymon.nombre)
    
    sectionReiniciar.style.display='none'
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click',reiniciarJuego)
}
function ataqueAleatorioEnemigo(){
    let aleatorioAtaque =  Aleteario(0,ataquesMokeponEnemigo.length-1)
    if (aleatorioAtaque==0 || aleatorioAtaque==1){
        ataqueEnemigo.push("FUEGO")
    }else if (aleatorioAtaque==2){
        ataqueEnemigo.push("AGUA")
    }else if (aleatorioAtaque==3){
        ataqueEnemigo.push("TIERRA")
    }else if (aleatorioAtaque==4){
        ataqueEnemigo.push("AIRE")
    } else {ataqueEnemigo="Ningun ataque seleccionado para tu enemigo."}
    //alert("Tu ataque elegido fue " + ataqueJugador + " y el ataque aleatorio de tu enemigo fue " + ataqueEnemigo )
    iniciarPelea()
}
function iniciarPelea(){
    if (ataqueJugador.length==5){
        combate()
    }
}
function crearMensaje(resultadoCombate){    
    auxBody.className='body2'
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')
    let auxResultadoAtaque = document.createElement('p')
    sectionMensajes.innerHTML= resultadoCombate
    nuevoAtaqueJugador .innerHTML= indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML=indexAtaqueEnemigo
    auxResultadoAtaque.innerHTML=resultadoCombate

    ataqueJugadorMesaje.appendChild(nuevoAtaqueJugador)
    ataqueEnemigoMensaje.appendChild(nuevoAtaqueEnemigo)
    resultadoRondaAtaqueMensaje.appendChild(auxResultadoAtaque)
}
function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML= resultadoFinal
    sectionMensajes.style.textAlign = "center"
    botonesAccion.className='disable'
    sectionReiniciar.style.display='block'
}
function indexAmbosOponente(jugador, enemigo){
    indexAtaqueJugador= ataqueJugador[jugador]
    indexAtaqueEnemigo= ataqueEnemigo[enemigo]
}
function combate(){
    for (let i = 0; i < ataqueJugador.length; i++) {
        indexAmbosOponente(i, i)
        if (ataqueJugador[i]==ataqueEnemigo[i]){
            crearMensaje("Empate!")
        }else if (ataqueJugador[i]=='FUEGO' && ataqueEnemigo[i]=='TIERRA'){
            crearMensaje("GANASTE!")
            victoriasJugador++
            spanVidasJugador.innerHTML= victoriasJugador
        }else if (ataqueJugador[i]=='FUEGO' && ataqueEnemigo[i]=='AIRE'){
            crearMensaje("GANASTE!")
            victoriasJugador++
            spanVidasJugador.innerHTML= victoriasJugador
        }else if (ataqueJugador[i]=='AGUA' && ataqueEnemigo[i]=='AIRE'){
            crearMensaje("GANASTE!")
            victoriasJugador++
            spanVidasJugador.innerHTML= victoriasJugador
        }else if (ataqueJugador[i]=='AGUA' && ataqueEnemigo[i]=='FUEGO'){
            crearMensaje("GANASTE!")
            victoriasJugador++
            spanVidasJugador.innerHTML= victoriasJugador
        }else if (ataqueJugador[i]=='TIERRA' && ataqueEnemigo[i]=='FUEGO'){
            crearMensaje("GANASTE!")
            victoriasJugador++
            spanVidasJugador.innerHTML= victoriasJugador
        }else if (ataqueJugador[i]=='TIERRA' && ataqueEnemigo[i]=='AGUA'){
            crearMensaje("GANASTE!")
            victoriasJugador++
            spanVidasJugador.innerHTML= victoriasJugador
        }else if (ataqueJugador[i]=='AIRE' && ataqueEnemigo[i]=='AGUA'){
            crearMensaje("GANASTE!")
            victoriasJugador++
            spanVidasJugador.innerHTML= victoriasJugador
        }else if (ataqueJugador[i]=='AIRE' && ataqueEnemigo[i]=='TIERRA'){
            crearMensaje("GANASTE!")
            victoriasJugador++
            spanVidasJugador.innerHTML= victoriasJugador
        }else{
            crearMensaje("PERDISTE!")
            victoriasEnemigo ++
            spanVidasEnemigo.innerHTML= victoriasEnemigo
        }
    }
    revisarVidas()
}
function revisarVidas(){
    if (victoriasJugador==victoriasEnemigo){
        crearMensajeFinal("Ningún ganador, esto fue un empate.")

    }else if (victoriasJugador > victoriasEnemigo){
        //ganamos
        crearMensajeFinal("¡FELICITACIONES!<br>Ganaste la batalla. 🎉🥳")
    }else {
        //perdimos
        crearMensajeFinal("¡Lo siento!<br>Perdiste la batalla. 😭😢")
    }
}
function seleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display='none'
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML= hipodoge.nombre
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML= capipepo.nombre
    } else if ( inputRatigueya.checked){
        spanMascotaJugador.innerHTML= ratigueya.nombre
    } else if (inputRytos.checked){
        spanMascotaJugador.innerHTML= rytos.nombre
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML= langostelvis.nombre
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML= tucapalma.nombre
    } else if  (inputBotrelys.checked){
        spanMascotaJugador.innerHTML= botrelys.nombre
    } else if ( inputPydos.checked){
        spanMascotaJugador.innerHTML= pydos.nombre
    } else if (inputOctimpel.checked){
        spanMascotaJugador.innerHTML= octimpel.nombre
    } else if ( inputCatrepos.checked){
        spanMascotaJugador.innerHTML= catrepos.nombre
    } else if (inputRhintank.checked){
        spanMascotaJugador.innerHTML=rhintank.nombre
    }else if (inputBoltymon.checked){
        spanMascotaJugador.innerHTML=boltymon.nombre
    }else {
        return alert("Ninguna mascota seleccionada.")    
    }
    if (spanMascotaJugador.innerHTML!=''){
        mascotaJugador=spanMascotaJugador.innerHTML
        //para que no escoja mascota del enemigo si no hay mascota aliada
        extraerAtaques(spanMascotaJugador.innerHTML)
        sectionVerMapa.style.display='flex'
        iniciarMapa()
    }
}
function extraerAtaques(nombreMascota){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (nombreMascota==mokepones[i].nombre){
            ataques=mokepones[i].ataques
            break
        }   
    }
    mostrarAtaques(ataques)
}
function mostrarAtaques(ataques){
    let auxAtaquesBotones
    ataques.forEach((ataque)=>{
        auxAtaquesBotones=
        `
        <span class="span-botones">
            <a class="buttonAction BAtaque" id=${ataque.id} href="#">${ataque.nombre}</a>
        </span>
        `
        botonesAccion.innerHTML+=auxAtaquesBotones
        if (ataque.id=='button-fuego'){
            botonFuego = document.getElementById('button-fuego')
        }else if(ataque.id=='button-agua'){
            botonAgua = document.getElementById('button-agua')
        }else if(ataque.id=='button-tierra'){
            botonTierra = document.getElementById('button-tierra')
        }else if(ataque.id=='button-aire'){
            botonAire = document.getElementById('button-aire')
        }
    })
    botonesTodos = document.querySelectorAll('.BAtaque')
}
function secuenciaAtaques(){
    botonesTodos.forEach((boton)=>{
        boton.addEventListener('click', (e)=>{
            if (e.target.textContent=='🔥'){
                ataqueJugador.push('FUEGO')
                boton.className='buttonActionDisable'
            }else if (e.target.textContent=='💧'){
                ataqueJugador.push('AGUA')
                boton.className='buttonActionDisable'
            }else if (e.target.textContent=='🌱'){
                ataqueJugador.push('TIERRA')
                boton.className='buttonActionDisable'
            }else if (e.target.textContent=='🌀'){
                ataqueJugador.push('AIRE')
                boton.className='buttonActionDisable'
            }
            ataqueAleatorioEnemigo()
        })
    })
}
function seleccionarMascotaEnemigo(enemigo){
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    if (spanMascotaEnemigo.innerHTML==""){
        alert("Ninguna mascota seleccionada para el enemigo.")
    }
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaques()
}
function reiniciarJuego(){
    location.reload()
}
function Aleteario(min,max){
    return Math.floor(Math.random()*(max-min + 1)+min)
}
function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY

    lienzo.clearRect(0,0,mapa.width,mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    rytosEnemigo.pintarMokepon()
    langostelvisEnemigo.pintarMokepon()
    tucapalmaEnemigo.pintarMokepon()
    botrelysEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()
    octimpelEnemigo.pintarMokepon()
    catreposEnemigo.pintarMokepon()
    rhintankEnemigo.pintarMokepon()
    boltymonEnemigo.pintarMokepon()
    if(mascotaJugadorObjeto.velocidadX!==0 || mascotaJugadorObjeto.velocidadY.velocidadY!==0){
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(rytosEnemigo)
        revisarColision(langostelvisEnemigo)
        revisarColision(tucapalmaEnemigo)
        revisarColision(botrelysEnemigo)
        revisarColision(pydosEnemigo)
        revisarColision(octimpelEnemigo)
        revisarColision(catreposEnemigo)
        revisarColision(rhintankEnemigo)
        revisarColision(boltymonEnemigo)
    }
}
function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
}
function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5
}
function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX=0
    mascotaJugadorObjeto.velocidadY=0
}
function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break;
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break;
    }
}
function iniciarMapa(){
    mascotaJugadorObjeto=obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}
function obtenerObjetoMascota(){
    for (let i = 0; i< mokepones.length; i++) {
      if (mascotaJugador==mokepones[i].nombre){
        return mokepones[i]
      }
    }
}
function revisarColision(enemigo){
    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x+mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    const arribaEnemigo = enemigo.y +20
    const abajoEnemigo = enemigo.y + enemigo.alto -20
    const derechaEnemigo = enemigo.x+enemigo.ancho -20
    const izquierdaEnemigo = enemigo.x + 20
    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return ;
    }
    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display='flex'
    sectionVerMapa.style.display='none'
    seleccionarMascotaEnemigo(enemigo) 
}
window.addEventListener('load', iniciarJuego)