function block(){
    const upr = localStorage.getItem("upr")
    const Pupr = JSON.parse(upr)
    if(localStorage.getItem(Pupr)!='admin') window.location.href = "/client/client/index.html" 
}