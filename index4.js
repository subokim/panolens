var panorama, panorama2, viewer, container, infospot, scene, renderer;

// set objects' positions
let infoPos1 = getVectorFromAngle(180, 2, 4000);
let infoPos2 = getVectorFromAngle(90, 0, 4000);
let lookPos1 = getVectorFromAngle(180, 0, 4000);
let lookPos2 = getVectorFromAngle(90, 0, 4000);

var infospotPositions = [infoPos1, infoPos2];
var lookAtPositions = [lookPos1, lookPos2];

container = document.querySelector( '#container' );

//panorama = new PANOLENS.GoogleStreetviewPanorama('8VRQVMxTcxwTvaa7T7jktA');
panorama = new PANOLENS.ImagePanorama( './asset/road_vr2.jpeg' );
viewer = new PANOLENS.Viewer( { output: 'console', container: container } );

panorama.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[0], 0 );
});

//panorama2 = new PANOLENS.GoogleStreetviewPanorama('EoRzuVjoP8ft_wF6A9pyxQ');
panorama2 = new PANOLENS.ImagePanorama( './asset/road_vr3.jpg' );
panorama2.addEventListener( 'enter', function(){
  viewer.tweenControlCenter( lookAtPositions[1], 0 );
});

panorama.link( panorama2, infospotPositions[0] );
panorama2.link( panorama, infospotPositions[1] );
viewer.add( panorama, panorama2 );

camera = viewer.getCamera();
scene = viewer.getScene();
renderer = viewer.getRenderer();

var gridHelper = new THREE.GridHelper( 20, 20, '#adff2f', '#ff7f50' );
scene.add( gridHelper );

viewer.update();