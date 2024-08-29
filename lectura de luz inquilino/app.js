
// evento para la fecha , el DOM haya cargado
document.addEventListener("DOMContentLoaded", (event) => {
    const fecha = document.getElementById("fechaOutput");
    const now = new Date();
    fecha.innerText = now.toLocaleDateString();
});


// Funcion que se ejecuta cada vez que se pulsa una tecla en cualquier input
// Tiene que recibir el "event" (evento generado) y el siguiente id donde poner
// el foco. Si ese id es "submit" se envia el formulario


// variables input
let costoKwh = document.getElementById('costoKwhInput');
let lecturaAnterior = document.getElementById('lecturaAnteriorInput');
let lecturaActual = document.getElementById('lecturaActualInput');

// let energiaIO = document.getElementById('energiaInput');
let energiaExtra = document.getElementById('energiaExtraInput');
let alumPublic = document.getElementById('alumPublicInput');
let cargoFijo = document.getElementById('cargoFijoInput');
let interesCompensatorio = document.getElementById('interesCompensatorioInput');
let mantRepos = document.getElementById('mantReposInput');
let igv = document.getElementById('igvInput');
let otrosConceptos = document.getElementById('otrosConceptosInput');
let aguaPago = document.getElementById('aguaPagoInput');


// variables output

let consumoFacturadoOutput = document.getElementById('consumoFacturadoOutput');
let alumPublicOutput = document.getElementById('alumPublicOutput');
let cargoFijoOutput = document.getElementById('cargoFijoOutput');
let energiaOutput = document.getElementById('energiaOutput');
let interesCompesatorioOutput = document.getElementById('interesCompensatorioOutput');
let mantReposOutput = document.getElementById('mantReposOutput');
let igvOutput = document.getElementById('igvOutput');
let otrosConceptosOutput = document.getElementById('otrosConceptosOutput');
let totalLuzOutput = document.getElementById('totalLuzOutput');
let aguaPagoOutput = document.getElementById('aguaPagoOutput');
let totalOutput = document.getElementById('totalOutput');


let checkEnergiaExtra = document.getElementById('checkEnergiaExtra');

function comprueba(obj){
	if (checkEnergiaExtra.checked) {
		console.log('activado');
	}
	else{
		console.log('desactivado');
	}
}


function desactivar(id,check) {
	
	let elem = document.getElementById(id);
	let check_ = document.getElementById(check);

	if (check_.checked) {
		elem.disabled = false;
	}
	else{
		elem.disabled = true;
	}
	// this.checked ? elem.disabled = false 
	// :elem.disabled = true;
	//elem.disabled = !this.checked
}




let btnCalcular = document.getElementById('btnCalcular');

btnCalcular.onclick = ()=>{
	var consumoFact,energiaT,energia,alumPublic_2,cargoFijo_2,
	 interesCompensatorio_2, mantRepos_2,igv_2,otrosConceptos_2,aguaPago_2,totalLuz,totalLA;

	 let energiaPrt;
	consumoFact = lecturaActual.value - lecturaAnterior.value;
	
	alumPublic_2 = div_2(alumPublic.value);
	cargoFijo_2 = div_2(cargoFijo.value);

	//energia
	energia = consumoFact * costoKwh.value;

	let energiaExt2;
	//energiaT =parseFloat(energia)  ;
	//+ parseFloat(energiaExtra.value);
	if(energiaExtra.value == ''){
		energiaPrt = numDec(energia)+"";
	}
	else{
		energiaExt2 = div_2(energiaExtra.value);
		//energiaT += parseFloat(energiaExtra.value);
		energiaPrt = numDec(energia) + " + " + energiaExt2;
	}
	

	let check_a = document.getElementById('checkEnergiaExtra');

	if (check_a.checked) {
		energia += parseFloat(energiaExt2);
	}

	interesCompensatorio_2 = div_2(interesCompensatorio.value);
	mantRepos_2 = div_2(mantRepos.value);
	igv_2 = div_2(igv.value)
	otrosConceptos_2 = div_2(otrosConceptos.value);

	//total recibo luz

	//numDec(energiaT)
	totalLuz = parseFloat(energia) 
	+ parseFloat(alumPublic_2)  + parseFloat(cargoFijo_2)
	+ parseFloat(interesCompensatorio_2) + parseFloat(mantRepos_2) 
	+ parseFloat(igv_2) + parseFloat(otrosConceptos_2);
	
	aguaPago_2 = div_2(aguaPago.value);

	//total luz y agua
	totalLA = parseFloat(totalLuz) + parseFloat(aguaPago_2);
	
	consumoFacturadoOutput.innerHTML =  numDec(consumoFact);

	alumPublicOutput.innerHTML = alumPublic_2;
	cargoFijoOutput.innerHTML = cargoFijo_2;

	energiaOutput.innerHTML = energiaPrt;
	interesCompesatorioOutput.innerHTML = interesCompensatorio_2;
	mantReposOutput.innerHTML = mantRepos_2;
	igvOutput.innerHTML = igv_2;
	otrosConceptosOutput.innerHTML = otrosConceptos_2;

	totalLuzOutput.innerHTML = numDec(totalLuz);
	//console.log(typeof(totalLuz));
	aguaPagoOutput.innerHTML = aguaPago_2;

	totalOutput.innerHTML = numDec(totalLA);
};



function saltar(e,id)
{
	// Obtenemos la tecla pulsada
	(e.keyCode)?k=e.keyCode:k=e.which;
 
	// Si la tecla pulsada es enter (codigo ascii 13)
	if(k==13)
	{
		// Si la variable id contiene "submit" enviamos el formulario
		if(id=="submit")
		{
			//document.forms[0].submit();
			totalOutput.innerHTML = 8;
		}else{
			// nos posicionamos en el siguiente input
			document.getElementById(id).focus();
		}
	}
};

function numDec(x) {
	return Number.parseFloat(x).toFixed(2);
  };

  function div_2(numD){		
		let div = numD / 2;
		
		return numDec(div);
  };

//  lecturaAnteriorInput.onblur = ()=>{
// 	lectActual = lecturaActualInput.value;
// 	lectAnterior = lecturaAnteriorInput.value;
// 	costoKwh = costoKwhInput.value;
	
// 	 consumoKw = lectActual - lectAnterior;
// 	 energia = consumoKw * costoKwh;
// 	 // let costokwh = costokwh.value;
// 	// let energia = consumoKw * costokwh;
// 	 energiaInput.value = energia.toFixed(2);	
//  };






// let alumPub,cargoFij,interesCom,mantRep,igv,otrConcep,aguapag,totalLuz,totalLA;
// alumPublicInput.onblur = ()=>{alumPub = div2('alumPublicInput','alumPublicOutput');};
// cargoFijoInput.onblur = ()=>{cargoFij = div2('cargoFijoInput','cargoFijoOutput');};

// interesCompensatorioInput.onblur = ()=>{interesCom = div2('interesCompensatorioInput','interesCompensatorioOutput');};
// mantReposInput.onblur = ()=>{mantRep = div2('mantReposInput','mantReposOutput');};
// igvInput.onblur = ()=>{igv = div2('igvInput','igvOutput');};
// otrosConceptosInput.onblur = ()=>{otrConcep = div2('otrosConceptosInput','otrosConceptosOutput');};

// aguaPagoInput.onblur = ()=>{aguapag = div2('aguaPagoInput','aguaPagoOutput');};



// function div2(idNum,idPrt){
// 	let num = document.getElementById(idNum);
// 	let prt = document.getElementById(idPrt);

// 	let div = num.value / 2;
// 	prt.innerHTML = div.toFixed(2);
// 	return div.toFixed(2);
// }

