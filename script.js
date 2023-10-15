const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");
const inputJob = document.querySelector("#job");
const addButton = document.querySelector("#add");
const initialDropzone = document.querySelector(".initial");
const board = document.querySelectorAll(".board");

addButton.addEventListener("click", () => {
    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card");
    divCard.setAttribute("draggable", "true");

    const divStatus = document.createElement("div");
    divStatus.setAttribute("class", "status");

    const divContent = document.createElement("div");
    divContent.setAttribute("class", "content");
    divContent.innerHTML = inputJob.value;

    divCard.appendChild(divStatus);
    divCard.appendChild(divContent);

    initialDropzone.appendChild(divCard);

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("dragstart", dragstart);
        card.addEventListener("drag", drag);
        card.addEventListener("dragend", dragend);
    })

    function dragstart(){
        dropzones.forEach(dropzone => dropzone.classList.add("highlight"))
        this.classList.add("is-dragging");
    }
    function drag(){
       
    }
    function dragend(){
        dropzones.forEach(dropzone => dropzone.classList.remove("highlight"))
        this.classList.remove("is-dragging");
        dropzones.forEach(dropzone => {
            dropzone.classList.remove("over");
        })
    }

    inputJob.value = "";
});

dropzones.forEach(dropzone => {
    dropzone.addEventListener("dragenter", dragenter);
    dropzone.addEventListener("dragover", dragover);
    dropzone.addEventListener("dragleave",dragleave);
    dropzone.addEventListener("drop", drop);
})

function dragenter(){
    
}

function dragover(){
    this.classList.add("over");
    const cardBeingDragged = document.querySelector(".is-dragging");
    this.appendChild(cardBeingDragged);
}

function dragleave(){
    this.classList.remove("over");
}

function drop(){
    this.classList.remove("over");
}



