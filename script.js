const reveals = document.querySelectorAll('.section');

window.addEventListener('scroll',()=>{

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;
const height=window.innerHeight;

if(top<height-100){
section.classList.add('show');
}

});

});
