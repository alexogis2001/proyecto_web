document.addEventListener("DOMContentLoaded", () => {


    const preguntas = document.querySelectorAll(".faq-question");


    preguntas.forEach((pregunta)=>{


        pregunta.addEventListener("click",()=>{


            const item = pregunta.closest(".faq-item");


            item.classList.toggle("active");


        });


    });


});

// =================================
// ACTIVE NAVIGATION ON SCROLL
// =================================


const sections = document.querySelectorAll("section[id]");

const links = document.querySelectorAll(".nav-center a");


function activarMenu(){


let scrollPosition = window.scrollY + 250;



sections.forEach(section=>{


const top = section.offsetTop;

const height = section.offsetHeight;

const id = section.getAttribute("id");



if(
scrollPosition >= top &&
scrollPosition < top + height
){


links.forEach(link=>{


link.parentElement.classList.remove("active");


});



const activeLink = document.querySelector(
`.nav-center a[href="#${id}"]`
);



if(activeLink){

activeLink.parentElement.classList.add("active");

}


}



});


}



window.addEventListener(
"scroll",
activarMenu
);



activarMenu();


/*======================================
        CONTADORES
======================================*/

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const increment = target / 80;

            const updateCounter = ()=>{

                current += increment;

                if(current < target){

                    counter.textContent = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.textContent = target;

                }

            };

            updateCounter();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter=>observer.observe(counter));