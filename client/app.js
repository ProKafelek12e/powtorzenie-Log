function block(){
    const upr = localStorage.getItem("upr")
    console.log(upr)
    const Cupr = JSON.parse(upr)
    if(Cupr.upr!="admin") window.location.href = "index.html"
}
async function log(){
    const log = document.getElementById("login").value
    const pass = document.getElementById("pass").value
    const data = await fetch(`${baseurl}/log/${log}/${pass}`)
    const json = await data.json()
    localStorage.setItem("upr",`${JSON.stringify(json[0])}`)
}