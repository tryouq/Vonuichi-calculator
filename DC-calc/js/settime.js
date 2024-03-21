
setInterval(function() {
    let max = document.getElementById('roomNumberSelect').value;
    let ploshad;
    for(let i=1; i<=parseInt(max); i++){
        ploshad = document.getElementById('surfaceAreaRoom ' + i).value;
        console.log(ploshad);}
    }, 3000);



