
let codigo = document.getElementById("codigo");
let descricao = document.getElementById("descricao");
let marca = document.getElementById("marca");
let endereco = document.getElementById("endereco");
let codbarra = document.getElementById("codbarra");
let list = document.getElementById("lista");
let armazem = [];

var dados;
let urlGet = "http://localhost:8080/oracle/";
let teste = [{codigo:"s"},{codigo:"a"},{codigo:"a"}];
const numerosSemRepeticao = [...new Set(teste)];

FeactApi("todos");
function FeactApi(opcaoUrl){

fetch(urlGet+"todos")
    .then(T => T.json())
    .then(data => {
  
     dados = data;
     Pesquisar(dados);
    }).catch(() => {
      alert(`
      Dados não foram encontra dados! 
      Tente reiniciar o navegador...
      Caso o problema persista procure o Suporte técnico!
      `)
      document.getElementById("carregando").innerText = "Problema na busca dos dados!"
    })
}
//Também amo vocês, ficam com ciúmes não. 
function LimparCampo() {
  codigo.value = "";
  descricao.value = "";
  marca.value = "";
  endereco.value = "";
  codbarra.value = "";
}
function Pesquisar(dados) {
  
  if (codigo.value == "" && descricao.value == "" && marca.value == "" && endereco.value == "" && codbarra.value == "") {
    armazem = []
    FiltrarTodos();
  }
  else if (marca.value != "") {
    armazem = []
    FilterMarca();
  }
  else if (descricao.value != "") {
    armazem = [];
    FilterDescricao();
  }
  else if (endereco.value != "") {
    armazem = [];
    FilterEndereco();
  }
  else if (codbarra.value != "") {
    armazem = [];
    FilterCodBarra();
  }
}
function FilterCodBarra() {
  dados.filter((date, i) => {
    if (date.codbarra.includes(codbarra.value) || codbarra.value == "") {
      let tr = `  <tr>
                   <td onclick="Subtela(${date.codprod})">${date.codprod}</td>
                    <td>${date.descricao}</td>
                    <td>${date.marca}</td>
                    <td>${date.endereco}</td>
                    <td>${date.codauxiliar}</td>
                  </tr>`
      armazem.push(tr);
    }
    //dados.push(dados)
  })
  list.innerHTML = armazem.join('');
}
function FilterMarca() {
  dados.filter((date, i) => {
    if (date.marca.includes(marca.value) || marca.value == "") {
      let tr = `  <tr onclick="Subtela(${date.codprod})">
              <td onclick="document.getElementById('id01').style.display='none'">${date.codprod}</td>
              <td>${date.descricao}</td>
              <td>${date.marca}</td>
              <td>${date.endereco}</td>
              <td>${date.codauxiliar}</td>
            </tr>`
      armazem.push(tr);
    }
    //dados.push(dados)
  })
  list.innerHTML = armazem.join('');
}
function FilterEndereco() {
  dados.filter((date, i) => {
    if (date.endereco.includes(endereco.value) || endereco.value == "") {
      let tr = `  <tr onclick="Subtela(${date.codprod})">
              <td onclick="document.getElementById('id01').style.display='block'">${date.codprod}</td>
              <td>${date.descricao}</td>
              <td>${date.marca}</td>
              <td>${date.endereco}</td>
              <td>${date.codauxiliar}</td>
            </tr>`
      armazem.push(tr);
    }
    //dados.push(dados)
  })
  list.innerHTML = armazem.join('');
}
function FilterDescricao() {
  dados.filter((date, i) => {
    if (date.descricao.includes(descricao.value) || descricao.value == "") {
      let tr = `  <tr onclick="Subtela(${date.codprod})">
              <td onclick="document.getElementById('id01').style.display='block'">${date.codprod}</td>
              <td>${date.descricao}</td>
              <td>${date.marca}</td>
              <td>${date.endereco}</td>
              <td>${date.codauxiliar}</td>
            </tr>`
      armazem.push(tr);
    }
    //dados.push(dados)
  })
  list.innerHTML = armazem.join('');
}
function FiltrarTodos() {
  dados.map((date,index) => {
    let tr = `<tr onclick="Subtela(${date.codprod})">
                <td onclick="document.getElementById('id01').style.display='block'">${date.codprod}</td>
                <td>${date.descricao}</td>
                <td>${date.marca}</td>
                <td>${date.endereco}</td>
                <td>${date.codauxiliar}</td>
              </tr>`
           
           if(date.codprod[index] != date.codprod[index + 1]){
           }else{
             armazem.push(tr);
           }
  })
  list.innerHTML = armazem.join('');
}
function Subtela(codigo){
  document.getElementById('id01').style.display='block'
  let nome = localStorage.getItem("nome");
  fetch(urlGet+`codigo?codigo=${codigo}`)
    .then(T => T.json())
    
    .then(data => {
     dados = data;
     let armazem = [];
     data.map((li, index)=>{
      let list = `
      <ul style="flex-direction:row; display:flex; justify-content:center;align-items:center">
            <li style="flex-direction:row; display:flex; ">${li.numlote}</li>
            <li style="flex-direction:row; display:flex; padding-left:25px;">${li.dtvalidade}</li>
            <li style="flex-direction:row; display:flex; padding-left:25px;">${li.qt}</li>
            <input type ="number" placeholder="COD ENDEREÇO" style="width:50px;" />
            <button type = "button" style="width:5%; height:35px; border-radius:10px; margin:9px 0px 0px 15px; text-align:center; align-items:center;justify-content:center;" onclick="document.getElementById('id02').style.display='block'"></button>
            <input type ="number" placeholder="ENDEREÇO" style="width:150px;" value = "" disabled/>
        </ul>
        `
        document.getElementById("CODPROD").value = li.codprod;
        document.getElementById("DESC").value = li.descricao;
        document.getElementById("ENDERECO").value = li.endereco;
        document.getElementById("MARCA").value = li.marca;
        document.getElementById("QT").value = li.qt;
        document.getElementById("CODAUXILIAR").value = li.codauxiliar;
        document.getElementById("CODUSUARIO").value = "0000"
        document.getElementById("USUARIO").value = nome;
        armazem.push(list)
    })
    document.getElementById("HederList").innerHTML = armazem.join('');
     console.log(dados)
  }).catch(() => {
     console.log(dados.codigo)
    })
}

