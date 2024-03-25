function updateClock(){
    let newObject=new Date()


    let hours=newObject.getHours()
    let minutes=newObject.getMinutes()
    let seconds=newObject.getSeconds()
    console.log(`${hours} : ${minutes} : ${seconds} `);

    let hourRotation=(30*hours+minutes/2)
    let minuteRotation=(6*minutes+seconds/3)
    let secondRotation=(6*seconds)

    let hourHand=document.querySelector(".hour")
    let minuteHand=document.querySelector(".minute")
    let secondHand=document.querySelector(".second")

    hourHand.style.transform=`rotate(${hourRotation}deg)`
    minuteHand.style.transform=`rotate(${minuteRotation}deg)`
    secondHand.style.transform=`rotate(${secondRotation}deg)`

}
updateClock()
setInterval(updateClock,1000)