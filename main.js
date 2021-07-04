const arr = [
    "Primeiro, tenha um ideal prático definido e claro; uma meta, um objetivo. Segundo, tenha os meios necessários para atingir seus fins; sabedoria, dinheiro, materiais e métodos. Terceiro, ajuste todos os seus meios para esse fim. – Aristóteles",

    "Diga-me e eu esqueço. Ensine-me e eu lembro. Envolva-me e eu aprendo. – Benjamin Franklin",

    "Quando chegar ao fim da corda, dê um nó nela e segure-se. – Franklin D. Roosevelt",

    "Não vá aonde o caminho pode levar, vá onde não há caminho e deixe uma trilha. – Ralph Waldo Emerson",

    "Nunca deixe o medo de bater o impedir de jogar o jogo. – Babe Ruth",
]

const dv = document.querySelector('.container')
const btn = document.querySelector('.btn')


// Gera a frase de acordo com a posição no Array e a imprime no elemento HTML
function randomPhrase(){
    randomPosition = Math.floor(Math.random() * arr.length)
    sp.innerHTML = `"${arr[randomPosition]}"`
}
