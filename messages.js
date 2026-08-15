

const users = document.querySelectorAll(".chat-user");
const messages = document.getElementById("messages");
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");

const chatName = document.getElementById("chatName");
const chatStatus = document.getElementById("chatStatus");
const chatImage = document.getElementById("chatImage");

const searchInput = document.getElementById("searchUser");

// Current User
let currentUser = "Sarah Khan";

// Chat Data
const chats = {

    "Sarah Khan": [
        {
            type: "received",
            text: "Hello Aqsa! 👋"
        },
        {
            type: "sent",
            text: "Hi Sarah 😊"
        },
        {
            type: "received",
            text: "How are you today?"
        }
    ],

    "Ali Ahmed": [
        {
            type: "received",
            text: "Assalam-o-Alaikum"
        },
        {
            type: "sent",
            text: "Walikum Assalam 😊"
        },
        {
            type: "received",
            text: "How is your project?"
        }
    ],

    "Hani": [
        {
            type: "received",
            text: "Welcome to SocialConnect!"
        },
        {
            type: "sent",
            text: "Thank you 😊"
        }
    ]

};

// Load Chat
function loadChat(user){

    messages.innerHTML = "";

    chats[user].forEach(function(msg){

        const div = document.createElement("div");

        div.className = "message " + msg.type;

        div.innerText = msg.text;

        messages.appendChild(div);

    });

    messages.scrollTop = messages.scrollHeight;

}

// Default Chat
loadChat(currentUser);

// User Switch
users.forEach(function(user){

    user.addEventListener("click", function(){

        users.forEach(function(item){

            item.classList.remove("active");

        });

        this.classList.add("active");

        currentUser = this.dataset.user;

        chatName.innerText = currentUser;

        chatStatus.innerText = this.dataset.status;

        chatImage.src = this.dataset.image;

        loadChat(currentUser);

    });

});

// Send Message
function sendMessage(){

    const text = messageInput.value.trim();

    if(text === "") return;

    chats[currentUser].push({

        type: "sent",
        text: text

    });

    loadChat(currentUser);

    messageInput.value = "";

}


// Button Click




// Enter Key
sendBtn.addEventListener("click", sendMessage);

messageInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});



// Search User
searchInput.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    users.forEach(function(user){

        const name = user.dataset.user.toLowerCase();

        if(name.includes(value)){

            user.style.display = "flex";

        }else{

            user.style.display = "none";

        }

    });

});