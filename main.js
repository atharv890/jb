function submit(){
username=document.getElementById("username").value;
localStorage.setItem(username,"username");
window.location="index1.html";


}