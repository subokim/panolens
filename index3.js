var panorama, panorama2, viewer, container, infospot, camera;

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama('asset/pano-vr1.jpg');
panorama2 = new PANOLENS.ImagePanorama('asset/pano-vr2.jpg');

//panorama = new PANOLENS.GoogleStreetviewPanorama('8VRQVMxTcxwTvaa7T7jktA');
//panorama2 = new PANOLENS.GoogleStreetviewPanorama('EoRzuVjoP8ft_wF6A9pyxQ');

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

function cameraRotate(ha, va) {
  let targetPos = angleToVector(ha, va, 1);
  // rotate offset back
  camera.position.x = - targetPos.x;
  camera.position.y = - targetPos.y;
  camera.position.z = - targetPos.z;
  console.log("camera pos =", camera.position);
  viewer.update();
}

function setInfospot(ha, va, radius, lpanorama) {
  let targetPos = angleToVector(ha, va, radius);

  // rotate offset back
  infospot = new PANOLENS.Infospot( 8, PANOLENS.DataImage.Info );

  infospot.position.x = targetPos.x;
  infospot.position.y = targetPos.y;
  infospot.position.z = targetPos.z;  
  console.log("infospot =", infospot.position);

  infospot.addHoverText( "Enter" );
  infospot.addEventListener( 'click', function(){
    viewer.setPanorama( lpanorama );
  } );

  return infospot;
}

panorama.add( setInfospot(-40, 0, 100, panorama2)) ;

viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama, panorama2 );

camera = viewer.getCamera();
cameraRotate(40,0);

viewer.addUpdateCallback(function(){  
});