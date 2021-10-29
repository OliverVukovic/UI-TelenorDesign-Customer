var video = document.getElementById("video");


function playVideo() {
        video.play();
    } 





function dropDown(clickedRow) {
    var dropdownMenu = clickedRow.querySelector('ul')
    dropdownMenu.classList.toggle('visible')

}


// click listeners
let rows = document.querySelectorAll('.row')
console.log(rows);

rows.forEach(function(row){
    row.addEventListener('click', function(){
        dropDown(row)
    })
})