// modal
const submitButton = document.querySelector("#submit");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");

submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
})

function printStats(profileName, leaderBoard, MMR, SoloComp, compRank, gamesWon, gamesLost, winRate) {

}