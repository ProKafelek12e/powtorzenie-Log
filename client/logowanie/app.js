async function log(){
    const inlog = document.getElementById("login")
    const inpass = document.getElementById("pass")
    const data = await fetch(`${baseurl}log/${inlog.value}/${inpass.value}`)
    const json = await data.json()
    const jso = JSON.stringify(json[0])
    console.log(jso)
    localStorage.setItem("upr",jso)
}