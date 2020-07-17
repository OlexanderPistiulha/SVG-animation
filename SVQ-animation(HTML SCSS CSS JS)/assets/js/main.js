let svg = document.querySelectorAll(".svg path");

for (let i = 0; i < svg.length; i++) {
    console.log("letter" + i + "  " + svg[i].getTotalLength());

}