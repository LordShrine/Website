function count() {
    var point3bl = document.getElementById('p3bl').value;
    var point2bl = document.getElementById('p2bl').value;
    var point1bl = document.getElementById('p1bl').value;
    if (point3bl < 0 || point2bl < 0 || point1bl < 0) alert("The number can't be negative")
    else {
        var allpointbl = point3bl * 3 + point2bl * 2 + point1bl * 1;
        document.getElementById('resultbl').innerHTML = allpointbl;
    }
}