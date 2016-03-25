// API Video HTML
// Navigator.getUserMedia
// MediaStream API

var botonGrabar = document.getElementById("boton")
var video = document.getElementById("video")

var error = function(error) {
	console.log("Error:", error.name);
};


// Forma Basica para Usarla
// function grabar(){
// 	navigator.getUserMedia({ "video": true}, function (stream) {
// 		video.src = stream;
// 		video.play();
// 	}, error);
// };

// navigator.getUserMedia ( constraints, successCallback, errorCallback );

// constraints: Este parámetro es un objeto booleano ya sea de video o audio. Describe los tipos de multimedia soportados por el objeto MediaStream.
// { video: true }


// successCallBack: Este parámetro es una función con el objeto MediaStream que contenga la secuencia multimedia. En este caso, nuestra variable video.
// function(stream) {
	// video.src = stream;
	// video.play();
// }

// errorCallBack: : Este parámetro es una función que es llamada cuando hay un error. En nuestro caso, esta función la guardamos en la variable error
	// var error = function(error) {
	// 	console.log("Error:", error.name);
	// };


// Compatibilidad con otros Navegadores

function grabar(){
// Estándar
if(navigator.getUserMedia) {
	navigator.getUserMedia({ "video": true, "audio": true}, function (stream) {
		video.src = stream;
		video.play();
		video.onloadedmetadata = function(e) {
         // Haz algo con el video aquí.
         		console.log(e);
	      };
	     video.onloadedmetadata();
	}, error);
}

// prefijo WebKit
else if(navigator.webkitGetUserMedia) {
	navigator.webkitGetUserMedia({ "video": true, "audio": true}, function (stream){
		video.src = window.URL.createObjectURL(stream);
		video.play();
		video.onloadedmetadata = function(e) {
         // Haz algo con el video aquí.
         		console.log(e);
	      };
	     video.onloadedmetadata();
	}, error);
}

// prefijo Moz
else if(navigator.mozGetUserMedia) {
	navigator.mozGetUserMedia({ "video": true, "audio": true}, function (stream){
		video.src = window.URL.createObjectURL(stream);
		video.play();
		video.onloadedmetadata = function(e) {
         // Haz algo con el video aquí.
         		console.log(e);
	      };
	     video.onloadedmetadata();
	}, error);
}

// Navegadores no compatibles
else {
	alert("Tu navegador no es compatible con getUserMedia");
	}

};

botonGrabar.addEventListener("click", grabar);