
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

fetch('https://fortnite-api.com/v1/stats/br/v2?name=deyy')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var name = data.data.account.name
        var deaths = data.data.stats.all.overall.deaths
        var kd = data.data.stats.all.overall.kd
        var kills = data.data.stats.all.overall.kills
        var score = data.data.stats.all.overall.score
        var scorePerMatch = data.data.stats.all.overall.scorePerMatch
        var playersOutLived = data.data.stats.all.overall.playersOutlived
        var top3 = data.data.stats.all.overall.top3
        var top5 = data.data.stats.all.overall.top5
        var top10 = data.data.stats.all.overall.top10
        var top25 = data.data.stats.all.overall.top25
        var winrate = data.data.stats.all.overall.winrate
        var wins = data.data.stats.all.overall.wins
    });


