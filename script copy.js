const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const imagemCentro = document.querySelector('.app__image')
const botoes = document.querySelectorAll('.app__card-button')
const titulo = document.querySelector('.app__title')

const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')



const displayTempo = document.querySelector('#timer')
const startBt = document.querySelector('.app__card-primary-butto-icon')

const duracaoFoco = 1500
const duracaoCurto = 300
const duracaoLongo = 900

function alterarContexto(contexto){
    botoes.forEach(function (contexto){
        contexto.classList.remove('active')
    })

    html.setAttribute('data-contexto', contexto)
    imagemCentro.setAttribute('src', `/imagens/${contexto}.png`)

    switch(contexto){
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada?,
            <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar a superfície,
            <strong class="app__title-strong">Faça uma pausa longa.</strong>            
            `
            break
        default:
            break
    }
}

startBt.addEventListener('click', () => {
    estadoAtual = startBt.getAttribute('src')
    if (estadoAtual == '/imagens/pause.png'){
        startBt.setAttribute('src', '/imagens/play_arrow.png')
    } else{
        startBt.setAttribute('src', '/imagens/pause.png')
    }  
})

focoBt.addEventListener('click', () => {
    // html.setAttribute('data-contexto', 'foco')
    // imagemCentro.setAttribute('src', '/imagens/foco.png')
    // focoBt.setAttribute('class', 'app__card-button app__card-button--foco active')
    // curtoBt.setAttribute('class', 'app__card-button app__card-button--curto ')
    // longoBt.setAttribute('class', 'app__card-button app__card-button--longo')
    alterarContexto('foco')
    focoBt.classList.add('active')

})

curtoBt.addEventListener('click', () => {
    // html.setAttribute('data-contexto', 'descanso-curto')
    // imagemCentro.setAttribute('src', '/imagens/descanso-curto.png')
    // focoBt.setAttribute('class', 'app__card-button app__card-button--foco')
    // curtoBt.setAttribute('class', 'app__card-button app__card-button--curto active')
    // longoBt.setAttribute('class', 'app__card-button app__card-button--longo')
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')

})

longoBt.addEventListener('click', () => {
    // html.setAttribute('data-contexto', 'descanso-longo')
    // imagemCentro.setAttribute('src', '/imagens/descanso-longo.png')
    // focoBt.setAttribute('class', 'app__card-button app__card-button--foco')
    // curtoBt.setAttribute('class', 'app__card-button app__card-button--curto')
    // longoBt.setAttribute('class', 'app__card-button app__card-button--longo active')
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

musica.loop = true
musicaFocoInput.addEventListener('change', () => {
    if(musica.paused){
        musica.play()
    } else{
        musica.pause()
    }
})







