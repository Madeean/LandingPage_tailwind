

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

  
function scrollHeader(){
    const header = document.getElementById('header')
    const html  = document.querySelector('html')
    
    if(this.scrollY >= 50){ 
        if(html.classList.contains('dark')){
            header.classList.add('scroll-header-dark');
        }else{
            header.classList.add('scroll-header-light');
        }
        
    }else{
        if(html.classList.contains('dark')){
            header.classList.remove('scroll-header-dark');
        }else{
            header.classList.remove('scroll-header-light');
        }
        
    }
}
window.addEventListener('scroll',scrollHeader)


// drag
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,

      // call this function on every dragend event
      end (event) {
        var textEl = event.target.querySelector('.loaalala')

        textEl && (textEl.textContent =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 1) +
                     Math.pow(event.pageY - event.y0, 1) | 0))
            .toFixed(2) + 'px')
      }
    }
  })

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener



// mixitup filter
let mixerPortfolio = mixitup('.work__container', {
    selectors:{
        target:'.work__card'
    },
    animation:{
        duration:300
    }
})

/* Link active work */ 

const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=>l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=>l.addEventListener('click',activeWork))


// tilt js
VanillaTilt.init(document.querySelectorAll(".work__card"), {
  max: 25,
  speed: 400
});


// smtp
function sendEmail(){
  Email.send({
    Host : "smtp.mailtrap.io",
    Username : "04ccf795e33725",
    Password : "a96b8f6bd127ea",
    To : 'madereihan26@gmail.com',
    From : `${document.getElementById("email").value}`,
    Subject : "new value from contact form portfolio website",
    Body : `Name: ${document.getElementById("name").value} <br>
            Email: ${document.getElementById("email").value} <br>
            Message: ${document.getElementById("message").value}`
  }).then(
    message => Toastify({
      text: `${message} Message Terikirim`,
      duration: 2000,
      className: "success",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast()
  );
}

// SCROLL SECTIONS ACTIVE LINK

const sections = document.querySelectorAll('section[id]')


function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.add('actived')
        }else{
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove('actived')
        }
    })
}
window.addEventListener('scroll',scrollActive)



// scroll smooth
var scroll = new SmoothScroll('a[href*="#"]');

