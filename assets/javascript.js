//to get from local use localStorage.getitem('name')


// modal
var input = document.querySelector("#input")



onRefresh()
var gametype = 'ovw'


const submitButton = document.querySelector("#submit");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");

submitButton.addEventListener("click", (event) => {
    //event.preventDefault()
    searchInput = document.getElementById('input')
    var newObj = {name: searchInput.value, game: gametype}
    updateHistory(searchInput.value, gametype)
    //retreives histroy, adds new search, and updates storage
    modal.classList.add('is-active');
    populateTable()

});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
})



//replace deyy with a variable for search input
function getFort() {
    fetch('https://fortnite-api.com/v1/stats/br/v2?name=deyy')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
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

                name.textContent = data[i].user.login

                input.append(name);
            }
        });
}
submitButton.addEventListener('click', getFort)

//create variable for name and number //input format will be NAME#123456
function getAPI() {
    var url = ('https://ow-api.com/v1/stats/pc/us/Snapshot-11568/complete')

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            console.log(data)

            var compCard = data.competitiveStats.awards.cards
            var compMedals = data.competitiveStats.awards.medals
            var compBronze = data.competitiveStats.awards.medalsBronze
            var compSilver = data.competitiveStats.awards.medalsSilver
            var compGold = data.competitiveStats.awards.medalsGold
            var compGamesPlayed = data.competitiveStats.games.played
            var compGamesWon = data.competitiveStats.games.won
            
            
            var quickCards = data.quickPlayStats.awards.cards
            var quickMedals = data.quickPlayStats.awards.medals
            var quickBronze = data.quickPlayStats.awards.medalsBronze
            var quickSilver = data.quickPlayStats.awards.medalsSilver
            var quickGold = data.quickPlayStats.awards.medalsGold
            var quickGamesPlayed = data.quickPlayStats.games.played
            var quickGamesWon = data.quickPlayStats.games.won

//creates storage array if one does not exist already
function onRefresh(){
    if(!localStorage.getItem('searchHistory')){
      searches = []
      localStorage.setItem('searchHistory', JSON.stringify(searches))
      console.log('created array')
    }
    else{
      console.log('array exists')
      return;
    }
}
  //updates histroy in local storage, pass in new string
  //add dupe checking
function updateHistory(newEntry){
  searches = JSON.parse(localStorage.getItem('searchHistory'))
  searches.unshift(newEntry)
  localStorage.setItem('searchHistory', JSON.stringify(searches))
}

function populateTable(){
  tableContent = JSON.parse(localStorage.getItem('searchHistory'))
  //replace console log with loop that appends new elements to dom

  tableContent.forEach(element => console.log(element))

        });
}