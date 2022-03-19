let loader = document.querySelector('.preloader')
window.addEventListener('load', vanish);

function vanish(){
    loader.classList.add('disppear')
}


let animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets10.lottiefiles.com/packages/lf20_bpqri9y8.json'
})

function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
}
  
function scrollHeader(){
    const header = document.getElementById('header')
    const ul_header = document.getElementById('ul-header');
    if(this.scrollY >= 50){ 
        header.classList.add('scroll-header');
        
    }else{
        header.classList.remove('scroll-header');
        
    }
}
window.addEventListener('scroll',scrollHeader)

