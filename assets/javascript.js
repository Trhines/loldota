//to get from local use localStorage.getitem('name')


// modal
var input = document.querySelector("#input")



onRefresh()
populateTable()
var gametype = 'ovw'


const submitButton = document.querySelector("#submit");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");

submitButton.addEventListener("click", (event) => {
    //event.preventDefault()
    searchInput = document.getElementById('input')
    var displayed = false
    updateHistory(searchInput.value, gametype, displayed)
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


//create variable for name and number //input format will be NAME#123456

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
        })


//creates storage array if one does not exist already
function onRefresh(){
    if(!localStorage.getItem('searchHistory')){
      searches = []
      localStorage.setItem('searchHistory', JSON.stringify(searches))
      console.log('created array')
    }
    else{
      console.log('array exists')

      data = JSON.parse(localStorage.getItem('searchHistory'))

      data.forEach(element => {
        element.shown = false
        console.log(data)
      })
    }
}
  //updates histroy in local storage, pass in new string
  //add dupe checking
function updateHistory(name, game, shown){
  searches = JSON.parse(localStorage.getItem('searchHistory'))
  var newObj = {name, game, shown}
  searches.unshift(newObj)
  localStorage.setItem('searchHistory', JSON.stringify(searches))
}


function populateTable(){
  tableContent = JSON.parse(localStorage.getItem('searchHistory'))
  //replace console log with loop that appends new elements to dom
  var table = document.getElementById('tableBody')
  

  tableContent.forEach(element => {
    if (element.shown == false){
    var newRow = document.createElement("TR")
    var tableName = document.createElement("TD")
    var tableGame = document.createElement("TD")
    table.appendChild(newRow)
    newRow.appendChild(tableName)
    tableName.textContent = element.name
    newRow.appendChild(tableGame)
    tableGame.textContent = element.game
    }
  })
}

function myFuncton(){
  console.log("yo")
}

