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
				return resultado.innerHTML = "Order " + result + " pizza(s) <br>Extra slices: " + extras + "<br>Order up to " + sabores + " toppings.";
			} else {
				return resultado.innerHTML = "* Please, fill in the fields."
			}
		}
