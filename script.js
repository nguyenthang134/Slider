/**
 * Created by thang on 6/30/17.
 */
function image(src){
        this.src = src;
        document.getElementById("img").setAttribute("src",src);
}

var count = 0;
var img = ["a.jpg","508374604.jpg","background-1247931_960_720.jpg","clouds_in_sky_background_192377.jpg","images.jpeg"];

function slider(){
        image(img[count%5]);
        count++;
        console.log(count);
}

function start() {
    slider();
    setTimeout(start,1000);
}

start();