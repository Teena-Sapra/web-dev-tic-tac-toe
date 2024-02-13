function openPlayerConfig(event){
    const selectedPlayerId = event.target.dataset.playerid;
    editedPlayer=+selectedPlayerId; //+ converts string to int
    playerConfigOverlay.style.display="block";
    backdrop.style.display = "block";
}

function closePlayerConfig(){
    playerConfigOverlay.style.display = "none";
    backdrop.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorOutputElement.textContent="";
    formElement.firstElementChild.lastElementChild.value="";
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get("playername").trim();
    if(!enteredPlayername){
        event.target.firstElementChild.classList.add("error");
        errorOutputElement.textContent="Please enter a valid name!";
        return;
    }
    const updateElement = document.getElementById("player" + editedPlayer + "-data");
    updateElement.children[1].textContent=enteredPlayername;
    players[editedPlayer-1].name=enteredPlayername;
    closePlayerConfig();
}