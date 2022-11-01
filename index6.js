window.onload = function() {
  var el = document.getElementById("desc-container");
  el.onclick = toggleInfoBox;
}

function toggleInfoBox() {
  const infobox = document.getElementById('desc-container');
  if (infobox.style.display == 'inline') {
    infobox.style.display = 'none';
  }
}

var panorama, viewer, scene, camera;

// Get Google Map API Key - https://developers.google.com/maps/documentation/javascript/get-api-key
//panorama = new PANOLENS.GoogleStreetviewPanorama( 'JmSoPsBPhqWvaBmOqfFzgA', 0 );
//,'AIzaSyAP7psgb_3x6cGqMDSQETHk7qZ7fCBYy0I'
//panorama = new PANOLENS.GoogleStreetviewPanorama('MbYbdJhoZNcXA3Fo5d3wUA');
panorama = new PANOLENS.ImagePanorama( './asset/pano_vr3.jpg' );

//var targetPos = getVectorFromAngle(95, 0, 4000)
infospot = new PANOLENS.Infospot( 250, PANOLENS.DataImage.Info );
infospot.position.copy(getVectorFromAngle(95, 0, 4000)) ;
infospot.addEventListener( 'click', function(){
  document.getElementById("desc-container").style.display = 'inline';
});

panorama.add(infospot);
panorama.addEventListener( 'click', function(){
  //camera.getWorldDirection(v);
});

viewer = new PANOLENS.Viewer( { container: container, cameraFov : 70 } );
viewer.add( panorama );

viewer.enableReticle = true;
camera = viewer.getCamera();
scene = viewer.getScene();
renderer = viewer.getRenderer();

//var gridHelper = new THREE.GridHelper( 20, 20, '#adff2f', '#ff7f50' );
//scene.add( gridHelper );

//camera rotate, lookAt
var targetPos = getVectorFromAngle(95, 0, 2000)
viewer.tweenControlCenterByObject(infospot, 0);

