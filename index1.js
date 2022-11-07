var container, panorama, viewer, title;

container = document.querySelector('#container');
title = document.getElementsByClassName('title');
panorama = new PANOLENS.ImagePanorama('./asset/pano_vr3.jpg');

viewer = new PANOLENS.Viewer({container: container});
viewer.add(panorama);
