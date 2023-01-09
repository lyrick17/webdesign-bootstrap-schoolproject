let prevScroll = window.pageYOffset; // get YOffset immediately

window.onscroll = function() { // runs when scrolled
    let currentScroll = window.pageYOffset; // get current YOffset
    if (prevScroll > currentScroll) {
        document.getElementById("navbar").style.top = "0";
    } else { // window is scrolled downwards
        document.getElementById("navbar").style.top = "-85px";
    }
    prevScroll = currentScroll; 
}

