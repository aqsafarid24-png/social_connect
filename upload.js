const postInput = document.getElementById("postInput");
const photoInput = document.getElementById("photoInput");
const videoInput = document.getElementById("videoInput");
const mediaPreview = document.getElementById("mediaPreview");
const postBtn = document.getElementById("postBtn");
const feed = document.getElementById("feed");

let selectedMedia = null;
let mediaType = null;


// ===============================
// PHOTO SELECT
// ===============================

photoInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    selectedMedia = file;
    mediaType = "image";

    const imageURL = URL.createObjectURL(file);

    mediaPreview.innerHTML = `
        <img src="${imageURL}" class="preview-image">
    `;
});


// ===============================
// VIDEO SELECT
// ===============================

videoInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    selectedMedia = file;
    mediaType = "video";

    const videoURL = URL.createObjectURL(file);

    mediaPreview.innerHTML = `
        <video class="preview-video" controls>
            <source src="${videoURL}">
        </video>
    `;
});


// ===============================
// CREATE POST
// ===============================

postBtn.addEventListener("click", function () {

    const text = postInput.value.trim();

    // Nothing selected
    if (text === "" && !selectedMedia) {

        alert("Please write something or select a photo/video.");

        return;
    }


    // ===============================
    // CREATE ONE POST CARD
    // ===============================

    const post = document.createElement("div");

    post.className = "post-card";


    // ===============================
    // MEDIA
    // ===============================

    let mediaHTML = "";

    if (selectedMedia && mediaType === "image") {

        const imageURL = URL.createObjectURL(selectedMedia);

        mediaHTML = `
            <img
                src="${imageURL}"
                class="post-image"
                alt="Uploaded Image">
        `;
    }


    if (selectedMedia && mediaType === "video") {

        const videoURL = URL.createObjectURL(selectedMedia);

        mediaHTML = `
            <video
                class="post-video"
                controls>

                <source src="${videoURL}">
                
            </video>
        `;
    }


    // ===============================
    // COMPLETE POST
    // ===============================

    post.innerHTML = `

        <div class="post-header">

            <img
                src="/images/profile.jfif"
                alt="Profile">

            <div>

                <h3>Hani</h3>

                <small>Just now</small>

            </div>

        </div>


        ${
            text
                ? `<p class="post-text">${text}</p>`
                : ""
        }


        ${mediaHTML}


        <!-- POST ACTIONS -->

        <div class="post-actions">

            <button class="new-like-btn">

                <i class="fa-regular fa-heart"></i>

                Like
                (<span class="new-like-count">0</span>)

            </button>


            <button class="new-comment-btn">

                <i class="fa-regular fa-comment"></i>

                Comment

            </button>


            <button class="new-share-btn">

                <i class="fa-solid fa-share"></i>

                Share

            </button>

        </div>


        <!-- COMMENT SECTION -->

        <div class="new-comment-section">

            <input
                type="text"
                class="new-comment-input"
                placeholder="Write a comment...">

            <button class="new-comment-submit">
                Comment
            </button>

            <div class="new-comment-list"></div>

        </div>

    `;


    // ===============================
    // LIKE
    // ===============================

    const likeButton =
        post.querySelector(".new-like-btn");

    const likeCount =
        post.querySelector(".new-like-count");

    let likes = 0;

    likeButton.addEventListener("click", function () {

        likes++;

        likeCount.innerText = likes;

        likeButton.querySelector("i").classList.remove("fa-regular");

        likeButton.querySelector("i").classList.add("fa-solid");

    });


    // ===============================
    // COMMENT
    // ===============================

    const commentButton =
        post.querySelector(".new-comment-btn");

    const commentSection =
        post.querySelector(".new-comment-section");

    const commentInput =
        post.querySelector(".new-comment-input");

    const commentSubmit =
        post.querySelector(".new-comment-submit");

    const commentList =
        post.querySelector(".new-comment-list");


    // Show comment box

    commentButton.addEventListener("click", function () {

        commentSection.style.display = "block";

        commentInput.focus();

    });


    // Add comment

    commentSubmit.addEventListener("click", function () {

        const commentText =
            commentInput.value.trim();

        if (commentText === "") return;


        const comment =
            document.createElement("div");

        comment.className = "comment";

        comment.innerHTML = `
            <strong>Aqsa Shah:</strong>
            ${commentText}
        `;


        commentList.appendChild(comment);

        commentInput.value = "";

    });


    // Allow Enter key

    commentInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            commentSubmit.click();

        }

    });


    // ===============================
    // SHARE
    // ===============================

    const shareButton =
        post.querySelector(".new-share-btn");


    shareButton.addEventListener("click", function () {

        const shareText =
            text || "Check out this post on SocialConnect!";


        if (navigator.clipboard) {

            navigator.clipboard.writeText(shareText);

            alert("Post text copied! You can share it.");

        } else {

            alert("Post shared successfully!");

        }

    });


    // ===============================
    // ADD POST TO FEED
    // ===============================

    feed.prepend(post);


    // ===============================
    // CLEAR FORM
    // ===============================

    postInput.value = "";

    photoInput.value = "";

    videoInput.value = "";

    mediaPreview.innerHTML = "";

    selectedMedia = null;

    mediaType = null;

});