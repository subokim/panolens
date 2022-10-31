var panorama, viewer, scene, camera;

// Get Google Map API Key - https://developers.google.com/maps/documentation/javascript/get-api-key
//panorama = new PANOLENS.GoogleStreetviewPanorama( 'JmSoPsBPhqWvaBmOqfFzgA', 0 );
//,'AIzaSyAP7psgb_3x6cGqMDSQETHk7qZ7fCBYy0I'
//panorama = new PANOLENS.GoogleStreetviewPanorama('MbYbdJhoZNcXA3Fo5d3wUA');
panorama = new PANOLENS.ImagePanorama( './asset/pano_vr1.jpg' );

viewer = new PANOLENS.Viewer( { cameraFov : 60 } );
viewer.add( panorama );

camera = viewer.getCamera();
scene = viewer.getScene();
renderer = viewer.getRenderer();

//var gridHelper = new THREE.GridHelper( 20, 20, '#adff2f', '#ff7f50' );
//scene.add( gridHelper );

//camera rotate, lookAt
let targetPos = getVectorFromAngle(50, -5, 2000)
viewer.tweenControlCenter(targetPos);

panorama.addEventListener( 'click', function(){
  //camera.getWorldDirection(v);
  //const h_angle = THREE.Math.radToDeg( Math.atan2(v.x,v.z) );
  //const v_angle = THREE.Math.radToDeg( Math.atan2(v.y,v.x) );
  //console.log("vector=", offset);
  //console.log("h_angle=", h_angle, ", v_angle=", v_angle);
});