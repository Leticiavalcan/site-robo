const monstros= [
    {
        id:1,
        nome: 'Osvaldo',
        altura: 2,
        habilidades:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi consectetur repudiandae ab assumenda sint sunt incidunt excepturi illum error, voluptatibus architecto quidem provident beatae, ipsam magnam ducimus voluptatum eaque laborum!',
        foto: 'https://robohash.org/osvaldo'
    },
    
    {
        id:2,
        nome: 'Megamente',
        altura: 3,
        habilidades:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi consectetur repudiandae ab assumenda sint sunt incidunt excepturi illum error, voluptatibus architecto quidem provident beatae, ipsam magnam ducimus voluptatum eaque laborum!',
        foto: 'https://robohash.org/Megamente'
    },
    
    {
        id:3,
        nome: 'Devinho',
        altura: 7,
        habilidades:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi consectetur repudiandae ab assumenda sint sunt incidunt excepturi illum error, voluptatibus architecto quidem provident beatae, ipsam magnam ducimus voluptatum eaque laborum!',
        foto: 'https://robohash.org/Devinho'
    },
    
    {
        id:4,
        nome: 'Abacate',
        altura: 1.4,
        habilidades:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi consectetur repudiandae ab assumenda sint sunt incidunt excepturi illum error, voluptatibus architecto quidem provident beatae, ipsam magnam ducimus voluptatum eaque laborum!',
        foto: 'https://robohash.org/Abacate'
    },
    ]


const secao = document.querySelector('.monstros')
const botao= document.querySelector('.btn')

botao.addEventListener('click', ()=>{
document.documentElement.classList.toggle('dark')
})


const todosOsMonstros = monstros.map(monstro => {
    return `<div>
<p>Nome: ${monstro.nome}</p>
<p>${monstro.altura}</p>
<img src="${monstro.foto}">
<p class="habilidades">Habilidades: ${monstro.habilidades}</p>
</div>`

})

secao.innerHTML= todosOsMonstros





