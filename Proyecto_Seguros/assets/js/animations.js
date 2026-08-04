document.addEventListener("DOMContentLoaded", () => {


    gsap.registerPlugin(ScrollTrigger);



    // ==============================
    // ENTRADA DEL HEADER
    // ==============================


    gsap.from(".header", {

        y:-50,

        opacity:0,

        duration:1,

        ease:"power3.out"

    });




    // ==============================
    // HERO TEXTO
    // ==============================


    const heroAnimation = gsap.timeline();



    heroAnimation
    .from(".hero-label",{

        y:30,

        opacity:0,

        duration:.8,

        ease:"power3.out"

    })

    .from(".hero h1",{

        y:50,

        opacity:0,

        duration:1,

        ease:"power3.out"

    },"-=0.4")


    .from(".hero p",{

        y:30,

        opacity:0,

        duration:.8

    },"-=0.5")


    .from(".hero-buttons",{

        y:30,

        opacity:0,

        duration:.8

    },"-=0.4");


    gsap.from(".card-top",{
    x:60,
    opacity:0,
    duration:1,
    delay:.8,
    ease:"power3.out"
});

gsap.from(".card-bottom",{
    x:-60,
    opacity:0,
    duration:1,
    delay:1,
    ease:"power3.out"
});




    // ==============================
    // TARJETA DE SEGURO
    // MOVIMIENTO FLOTANTE
    // ==============================



    gsap.from(".insurance-card",{


        scale:.7,

        opacity:0,

        rotation:-10,

        duration:1.2,

        ease:"back.out(1.7)"


    });



    gsap.to(".insurance-card",{


        y:-15,

        rotation:2,

        duration:3,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"


    });





    // ==============================
    // CIRCULO DE FONDO
    // ==============================



    gsap.to(".circle-animation",{


        rotation:360,

        duration:20,

        repeat:-1,

        ease:"none"


    });




});

// ==================================
// SCROLL REVEAL SECTIONS
// ==================================


gsap.utils.toArray(
".about-left, .about-right, .products-header, .product-card, .agenda-text, #contact-form, .faq-item, .location-info, .map-container"
)
.forEach((element)=>{


    gsap.from(element, {


        y:60,

        opacity:0,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{


            trigger:element,

            start:"top 85%",


        }


    });



});


// ==================================
// NUMBER COUNTER
// ==================================


document.querySelectorAll(".counter")
.forEach(counter=>{


    let target = counter.dataset.number;



    gsap.to(counter,{


        innerText:target,

        duration:2,

        snap:{
            innerText:1
        },


        scrollTrigger:{


            trigger:counter,

            start:"top 80%"


        },


        onUpdate:function(){


            counter.innerHTML =
            "+" + Math.floor(counter.innerText);


        }



    });



});

// ==================================
// FLOATING CARDS
// ==================================


gsap.to(".product-card",{


    y:-8,

    duration:3,

    repeat:-1,

    yoyo:true,

    stagger:.2,

    ease:"sine.inOut"



});