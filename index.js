let sidebar, cardlist, selected;

cardlist = document.getElementsByClassName("card");
selected = 0;
// sidebar.style.display ="none"; 

function toggleSideBar() {
    sidebar = document.getElementById("panel");
    if(sidebar.style.display == 'none') {
        sidebar.style.display = 'inline';
    } else {
        sidebar.style.display = 'none';
    }
}

function selectCard(id) {
    sidebar = document.getElementById("panel");
    if ( selected !== null ) cardlist[selected].classList.remove( 'selected' );
    selected = id;
    cardlist[id].classList.add( 'selected' );
    sidebar.style.display = "none";
}