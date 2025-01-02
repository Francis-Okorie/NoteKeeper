
const createBtn = document.querySelector(".create-btn");
const createNote = document.querySelector(".create-note");
const noteText = document.querySelector("#note-text");
const note =document.querySelector(".note");
const inputBox = document.querySelector(".input");
const downTools = document.querySelector(".tools");
const saveNote = document.querySelector(".save-note");
const store = document.querySelector(".store");
const achiveBtn = document.querySelector(".achive")
const achiveContainer = document.querySelector(".achieve-container");
const achiveContainerHeader = document.querySelector(".achieve-container-header");
const achiveTextCon = document.querySelector(".achive-textcontent");
const errorText = document.querySelector(".error");
const border = document.querySelector(".border");
const deleteBin = document.querySelectorAll(".bin");

const inputHeader = document.querySelector(".inputheader");
achiveContainerHeader.style.fontWeight="300";

let saved =[];


window.addEventListener("load", loadFromLocalstorage);

createBtn.addEventListener("click", handleTextArea);

function handleTextArea(){
    note.classList.toggle("hide");
    noteText.classList.toggle("hide");
    inputBox.classList.add("hide");
    downTools.classList.add("hide");
}

noteText.addEventListener("click", ()=>{
    console.log(noteText.value);
    inputBox.classList.remove("hide");
    downTools.classList.remove("hide");
});

saveNote.addEventListener("click", ()=>{
    if(noteText.value === ""){
        
        errorText.classList.remove("hide");
        errorText.innerHTML="Note cannot be empty!!!"
        setTimeout(() => {
            errorText.style.display = 'none';
        }, 3000);
    }
    else{
    console.log(noteText.value)
    console.log(inputHeader.value)

    let borderCon = document.createElement("div");
    borderCon.setAttribute("class", "bordercontainer");
    let storeHeader = document.createElement("h1");
    storeHeader.innerHTML = inputHeader.value;
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");

    deleteBtn.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff5945" class="bi bi-trash-fill" viewBox="0 0 16 16">
    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
    </svg>`
    

    let storeText = document.createElement("p");
    storeText.innerText = noteText.value;
    borderCon.appendChild(storeHeader);
    borderCon.appendChild(storeText);
    borderCon.appendChild(deleteBtn);
    store.appendChild(borderCon);

    deleteBtn.addEventListener("click", ()=>{
        const parentElement = deleteBtn.parentElement;
        parentElement.remove();
        saveToLocalstorage()
        
        
    });

     
    saveToLocalstorage()
    
    inputHeader.value = ""; 
    noteText.value = "";
    }
});

function updateSavedItem(){
    const notes = store.querySelectorAll(".bordercontainer");
    notes.forEach(notee =>{
        const header = notee.querySelector("h1").innerHTML;
        const text = notee.querySelector("p").innerHTML;

        saved.push({
            header:header,
            text:text
        })
    });

    console.log(saved.header)
    
}


achiveBtn.addEventListener("click", ()=>{
    if(noteText.value === ""){
        
        errorText.classList.remove("hide");
        errorText.innerHTML="Note cannot be empty!!!";
        setTimeout(() => {
            errorText.style.display = 'none';
        }, 3000);
    }
    else {
    
    let borderCon = document.createElement("div");
    borderCon.setAttribute("class", "bordercontainer2");
    let storeHeader = document.createElement("h1");
    storeHeader.innerHTML = inputHeader.value;
    achiveTextCon.appendChild(storeHeader);

    let storeText = document.createElement("p");
    storeText.innerText = noteText.value;
    achiveTextCon.appendChild(storeText);
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");

    deleteBtn.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff5945" class="bi bi-trash-fill" viewBox="0 0 16 16">
    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
    </svg>`

    borderCon.appendChild(storeHeader);
    borderCon.appendChild(storeText);
    borderCon.appendChild(deleteBtn);

    achiveTextCon.appendChild(borderCon);
    

    

    deleteBtn.addEventListener("click", ()=>{
        const parentElement = deleteBtn.parentElement;
        parentElement.remove();
        achieveValueLength();
        saveToLocalstorage()
        
    });

    achieveValueLength();

    saveToLocalstorage()


    inputHeader.value = ""; 
    noteText.value = "";

    



    }

    
    
});

function achieveValueLength(){
    let achiveLength = document.querySelectorAll(".bordercontainer2").length;
    console.log(achiveLength);
    

}



achiveContainerHeader.addEventListener("click", ()=>{
    achiveTextCon.classList.toggle("hide");
    
    
});


function saveToLocalstorage() {
    const savedStoreElement = [];
    const savedAchiveElement = [];

    document.querySelectorAll(".bordercontainer").forEach(item => {
        const header = item.querySelector("h1")?.innerText || "";
        const text = item.querySelector("p")?.innerText || "";
        


        savedStoreElement.push({ header, text});
    });

    document.querySelectorAll(".bordercontainer2").forEach(item => {
        const header = item.querySelector("h1")?.innerText || "";
        const text = item.querySelector("p")?.innerText || "";
        

       

        savedAchiveElement.push({ header, text});
    });

    localStorage.setItem("storeitem", JSON.stringify(savedStoreElement));
    localStorage.setItem("achiveitem", JSON.stringify(savedAchiveElement));
}



function loadFromLocalstorage() {
    const storeData = JSON.parse(localStorage.getItem("storeitem")) || [];
    const achiveData = JSON.parse(localStorage.getItem("achiveitem")) || [];

    store.innerHTML = ""; // Clear existing elements
    achiveTextCon.innerHTML = "";

    storeData.forEach(note => {
        const borderCon = document.createElement("div");
        borderCon.setAttribute("class", "bordercontainer");

        const storeHeader = document.createElement("h1");
        storeHeader.innerText = note.header;

        const storeText = document.createElement("p");
        storeText.innerText = note.text;

        borderCon.appendChild(storeHeader);
        borderCon.appendChild(storeText);

        

        store.appendChild(borderCon);
    });

    achiveData.forEach(note => {
        const borderCon = document.createElement("div");
        borderCon.setAttribute("class", "bordercontainer2");

        const storeHeader = document.createElement("h1");
        storeHeader.innerText = note.header;

        const storeText = document.createElement("p");
        storeText.innerText = note.text;

        borderCon.appendChild(storeHeader);
        borderCon.appendChild(storeText);

       

        achiveTextCon.appendChild(borderCon);

        
        achiveContainerHeader.innerHTML= `Your Achive (${achiveData.length})`

    });
}





