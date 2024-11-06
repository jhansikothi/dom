/* Task :  1. click a button and show the content with 60px fontSize and bgColor red
 and bordeRadius 50% */ 

let k=document.getElementById("p");
let a=document.getElementById("btn");
a.onclick=function  (){
a.style.backgroundColor="red"
a.style.fontSize="60px"
a.style.borderRadius="50%"
console.log(a)
}
/*2. click the button and display three images on clicking the button ft img should be of 
border radius 30px , second img should be border radius 100px , 
third img should be of borderradius 50%*/
function b()
{
    let images=document.getElementById("div");
    let button=document.getElementById("button2");
    button.style.width="100px"
    button.style.backgroundColor="red"
    images.innerHTML=
    `<img id="i1" src="https://wallpapers.com/images/hd/greenery-background-abj04ct0og086pp4.jpg" width="200px"><img  id="i2" src="https://static.vecteezy.com/system/resources/thumbnails/050/635/082/small_2x/beautiful-peaceful-landscape-path-in-the-old-green-park-photo.jpg" width="200px"><img  id="i3" src="https://wallpapers.com/images/hd/greenery-background-abj04ct0og086pp4.jpg" width="200px">`

let image1=document.getElementById("i1")
image1.style.borderRadius="30px"
let image2=document.getElementById("i2")
image2.style.borderRadius="100px"
let image3=document.getElementById("i3")
image3.style.borderRadius="50%"

}



