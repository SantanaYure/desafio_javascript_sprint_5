// ALGORITMO TEXTUAL - COMPARATIVO DE VEÍCULOS (AJUSTADO PARA lancamento.html)

// Classe Car atualizada para suportar todos os dados da tabela
class Car {
  constructor(modelo, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, imagem) {
    this.modelo = modelo;
    this.preco = preco;
    this.alturaCacamba = alturaCacamba;
    this.alturaVeiculo = alturaVeiculo;
    this.alturaSolo = alturaSolo;
    this.capacidadeCarga = capacidadeCarga;
    this.motor = motor;
    this.potencia = potencia;
    this.volumeCacamba = volumeCacamba;
    this.roda = roda;
    this.imagem = imagem;
  }
}

let carCompareArr = [];

function getCarArrPosition(car) {
  return carCompareArr.findIndex(c => c.modelo === car.modelo);
}

function SetCarToCompare(checkbox, car) {
  const index = getCarArrPosition(car);

  if (checkbox.checked) {
    if (carCompareArr.length < 2 && index === -1) {
      carCompareArr.push(car);
    } else {
      checkbox.checked = false;
      alert("Selecione no máximo dois veículos para comparação.");
    }
  } else {
    if (index !== -1) {
      carCompareArr.splice(index, 1);
    }
  }
}

function ShowCompare() {
  if (carCompareArr.length !== 2) {
    alert("É necessário selecionar exatamente dois veículos.");
    return;
  }

  document.getElementById("compare").style.display = "block";
  UpdateCompareTable();
}

function HideCompare() {
  document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
  const c1 = carCompareArr[0];
  const c2 = carCompareArr[1];

  document.getElementById("compare_image_0").innerHTML = `<img src="${c1.imagem}" width="160">`;
  document.getElementById("compare_image_1").innerHTML = `<img src="${c2.imagem}" width="160">`;

  document.getElementById("compare_modelo_0").innerText = c1.modelo;
  document.getElementById("compare_modelo_1").innerText = c2.modelo;

  document.getElementById("compare_alturacacamba_0").innerText = c1.alturaCacamba;
  document.getElementById("compare_alturacacamba_1").innerText = c2.alturaCacamba;

  document.getElementById("compare_alturaveiculo_0").innerText = c1.alturaVeiculo;
  document.getElementById("compare_alturaveiculo_1").innerText = c2.alturaVeiculo;

  document.getElementById("compare_alturasolo_0").innerText = c1.alturaSolo;
  document.getElementById("compare_alturasolo_1").innerText = c2.alturaSolo;

  document.getElementById("compare_capacidadecarga_0").innerText = c1.capacidadeCarga;
  document.getElementById("compare_capacidadecarga_1").innerText = c2.capacidadeCarga;

  document.getElementById("compare_motor_0").innerText = c1.motor;
  document.getElementById("compare_motor_1").innerText = c2.motor;

  document.getElementById("compare_potencia_0").innerText = c1.potencia;
  document.getElementById("compare_potencia_1").innerText = c2.potencia;

  document.getElementById("compare_volumecacamba_0").innerText = c1.volumeCacamba;
  document.getElementById("compare_volumecacamba_1").innerText = c2.volumeCacamba;

  document.getElementById("compare_roda_0").innerText = c1.roda;
  document.getElementById("compare_roda_1").innerText = c2.roda;

  document.getElementById("compare_preco_0").innerText = `R$ ${c1.preco.toLocaleString('pt-BR')},00`;
  document.getElementById("compare_preco_1").innerText = `R$ ${c2.preco.toLocaleString('pt-BR')},00`;
}
