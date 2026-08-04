document.addEventListener("DOMContentLoaded", () => {


    const formulario = document.getElementById("contact-form");


    formulario.addEventListener("submit", async (e) => {


        e.preventDefault();



        const datos = {


            nombre: formulario.nombre.value,

            telefono: formulario.telefono.value,

            email: formulario.email.value,

            seguro: formulario.seguro.value,

            mensaje: formulario.mensaje.value


        };



        try {


            await fetch(
                
                "https://script.google.com/macros/s/AKfycbx0ULoTriWhEIzZ6xpHSVetBKfp8SOpCu3Toy0iZRrvV8-kwo_IaPeUuR73MhSWmHrA9Q/exec",

                {

                    method:"POST",

                    mode:"no-cors",

                    headers:{

                        "Content-Type":"application/json"

                    },


                    body:JSON.stringify(datos)


                }


            );



            alert(
                "¡Gracias! Un asesor se pondrá en contacto contigo."
            );



            formulario.reset();



        } catch(error){


            console.error(error);


            alert(
                "Ocurrió un error al enviar la información."
            );


        }


    });



});