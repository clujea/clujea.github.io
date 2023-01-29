	

//botones en Datos personales
	
document.getElementById('edad').addEventListener('click', function(){
	document.getElementById('edad').innerHTML = "Fecha de Nacimiento: 24/10/1979";
});

document.getElementById('estadoCivil').addEventListener('click', function(){
	document.getElementById('estadoCivil').innerHTML = "Casado hace 20 años, 2 hijas";
});

document.getElementById('nacionalidad').addEventListener('click', function(){
	document.getElementById('nacionalidad').innerHTML = "Lugar de Nacimiento: Las Heras - Santa Cruz";
});

//cambio de foto

document.getElementById('foto').addEventListener('click', function(){
	document.getElementById('foto').src = "fotoCV.png";
});

