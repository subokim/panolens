var panorama, panorama2, viewer, container, infospot;

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

let infoPos1 = angleToVector(80, 0, 3000);
let infoPos2 = angleToVector(87, 2, 4000);
let lookPos1 = angleToVector(80, 0, 3000);
let lookPos2 = angleToVector(45, 0, 3000);

var infospotPositions = [infoPos1, infoPos2];
var lookAtPositions = [lookPos1, lookPos2];

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( './asset/pano-vr1.jpg' );
viewer = new PANOLENS.Viewer( { output: 'console', container: container } );

panorama.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[0], 0 );
});

panorama2 = new PANOLENS.ImagePanorama( './asset/pano-vr4.jpg' );
panorama2.addEventListener( 'enter', function(){
  viewer.tweenControlCenter( lookAtPositions[1], 0 );
});

panorama.link( panorama2, infospotPositions[0] );
panorama2.link( panorama, infospotPositions[1] );
viewer.add( panorama, panorama2 );

viewer.update();