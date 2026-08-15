// ===============================
// LIKE BUTTON
// ===============================

const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

if (likeBtn) {

    let count = 0;

    likeBtn.addEventListener("click", () => {

        count++;

        likeCount.innerText = count;

    });

}


// ===============================
// COMMENT SYSTEM
// ===============================

const commentBtn = document.getElementById("commentBtn");
const commentInput = document.getElementById("commentInput");
const commentList = document.getElementById("commentList");

if (commentBtn) {

    commentBtn.addEventListener("click", () => {

        if (commentInput.value.trim() !== "") {

            const div = document.createElement("div");

            div.className = "comment";

            div.innerText = commentInput.value;

            commentList.appendChild(div);

            commentInput.value = "";

        }

    });

}


// IMPORTANT:
// Create Post code yahan se DELETE kar diya hai.
// Create Post ka complete system upload.js handle karega.