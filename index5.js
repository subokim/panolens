var panorama, viewer, scene, camera;

// Get Google Map API Key - https://developers.google.com/maps/documentation/javascript/get-api-key
//panorama = new PANOLENS.GoogleStreetviewPanorama( 'JmSoPsBPhqWvaBmOqfFzgA', 0 );
//,'AIzaSyAP7psgb_3x6cGqMDSQETHk7qZ7fCBYy0I'
//panorama = new PANOLENS.GoogleStreetviewPanorama('MbYbdJhoZNcXA3Fo5d3wUA');
panorama = new PANOLENS.ImagePanorama( './asset/pano-vr2.jpg' );

viewer = new PANOLENS.Viewer( { cameraFov : 60 } );
viewer.add( panorama );

camera = viewer.getCamera();
scene = viewer.getScene();
renderer = viewer.getRenderer();

var gridHelper = new THREE.GridHelper( 20, 20 );
scene.add( gridHelper );

//Rotate the panoram by angle (horizontal_angle, vertical_angle)
//horizontal : positive = right (0~360)
//vertical : positive = up (-180 ~ 180)
//function panoRotate(horizontal_angle, vertical_angle) {
//  panorama.rotation.y = (-(Math.PI * horizontal_angle)/180); //horizontal
//  panorama.rotation.x = (-(Math.PI * vertical_angle)/180); //vertical
//}

function angleToVector(ha, va, radius) {
  //make unit vector(x,y,z)
  let offset = new THREE.Vector3();
  let theta = THREE.Math.degToRad(ha); //horizontal
  let phi = THREE.Math.degToRad(va); //vertical

  let vz = new THREE.Vector3(0,0,1); // start point
  let vx = new THREE.Vector3(Math.tan(theta),0,0);
  let vs = Math.sqrt( Math.tan(theta) * Math.tan(theta) + 1); //slop length by x and z;
  let vy = new THREE.Vector3(0, Math.tan(phi) * vs ,0);

  offset.add(vz); //start point
  offset.add(vx); // add horizontal angle
  offset.add(vy); // add vertical angle
  offset.normalize();

  //multiply radius to unit vector
  offset.x = radius * Math.cos(phi) * Math.sin(theta);
  offset.y = radius * Math.sin(phi);
  offset.z = radius * Math.cos(phi) * Math.cos(theta);

  return offset;
}

//camera rotate
let lookAtPos = angleToVector(200, 5, 2000);
viewer.tweenControlCenter(lookAtPos);

panorama.addEventListener( 'click', function(){
  //camera.getWorldDirection(v);
  //const h_angle = THREE.Math.radToDeg( Math.atan2(v.x,v.z) );
  //const v_angle = THREE.Math.radToDeg( Math.atan2(v.y,v.x) );
  //console.log("vector=", offset);
  //console.log("h_angle=", h_angle, ", v_angle=", v_angle);
});