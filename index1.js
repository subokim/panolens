var container, panorama, viewer;

container = document.querySelector('#container');
panorama = new PANOLENS.ImagePanorama('./asset/pano_vr3.jpg');

viewer = new PANOLENS.Viewer({container: container});
viewer.add(panorama);