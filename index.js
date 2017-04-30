'use strict';

function insert_claps(str) {
    let arr = str.split(" ").filter(function(c){return c});
    return arr.join(" 👏 ");
}

function emphasize() {
    let sentence = document.getElementById("inputtext").value;
    let emphasized = insert_claps(sentence);
    document.getElementById("outputtext").innerHTML = emphasized;
}
