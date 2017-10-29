
    //para la transicion de la imagen
    $(function () {
        $ ("img").hide().fadeIn(3000);
    });

    //para los errores



    $(document).ready(function () {

        $("#form-datos").validate({

            //vamos a dar las instrucciones RULES => reglas de validacion
            rules:{
                //parejas de valores nombre de la etiqueta: valor de validacion
                nombre:{
                    required:true,
                    minlength: 3,
                },
                apellido:{
                    required: true,
                    minlength: 3,
                },
                nacionalidad: "required",
                direccion: "required",
                telefono:{
                    required:true,
                    number:true
                },
                cedula:{
                    required:true,
                    minlength: 10,
                    maxlength:10
                },
                email:{
                    required:true,
                    email:true

                }
            },

            //reglas para los mensajes
            messages:{

                nombre:{
                    required: "El campo es Obligatorio",
                    minlength: "Nombre Incorrecto"
                },
                apellido:{
                    required: "El campo es Obligatorio",
                    minlength: "Apellido Incorrecto"
                },
                nacionalidad: "El campo es Obligatorio",
                direccion: "El campo es Obligatorio",
                telefono:{
                    required:"Campo Obligatorio",
                    number: "Ingrese valores numericos"
                },
                cedula:{
                    required:"Obligatorio",
                    minlength:"mínimo 10 caracteres",
                    maxlength:"máximo 10 caracteres"
                },
                email:{
                    required: 'Ingrese E-mail',
                    email: 'Formato Incorrecto. Por ejemplo: u@localhost.com'
                }
            }
        });

    });
