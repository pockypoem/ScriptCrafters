document.querySelector("form[name=commentForm]").onsubmit = function (event) {
    const commentList = document.getElementById("commentList");
    const comment = document.getElementById("comment").value;
    const from = document.getElementById("from").value;

    const commentItem = document.createElement("p");
    commentItem.textContent = `${comment} - ${from}`;
    commentList.appendChild(commentItem);

    document.querySelector("form[name=commentForm]").reset();

    event.preventDefault();
}