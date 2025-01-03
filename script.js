
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
const borderContainerElement = document.querySelector(".bordercontainer");

const inputHeader = document.querySelector(".inputheader");
achiveContainerHeader.style.fontWeight="300";

let saved =[];



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
    let deleteBtn = document.createElement("img");
    deleteBtn.setAttribute("class", "delete-btn");

    deleteBtn.src ="images/trash3-fill.svg";
    

    let storeText = document.createElement("p");
    storeText.innerText = noteText.value;
    borderCon.appendChild(storeHeader);
    borderCon.appendChild(storeText);
    borderCon.appendChild(deleteBtn);
    store.appendChild(borderCon);

    deleteBtn.addEventListener("click", (e)=>{
        if(e.target.tagName === "IMG"){
           e.target.parentElement.remove(); 
           updateLocalStorage() 
        }
        
    });

    updateLocalStorage()
    inputHeader.value = ""; 
    noteText.value = "";
    }
});




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
    let deleteBtn = document.createElement("img");
    deleteBtn.setAttribute("class", "delete-btn");

    deleteBtn.src ="images/trash3-fill.svg";
    

    borderCon.appendChild(storeHeader);
    borderCon.appendChild(storeText);
    borderCon.appendChild(deleteBtn);

    achiveTextCon.appendChild(borderCon);
    

    deleteBtn.addEventListener("click", (e)=>{
        if(e.target.tagName === "IMG"){
            e.target.parentElement.remove();
            saveAchive()
        }
    });

    achieveValueLength();

    

    saveAchive()
    inputHeader.value = ""; 
    noteText.value = "";

    }
    
});

function achieveValueLength(){
    let achiveLength = document.querySelectorAll(".bordercontainer2").length;
    console.log(achiveLength);
    let acrhiveContainerNew = document.querySelector(".achieve-container-header");
    acrhiveContainerNew.innerHTML=`Your Archive (${achiveLength})`
}



achiveContainerHeader.addEventListener("click", ()=>{
    achiveTextCon.classList.toggle("hide");
});

function updateLocalStorage(){
    localStorage.setItem("archive1", store.innerHTML)
}

function showUpdateStorage(){
    const savedData = localStorage.getItem("archive1");
    if (savedData) store.innerHTML = savedData;
    const deleteButtons = store.querySelectorAll(".delete-btn");
    deleteButtons.forEach(deleteBtn =>{
        deleteBtn.addEventListener("click", (e)=>{
            if(e.target.tagName === "IMG"){
               e.target.parentElement.remove(); 
               updateLocalStorage() 
            }
            
        });
    });
    
}

function saveAchive(){
    localStorage.setItem("acrhive2", achiveTextCon.innerHTML);
}

function showAchive(){
    const savedData = localStorage.getItem("acrhive2");
    if(savedData) achiveTextCon.innerHTML = savedData;
    const deleteButtons = achiveTextCon.querySelectorAll(".delete-btn");
    deleteButtons.forEach(deleteBtn =>{
        deleteBtn.addEventListener("click", (e)=>{
            if(e.target.tagName === "IMG"){
                e.target.parentElement.remove();
                saveAchive()
            }
        });
    });
}

showUpdateStorage();
showAchive();








