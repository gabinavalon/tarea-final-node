$("#signup").click(function() {
    $("#first").fadeOut("fast", function() {
    $("#second").fadeIn("fast");
    });
    });
    
    $("#signin").click(function() {
    $("#second").fadeOut("fast", function() {
    $("#first").fadeIn("fast");
    });
    });
    
    
      
             $(function() {
               $("form[name='login']").validate({
                 rules: {
                   
                   email: {
                     required: true,
                     email: true
                   },
                   password: {
                     required: true,
                     
                   }
                 },
                  messages: {
                   email: "Por favor, introduzca un correo",
                  
                   password: {
                     required: "Por favor, introduzca un password",
                    
                   }
                   
                 },
                 submitHandler: function(form) {
                   form.submit();
                 }
               });
             });
             
    
    