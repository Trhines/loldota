//to get from local use localStorage.getitem('name')


// modal


//make array in local that will hold all recent searches
var searches = ['name1', 'name2']
localStorage.setItem('searchHistory', JSON.stringify(searches))
//JSON.stringify(searches)


const submitButton = document.querySelector("#submit");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");



submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    getOw()
    searchInput = document.getElementById('input')
    searches = JSON.parse(localStorage.getItem('searchHistory'))
    searches.unshift(searchInput.value)


    localStorage.setItem('searchHistory', JSON.stringify(searches))
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
})


//replace deyy with a variable for search input
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

  function getOw() {
    var url = ('https://ow-api.com/v1/stats/pc/us/Snapshot-11568/complete')

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            console.log(data)
        var myList = document.getElementById("list")
        var newItem = document.createElement("compCard")
          myList.appendChild(newItem)


        var compCard = data.competitiveStats.awards.cards
            document.getElementById("list" ).innerText ="cards: " + compCard
            var compMedals = data.competitiveStats.awards.medals
            document.getElementById("list").innerHTML = "medals: " + compMedals
            var compBronze = data.competitiveStats.awards.medalsBronze
            //document.getElementById("compBronze").innerHTML = "bronze medals: " + compBronze
            
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
 
          })}


 

  