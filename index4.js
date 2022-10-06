var panorama, panorama2, viewer, container, infospot;

//panorama = new PANOLENS.GoogleStreetviewPanorama('8VRQVMxTcxwTvaa7T7jktA');
//panorama2 = new PANOLENS.GoogleStreetviewPanorama('EoRzuVjoP8ft_wF6A9pyxQ');

var lookAtPositions = [
  new THREE.Vector3(5000, 0, 0),
  new THREE.Vector3(1278.27, 732.65, 4769.19)
];

// new THREE.Vector3(4871.39, 1088.07, -118.41),
// new THREE.Vector3(1278.27, 732.65, 4769.19)

var infospotPositions = [
  new THREE.Vector3(-3000, 50, 3500),
  new THREE.Vector3(3000, -300, 3800)
];

//new THREE.Vector3(3136.06, 1216.30, -3690.14),
//new THREE.Vector3(3258.81, -295.50, 3771.13)

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( './asset/pano-vr1.jpg' );
panorama.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[0], 0 );
});

panorama2 = new PANOLENS.ImagePanorama( './asset/pano-vr4.jpg' );
panorama2.addEventListener( 'enter', function(){
  viewer.tweenControlCenter( lookAtPositions[1], 0 );
});

panorama.link( panorama2, infospotPositions[0] );
panorama2.link( panorama, infospotPositions[1] );

viewer = new PANOLENS.Viewer( { output: 'console', container: container } );
viewer.add( panorama, panorama2 );