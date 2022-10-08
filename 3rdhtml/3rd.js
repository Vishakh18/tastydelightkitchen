let name= alert("This website contain cookies.");
console.log(name); 
 
function displaytime(){
      time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML= time;
}
setInterval (displaytime, 1000);