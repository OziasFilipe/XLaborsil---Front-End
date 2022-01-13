
let codigo = document.getElementById("codigo");
let descricao = document.getElementById("descricao");
let marca = document.getElementById("marca");
let endereco = document.getElementById("endereco");
let codbarra = document.getElementById("codbarra");
let list = document.getElementById("lista");
let armazem = [];


let dados = [{ codigo: 1, descricao: "xarope", marca: "GeoLab", endereco: "22.35.5654.48612" }, { codigo: 1, descricao: "xarope", marca: "GeoLab", endereco: "11.35.5654.48612" }, { codigo: 1, descricao: "pilula", marca: "Clipes", endereco: "22.35.5654.48612" }]

Pesquisar();
function LimparCampo() {
  codigo.value = "";
  descricao.value = "";
  marca.value = "";
  endereco.value = "";
  codbarra.value = "";
}

function Pesquisar() {
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
              <td>${date.codigo}</td>
              <td>${date.descricao}</td>
              <td>${date.marca}</td>
              <td>${date.endereco}</td>
              <td>${date.codbarra}</td>
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
      let tr = `  <tr>
              <td>${date.codigo}</td>
              <td>${date.descricao}</td>
              <td>${date.marca}</td>
              <td>${date.endereco}</td>
              <td>${date.codbarra}</td>
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
      let tr = `  <tr>
              <td>${date.codigo}</td>
              <td>${date.descricao}</td>
              <td>${date.marca}</td>
              <td>${date.endereco}</td>
              <td>${date.codbarra}</td>
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
      let tr = `  <tr>
              <td>${date.codigo}</td>
              <td>${date.descricao}</td>
              <td>${date.marca}</td>
              <td>${date.endereco}</td>
              <td>${date.codbarra}</td>
            </tr>`
      armazem.push(tr);
    }
    //dados.push(dados)
  })
  list.innerHTML = armazem.join('');
}


function FiltrarTodos() {
  dados.map((date) => {
    let tr = `  <tr>
              <td>${date.codigo}</td>
              <td>${date.descricao}</td>
              <td>${date.marca}</td>
              <td>${date.endereco}</td>
              <td>${date.codbarra}</td>
            </tr>`
    armazem.push(tr);
  })
  list.innerHTML = armazem.join('');
}


