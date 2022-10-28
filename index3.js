var panorama, panorama2, viewer, container, infospot, camera, scene, renderer;

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama('asset/pano-vr1.jpg');
panorama2 = new PANOLENS.ImagePanorama('asset/pano-vr2.jpg');

//panorama = new PANOLENS.GoogleStreetviewPanorama('8VRQVMxTcxwTvaa7T7jktA');
//panorama2 = new PANOLENS.GoogleStreetviewPanorama('EoRzuVjoP8ft_wF6A9pyxQ');

panorama.add( setInfospot(-40, 0, 100, panorama2)) ;

viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama, panorama2 );

camera = viewer.getCamera();
scene = viewer.getScene();
renderer = viewer.getRenderer();

var gridHelper = new THREE.GridHelper( 20, 20, '#adff2f', '#ff7f50' );
scene.add( gridHelper );

//camera rotate, lookAt
let targetPos = getVectorFromAngle(40, 0, 2000)
viewer.tweenControlCenter(targetPos);

viewer.addUpdateCallback(function(){  
});