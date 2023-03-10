let getImage=document.getElementById("getImage");
let setImage=document.getElementById("setImage");

function On(picture){
  getImage.src=picture;
 setImage.style.display="block";
  console.log("true");
}

function Off(){
 setImage.style.display="none";
 console.log("false");
}