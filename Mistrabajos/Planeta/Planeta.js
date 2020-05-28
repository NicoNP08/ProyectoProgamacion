//Varibles para la Escena, la posicion de la camara y el render
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1,1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//Variables y configuraciones de forma y de color para la esfera
var geometry = new THREE.SphereGeometry( 8, 32, 32);
var loader = new THREE.TextureLoader();
var texture = loader.load("planeta2.jpg");
var material = new THREE.MeshBasicMaterial({map: texture, shininess: 80, specularMap: texture, normalMap: texture});
var esfera = new THREE.Mesh(geometry, material);
//Variables y configuraciones de forma y de color para el plano
var geometry2 = new THREE.PlaneGeometry( 19, 12, 15);
var plano = new THREE.Mesh(geometry2, material);
scene.add( esfera, plano);
//Luz ambiente
		var ambient = new THREE.AmbientLight(0xffffff, 0.3);
		scene.add(ambient);
		var light = new THREE.DirectionalLight(0xffffff, 1, 100, 2);
		light.position.set(10, 20, 20);
		light.castShadow=true;
		scene.add(light);
		document.body.appendChild(renderer.domElement);

//Posicion de la camara
camera.position.z = 30;
esfera.position.x=-15;
plano.position.x=15;
//Variable para la rotacion en eje X y eje Y de la esfera
var animate = function(){
	requestAnimationFrame( animate );
	esfera.rotation.x += 0;
	esfera.rotation.y += -0.01;
};
animate();
function render(){
	requestAnimationFrame(render);
	renderer.render(scene,camera);
}
render();