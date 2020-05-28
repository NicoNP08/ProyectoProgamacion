//Varibles para la Escena, la posicion de la camara y el render
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight, 0.1,1000);
var renderer = new THREE.WebGLRenderer();
//investigar webgl, dom, notaciones RGB 
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//Variables y configuraciones de forma y de color para la esfera
var geometry = new THREE.SphereGeometry( 3, 10, 10);
var material = new THREE.MeshNormalMaterial({color: 0xfe2d00});
var esfera = new THREE.Mesh(geometry, material);
//Variables y configuraciones de forma y de color para el cono
var geometry2 = new THREE.ConeBufferGeometry( 3, 5, 7);
var material2 = new THREE.MeshNormalMaterial({color: 0x057FE});
var cone = new THREE.Mesh(geometry2, material2);
scene.add( esfera, cone);
//Posicion de la camara
camera.position.z = 3;
camera.position.z = 30;
esfera.position.x=-5;
cone.position.x=5;
//Variable para la rotacion en eje X y eje Y del cono y la esfera
var animate = function(){
	requestAnimationFrame( animate );

	cone.rotation.x += 0.03;
	cone.rotation.y += 0.03;
	esfera.rotation.x += 0.05;
	esfera.rotation.y += 0.05;

	renderer.render( scene, camera);
};
animate();
