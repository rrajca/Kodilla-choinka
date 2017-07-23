function drawTree(n) {
    for (var i = 0; i <= n; i++) {
        var star = "";
        for (var j = 1; j <= i; j++) {
            star += "*";
        }
        console.log(star);
    }
}