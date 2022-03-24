function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertidoEmReal = document.getElementById(
    "valorConvertidoEmReal"
  );
  var valorConvertidoEmReal = "O resultado em Real é R$ " + valorEmReal;
  elementoValorConvertidoEmReal.innerHTML = valorConvertidoEmReal;
}

function Converter2() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmEuro = valorEmDolarNumerico * 0.92;
  console.log(valorEmEuro);

  var elementoValorConvertidoEmEuro = document.getElementById(
    "valorConvertidoEmEuro"
  );
  var valorConvertidoEmEuro = "O resultado em Euro é €$ " + valorEmEuro;
  elementoValorConvertidoEmEuro.innerHTML = valorConvertidoEmEuro;
}
function Converter3() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmLibra = valorEmDolarNumerico * 0.76;
  console.log(valorEmLibra);

  var elementoValorConvertidoEmLibra = document.getElementById(
    "valorConvertidoEmLibra"
  );
  var valorConvertidoEmLibra = "O resultado em Libra é £$ " + valorEmLibra;
  elementoValorConvertidoEmLibra.innerHTML = valorConvertidoEmLibra;
}