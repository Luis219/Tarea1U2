$(document).ready(function() {

    $('#formularioContacto').validate({
        /**Reglas de validación */
        rules:{
            
            //Se requiere que ingrese el nombre y tengan una logitud de al menos 3 caracteres
            nombre: {
                required:true,
                minlength:3,
                maxlength:30
            },
             //Se requiere que ingrese el correo electrónico
            email: {
                required:true
            },
            //Se requiere que ingrese el subject y tengan una logitud de al menos 10 caracteres
            subject:{
                required:true,
                minlength:10
            },
            //Se requiere que ingrese el mensaje y tengan una logitud de al menos 10 caracteres
            mensaje:{
                required:true,
                minlength:10
            },
            //Se requiere que ingrese el captcha y tengan una logitud de al menos 2 caracteres
            captcha:{
                minlength:2,
                required: true, 
                    
                
            },
            //Se requiere marcar
            check:{
                required:true
            }
        },
            //mensajes de las reglas de validación
            messages:{
                nombre:{
                    required:"Ingrese su nombre",
                    minlength:"Debe tener al menos 3 caracteres"

                }
                ,
                email:{
                    required:"Ingrese su correo electronico"
                },
                subject:{
                    required:"Ingrese el subject o tema",
                    minlength:"Debe tener al menos 10 caracteres"
                },
                mensaje:{
                    required:"Ingrese el mensaje",
                    minlength:"Debe tener al menos 10 caracteres"
                },
                captcha:{
                    required:"Ingrese el codigo",
                    minlength:"Debe tener al menos 2 caracteres"
                  
                },
                check:{
                    required:"Confirmación"
                }

            },
            //envío de formulario
            submitHandler: function(form) {

                form.submit();
          
              }
        

    });
    
    });