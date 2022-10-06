var panorama, viewer, scene, camera;

// Get Google Map API Key - https://developers.google.com/maps/documentation/javascript/get-api-key
//panorama = new PANOLENS.GoogleStreetviewPanorama( 'JmSoPsBPhqWvaBmOqfFzgA', 0 );
//,'AIzaSyAP7psgb_3x6cGqMDSQETHk7qZ7fCBYy0I'
//panorama = new PANOLENS.GoogleStreetviewPanorama('MbYbdJhoZNcXA3Fo5d3wUA');
panorama = new PANOLENS.ImagePanorama( './asset/pano-vr2.jpg' );
const lookPos = new THREE.Vector3( 1, 0, -5 );

viewer = new PANOLENS.Viewer( { cameraFov : 60 , initialLookAt : lookPos } );
viewer.add( panorama );

camera = viewer.getCamera();
scene = viewer.getScene();
renderer = viewer.getRenderer();

//Rotate the panoram by angle (horizontal_angle, vertical_angle)
//horizontal : positive = right (0~360)
//vertical : positive = up (-180 ~ 180)
function panoRotate(horizontal_angle, vertical_angle) {
  panorama.rotation.y = (-(Math.PI * 2 * horizontal_angle)/360); //horizontal
  panorama.rotation.x = (-(Math.PI * 2 * vertical_angle)/360); //vertical
}

function cameraRotate(horizontal_angle, vertical_angle) {
  camera.rotation.y = (-(Math.PI * 2 * horizontal_angle)/360); //horizontal
  camera.rotation.x = (-(Math.PI * 2 * vertical_angle)/360); //vertical
}

//camera.updateProjectionMatrix();
//panoRotate(100,5);
//cameraRotate(100,5);

function animate() {
  requestAnimationFrame(animate);

  //panorama.rotation.x += 0.01;
  //panorama.rotation.y += 0.01;
  //panorama.rotation.z += 0.01;

  camera.rotation.x += 0.01; //horizontal
  //camera.position.y += 0.01; //vertical
  //camera.rotation.z += 0.01;
  //camera.updateProjectionMatrix();
  
  renderer.render(scene, camera);
}

animate();

/* panorama.addEventListener( 'click', function(){
    console.log(Math.PI);
    console.log(rad);
  }); */