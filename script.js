

var btn = document.getElementsByClassName("accordion");
var  i;
for (i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }

}
