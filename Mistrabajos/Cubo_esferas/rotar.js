//Codigo JS para crear un cubo que rota con unas esferas en angulos
//Creado por Nicolas Rivera
var renderer;
var scene;
var camera;

	function init() {
		
		scene = new THREE.Scene();
//Tamaño y posicion de la escena
		camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
		renderer = new THREE.WebGLRenderer();
//Color de fondo de la pagina 
		renderer.setClearColor(0x000000, 1.0);
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.physicallyCorrectLights = true;
		renderer.gammaInput = true;
		renderer.gammaOutput = true;
		renderer.shadowMap.enabled = true;
		renderer.toneMapping = THREE.ReinhardToneMapping;
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
//Creacion y configuracion de la superficie, el tamaño y el color
		var planeGeometry = new THREE.PlaneGeometry(20, 20);
		var planeMaterial = new THREE.MeshLambertMaterial({color: 0xFFF701});
		var plane = new THREE.Mesh(planeGeometry, planeMaterial);
//Esta parte tiene la funcion de la rotacion del plano, pero mas que todo para la superficie de la figura
		plane.receiveShadow = true;
		plane.rotation.x=-0.5*Math.PI;
		plane.position.x=0;
		plane.position.y=-2;
		plane.position.z=0;

		scene.add(plane);
//Esta parte es la encargada de la creacion del cubo
		var cubeGeometry = new THREE.BoxGeometry(6, 4, 6);
//Esta parte es la encargada de la configuracion del cubo, el color, la opacidad, la transparencia
		var cubeMaterial = new THREE.MeshLambertMaterial({color:'red', transparent:true, opacity:1});
		var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
//Esta parte es la parte de la sombra, eso es lo que ejecuta la sombra del cubo
		cube.castShadow=true;

		scene.add(cube);
//Esta parte es la encargada de la posicion de la camara para X, Y, Z
		camera.position.x=15;
		camera.position.y=16;
		camera.position.z=13;
		camera.lookAt(scene.position);
//Esta parte esta encargada de la luz ambiente
		var ambient = new THREE.AmbientLight(0xffffff, 0.3);
		scene.add(ambient);
		var light = new THREE.DirectionalLight(0xffffff, 1, 100, 2);
		light.position.set(10, 20, 20);
		light.castShadow=true;
		scene.add(light);
		document.body.appendChild(renderer.domElement);

		addVertices(cube);
		render();
	}
//Esta parte esta encargada de las esferas con respecto a la creacion y color de ello
	function addVertices(mesh){
		var vertices = mesh.geometry.vertices;
		var vertexMaterial = new THREE.MeshPhongMaterial({color: 0x057FE});
//Esta parte esta encargada de las esferas de las esquinas, el tamaño de las esferas
		vertices.forEach(function(vertex){
			var vertexSphere = new THREE.SphereGeometry(0.15);
			var vertexMesh = new THREE.Mesh(vertexSphere, vertexMaterial);
			vertexMesh.position.copy(vertex); 
			scene.add(vertexMesh);
		});
	}
//Esta parte es la encargada de rotar la camara, ya que el cubo y la plataforma estan quietas
//Lo que se mueve es la camara
	function render(){

		var rotSpeed=0.01;
		camera.position.x=camera.position.x*Math.cos(rotSpeed) + camera.position.z*Math.sin(rotSpeed);
		camera.position.z=camera.position.z*Math.cos(rotSpeed) - camera.position.x*Math.sin(rotSpeed);
		camera.lookAt(scene.position);

		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}

	function handleResize(){
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	window.addEventListener("DOMContentLoaded", function(event){
		init();
	});

	window.addEventListener('resize', handleResize, false);

