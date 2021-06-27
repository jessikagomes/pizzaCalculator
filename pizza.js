function calcularPizza(){
	var n = parseInt(document.getElementById("qtdPessoas").value);
	var x = parseInt(document.getElementById("qtdPedacos").value);
	var resultado = document.getElementById("tPizza");
	var sabores = 0;
	var result =0;
	var extras=0;

	document.getElementById("qtdPessoas").value="";
	document.getElementById("qtdPedacos").value="";

	if (!!n && !!x) {
		result = Math.ceil((n * x)/8);
		sabores = result * 2;
		extras = (result * 8) - (n*x);
		return resultado.innerHTML = "Peça <b>" + result + "</b> pizza(s) <br>Pedaços extra: <b>" + extras + "</b><br>Até <b>" + sabores + "</b> sabores.";
		} else {
			return resultado.innerHTML = "* Por favor, preencha os campos.<br><br><br>"
		}
}
