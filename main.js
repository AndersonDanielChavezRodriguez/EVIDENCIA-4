const registro = document.getElementById("registro");
const login = document.getElementById("login");

document.getElementById("crear_cuenta").addEventListener("click", function(){
    
    login.style.visibility = 'hidden';
    registro.style.visibility = 'visible';
    
})

document.getElementById("iniciar_sesion").addEventListener("click", function(){

    registro.style.visibility = 'hidden';
    login.style.visibility= 'visible';

})
