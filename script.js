function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)


    container.appendChild(cartao)

}

criaCartao(

    'Matematica',

    'quantos lados tem a forma geometrica ectagono?',

    '8'

)

criaCartao(

    'videogames',

    'Qual jogo caractirazado por cuadrados famoso nos anos 2012 - 2016, e recnte mente foi comprado por microsoft?',

    'minecraft'

)

criaCartao(

    'conhecimento geral',

    'Quem fez os oculos?',

    'Robert crossetest, Ruger Bacur'

)

criaCartao(

    'videogames',

    'Qual jogo e conhecido por poder ser jogado en qualquer dispositivo?',

    'Doom'

)
criaCartao(

    'Quimica',

    'Qual e o nombre do elemento quimico H²0',

    'Agua'

)
criaCartao(

    '..-. . -.. . .-. .- .-..',

    '-.-. ..- .- .-.. / . ... / .-.. .- / -.. .. ..-. . .-. . -. -.-. .. .- / . -. - .-. . / .-.. .- / . -. - .-. --- .--. .. .- / -.. . / ... .... .- -. -. --- -. / -.-- / .-.. .- / . -. - .-. --- .--. .. .- / - . .-. -- --- -.. .. -. .- -- .. -.-. .-',

    '.-.. .- / . -. - .-. --- .--. .- / -.. . / ... .... .- -. -. --- -. / . ... / ..- -. .- / -- . -.. .. -.. .- / -.. . / .. -. ..-. --- .-. -- .- -.-. .. -. --..-- / -- .. . -. - .-. .- ... / --.- ..- . / .-.. .- / . -. - .-. --- .--. .- / - . .-. -- --- -.. .. -. -- .. -.-. .- / . ... / ..- -. .- / -- . -.. .. -.. .- / -.. . .-.. / -.. . ... --- .-. -.. . -. / . -. / ..- -. / ... .. ... - . -- .- / ..-. ... .. -.-. ---'

)