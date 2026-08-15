const readButtons = document.querySelectorAll(".read-btn");
const clearAll = document.getElementById("clearAll");

readButtons.forEach(button => {

    button.addEventListener("click", function(){

        this.innerHTML = "✓ Read";
        this.style.background = "#1877f2";
        this.disabled = true;

    });

});

clearAll.addEventListener("click", ()=>{

    document.getElementById("notificationList").innerHTML = `
        <h2 style="text-align:center;color:gray;margin-top:50px;">
            No Notifications
        </h2>
    `;

});