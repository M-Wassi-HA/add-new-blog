let text = document.getElementById("text")
let disc = document.getElementById("disc")
let add = document.querySelector(".add")
let next = document.querySelector(".next")
var day = new Date(); // Correctly create a Date object
var date = day.getDate(); // Get the day of the month
var month = day.getMonth() + 1; // Get the month (0-based, so add 1)
var year = day.getFullYear(); // Get the full year
var time = day.getHours() - 12
var min = day.getMinutes() 







add.addEventListener("click",()=>{
    function myFun(){
        if(text.value == ""){
            alert("please enter a valid value")
        }else{
            let newElm = document.createElement("ul")
            newElm.innerHTML = `${"<b>Title: </b>"+text.value} <br> <br> ${"<b>Discription: </b>"+disc.value} <br> <br> ${"Date: " + date + ": " + month + ": " + year} <br> ${"Time: " + time + ": " + min}`
            next.appendChild(newElm)
            text.value = ""
            disc.value = ""

        }
    }
    myFun()
})

