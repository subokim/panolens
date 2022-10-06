var panorama, panorama2, viewer, container, infospot;

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama('asset/pano-vr1.jpg');
panorama2 = new PANOLENS.ImagePanorama('asset/pano-vr2.jpg');

//panorama = new PANOLENS.GoogleStreetviewPanorama('8VRQVMxTcxwTvaa7T7jktA');
//panorama2 = new PANOLENS.GoogleStreetviewPanorama('EoRzuVjoP8ft_wF6A9pyxQ');
infospot = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospot.position.set( -100, -500, -5000 );
infospot.addHoverText( "The Story" );
infospot.addEventListener( 'click', function(){
  viewer.setPanorama( panorama2 );
} );

panorama.add( infospot );

viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama, panorama2 );

viewer.addUpdateCallback(function(){  
});