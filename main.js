import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getRedirectResult, GoogleAuthProvider, signInWithRedirect } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAIsA7pDTZHAZfIPicMVtKv_ndt_wMVqdI",
    authDomain: "autenticacion-e2b08.firebaseapp.com",
    projectId: "autenticacion-e2b08",
    storageBucket: "autenticacion-e2b08.appspot.com",
    messagingSenderId: "631683448891",
    appId: "1:631683448891:web:48a5e0ab609985a6b75c1e",
    measurementId: "G-5KWBX80BDV"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const registro = document.getElementById("registro");
const login = document.getElementById("login");

document.getElementById("crear_cuenta").addEventListener("click", function () {
    login.style.visibility = 'hidden';
    registro.style.visibility = 'visible';
})

document.getElementById("iniciar_sesion").addEventListener("click", function () {
    registro.style.visibility = 'hidden';
    login.style.visibility = 'visible';
})

document.getElementById("google").addEventListener("click", function () {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
});
//Registro de cuenta

document.getElementById("crear").addEventListener('click', function () {
    const email = document.getElementById("crear_email").value;
    const password = document.getElementById("crear_password").value;

    createUserWithEmailAndPassword(auth, email, password)
        //Enviar un formato de error
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log("Cuenta creada");
            getRedirectResult(setTimeout(function () { window.location.href = "https://andersondanielchavezrodriguez.github.io/TAREA-2/"; }, 2000))
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // .
            console.log("error en el registro");
        });
})

//Inicio de sesion

document.getElementById("register").addEventListener('click', function () {
    const login_email = document.getElementById("email").value;
    const login_password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, login_email, login_password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log("Sesion iniciada");
            getRedirectResult(setTimeout(function () { window.location.href = "https://andersondanielchavezrodriguez.github.io/TAREA-2/"; }, 2000))
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            //..
            console.log("error en el inicio de sesion")
        });
})

















