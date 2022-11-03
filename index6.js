var panorama, viewer, scene, camera, renderer, controls ;
var infobox, infotitle, infodesc, infotext;
var infospot1, infospot2, targetpos;

infotext = [
  { id: 1,
    title: '성균관 대성전 은행나무',
    desc: '공자가 은행나무 밑에서 제자들을 가르쳤다는 기록때문에,' +
          '조선시대 교육기관에는 전통적으로 은행나무를 심었다.' +
          '"승정원일기"에 따르면 이 은행나무를 심은 주인공은 중종때의 문신인 "윤탁"으로 전해진다.'},
  { id: 2,
    title: '성균관 느티나무',
    desc: '가을이 오니 느티나무의 단풍도 깊어진다.'}
];

infobox = document.getElementById("desc-container");
infotitle = document.getElementById("title");
infodesc = document.getElementById("description");


function toggleInfoBox(visible) {
  if(visible) {
    infobox.style.display = 'inline';
  } else {
    infobox.style.display = 'none';
  }
}

function showInfoText( infoid ) {
  infotitle.innerText = infotext[infoid].title;
  infodesc.innerText = infotext[infoid].desc;
}

// Get Google Map API Key - https://developers.google.com/maps/documentation/javascript/get-api-key
//panorama = new PANOLENS.GoogleStreetviewPanorama( 'JmSoPsBPhqWvaBmOqfFzgA', 0 );
//,'AIzaSyAP7psgb_3x6cGqMDSQETHk7qZ7fCBYy0I'
//panorama = new PANOLENS.GoogleStreetviewPanorama('MbYbdJhoZNcXA3Fo5d3wUA');
panorama = new PANOLENS.ImagePanorama( './asset/pano_vr3.jpg' );

targetpos = getVectorFromAngle(95, 0, 4000)
infospot1 = new PANOLENS.Infospot( 250, PANOLENS.DataImage.Info );
infospot1.position.copy(targetpos);
infospot1.addEventListener( 'click', function() {
  toggleInfoBox(true);
  showInfoText(0);
});
panorama.add(infospot1);

targetpos = getVectorFromAngle(-5, 0, 4000)
infospot2 = new PANOLENS.Infospot( 250, PANOLENS.DataImage.Info );
infospot2.position.copy(targetpos);
infospot2.addEventListener( 'click', function() {
  toggleInfoBox(true);
  showInfoText(1);
});
panorama.add(infospot2);
//panorama.addEventListener( 'progress', onProgress );
panorama.addEventListener( 'click', function(){
  //camera.getWorldDirection(v);
});

viewer = new PANOLENS.Viewer( { container: container, cameraFov : 70 } );
viewer.add( panorama );

camera = viewer.getCamera();
scene = viewer.getScene();
renderer = viewer.getRenderer();
controls = viewer.getControl();

//var gridHelper = new THREE.GridHelper( 20, 20, '#adff2f', '#ff7f50' );
//scene.add( gridHelper );

//camera rotate, lookAt
//targetpos = getVectorFromAngle(10, 0, 2000)
viewer.tweenControlCenterByObject(infospot1, 0);

controls.addEventListener( 'change', function() {
  toggleInfoBox(false);
} );

