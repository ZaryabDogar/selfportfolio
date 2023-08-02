const btn=document.querySelector(".btn")
const btn1=document.querySelector(".btn1")
const icon1=document.querySelector(".icon1")
const icon2=document.querySelector(".icon2")
const icon3=document.querySelector(".icon3")
const icon4=document.querySelector(".icon4")
btn.addEventListener("mouseover",(e)=>{
    const y=e.pageY -btn.offsetTop
    const x =e.pageX - btn.offsetLeft
    btn.style.setProperty("--xpos",x +"px")
    btn.style.setProperty("--ypos",y +"px")
}) 
btn1.addEventListener("mouseover",(e)=>{
    const y=e.pageY -btn1.offsetTop
    const x =e.pageX - btn1.offsetLeft
    btn1.style.setProperty("--xpos",x +"px")
    btn1.style.setProperty("--ypos",y +"px")
}) 
icon1.addEventListener("mouseover",(e)=>{
    const y=e.pageY -icon1.offsetTop
    const x =e.pageX - icon1.offsetLeft
    icon1.style.setProperty("--xpos",x +"px")
    icon1.style.setProperty("--ypos",y +"px")

}) 
icon2.addEventListener("mouseover",(e)=>{
    const y=e.pageY -icon2.offsetTop
    const x =e.pageX - icon2.offsetLeft
    icon2.style.setProperty("--xpos",x +"px")
    icon2.style.setProperty("--ypos",y +"px")

}) 
icon3.addEventListener("mouseover",(e)=>{
    const y=e.pageY -icon3.offsetTop
    const x =e.pageX - icon3.offsetLeft
    icon3.style.setProperty("--xpos",x +"px")
    icon3.style.setProperty("--ypos",y +"px")

}) 
icon4.addEventListener("mouseover",(e)=>{
    const y=e.pageY -icon4.offsetTop
    const x =e.pageX - icon4.offsetLeft
    icon4.style.setProperty("--xpos",x +"px")
    icon4.style.setProperty("--ypos",y +"px")

}) 
let words=document.querySelectorAll(".word");
words.forEach ((word)=>{
    let letters=word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span =document.createElement("span");
        span.textContent=letter;
        span.className="letter";
        word.append(span)
    })
})
let currwordindex=0;
let maxwordindex=words.length-1;
words[currwordindex].style.opacity= "1"

let changetext=()=>{
    let currword=words[currwordindex];
    let nextword=currwordindex=== maxwordindex?words[0]:words[currwordindex + 1];
    Array.from(currword.children).forEach((letter,i)=>{
        setTimeout(() => {
            letter.className="letter out";
        }, i*80);
    });
    nextword.style.opacity="1";
    Array.from(nextword.children).forEach((letter ,i )=>{
        letter.className="letter behind";
        setTimeout(() => {
            letter.className="letter in"
        }, 340+i * 80);
    });
    currwordindex=currwordindex=== maxwordindex ? 0 :currwordindex+1;
}
changetext();
setInterval(changetext,3000)

//circle skill
    const circle=document.querySelectorAll(".circle");
    circle.forEach(elem=>{
        var dots =elem.getAttribute("data-dots")
        var mark =elem.getAttribute("data-percent");
        var percent = Math.floor(dots*mark/100)
        var point="";
        var rotate=360/dots;
        for(let i=0;i<dots;i++){
            point+=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
        }
        elem.innerHTML=point
        const  pointmark=elem.querySelectorAll(".points");
        for(let i=0 ; i<percent; i++){
            pointmark[i].classList.add('marked')
        } 
    }) 

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header  nav a')

window.onscroll=()=>{
sections.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop-100;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id')
    sec.addEventListener("click",()=>{
        
    })
    if (top>=offset&&top<offset+height)
    {
        navlinks.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('header nav  a[href*=' +id +']').classList.add('active');
        })
    }
})
menu.classList.remove('bx-x')
navbar.classList.remove('active')
}

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})

let navlink=document.querySelectorAll('header  nav a')
navlinks.forEach(link=>{
    link.addEventListener('click',()=>{
        menu.classList.remove('bx-x')
navbar.classList.remove('active')
    })

})

//scroll reveal
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200,



});
ScrollReveal().reveal('.icon1,.icon3 ,.btn ,.change  ,.heading,.about .content', { delay: 100,origin:'top' });
ScrollReveal().reveal('.icon2,.icon4,.btn1,.services .container,.projectcontainer,.skillright,.skillleft,.about p', { delay:150,origin:'bottom' });


