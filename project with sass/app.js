const markAllBtn = document.querySelector(".mark-all")
let notifications = document.querySelectorAll(".unread")
const countBox = document.querySelector(".notification-count")
const msg = document.querySelector(".message")
const unReadDots = document.querySelectorAll(".notification-message")

countBox.innerText = notifications.length
 


// the mark all button function that turns all the notification boxes off when it is read 
markAllBtn.addEventListener("click", () => {
    notifications.forEach (function(notification) {
    notification.classList.remove("unread")

    unReadDots.forEach(function(dots)  {
     dots.classList.remove("red-dot")
    })    
})

    let newUnRead = document.querySelectorAll(".unread")
    countBox.innerText = newUnRead.length

})


// looping through the notification-boxes and removing the blue color to make it look like it has been read when each one is clicked at a time

for (let i = 0; i < notifications.length; i++){
    
    
    
    notifications[i].addEventListener('click', function(){
        
        notifications[i].classList.remove("unread")
        const newUnRead = document.querySelectorAll(".unread")
        countBox.innerText = newUnRead.length;
        unReadDots[i].classList.remove("red-dot");

    })
}



//
const index3 = notifications[3];

[... notifications].forEach((div , index) => { //looping through the div


    div.addEventListener("click", (event) => { //add a click event listener

        let clickedDiv = event.target;
        if (clickedDiv == index3){
            console.log(clickedDiv)
            msg.style.display = "block"
        }

    })
})