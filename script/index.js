let urlGet = "http://localhost:8080/usuario/buscarNome?nome=";
let usuario = document.getElementById("usuario");
let senha = document.getElementById("senha");

//---------------------//
// Validação de Usuario   //
//---------------------//

function Validation(user, pass) {
  fetch(urlGet + user)
    .then(T => T.json())
    .then(data => {
      if (data[0].usuario == user && data[0].senha == pass) {
        localStorage.setItem("nome",data[0].usuario)
        window.location.href = '../page/index.html'
      }
      else {
        alert("Login ou senha incorreto!")
      }
    }).catch(() => {
      alert("Login ou senha incorreto!")
    })
};

function Login() {
  if (usuario.value != "" && senha.value != "") {
    Validation(usuario.value, senha.value);
  }
  else {
    alert("campo nao confere!")
  }
}

// window.location.href = '../page/indexPrinc.html'


function teste() {
  alert("Tste")
}