let btn = document.querySelector("button")
let serrr = document.querySelector(".ser")
btn.onclick = function() {
    let chr = "1234567890zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP"
    let serl = '';
    let countOfSer = 10

    for (i = 0; i < countOfSer ; i ++) {
        serl += chr[Math.floor(Math.random() * chr.length)]
    }

    serrr.innerHTML = serl
}