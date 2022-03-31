let myName=document.querySelector("#myName")
let ad = prompt("Adınızı Giriniz")
myName.innerHTML=`${ad}`


    let todayDate = new Date();
    let day = todayDate.toLocaleDateString('tr', { weekday: 'long' })
    let hour = todayDate.getHours();
    let minute=todayDate.getMinutes();
    let second=todayDate.getSeconds();
    let myClock=document.querySelector("#myClock")

    myClock.innerHTML=`${hour}:${minute}:${second} ${day}`


