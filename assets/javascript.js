//to get from local use localStorage.getitem('name')


// modal
var input = document.querySelector("#input")


//make array in local that will hold all recent searches
var searches = ['name1', 'name2']
localStorage.setItem('searchHistory', JSON.stringify(searches))
//JSON.stringify(searches)


const submitButton = document.querySelector("#submit");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");

submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    searchInput = document.getElementById('input');
    var chooseGame = document.querySelector(".button")
    console.log()
    callAPI(chooseGame.textContent, searchInput.value);
    searches = JSON.parse(localStorage.getItem('searchHistory'))
    searches.unshift(searchInput.value)

    //create function that dynamically pulls api data
    // populateModal(searchInput.value)

    localStorage.setItem('searchHistory', JSON.stringify(searches))


    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
})



//replace deyy with a variable for search input
// function getFort() {
//     fetch('https://fortnite-api.com/v1/stats/br/v2?name=deyy')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             for (var i = 0; i < data.length; i++) {
//                 var name = data.data.account.name
//                 var deaths = data.data.stats.all.overall.deaths
//                 var kd = data.data.stats.all.overall.kd
//                 var kills = data.data.stats.all.overall.kills
//                 var score = data.data.stats.all.overall.score
//                 var scorePerMatch = data.data.stats.all.overall.scorePerMatch
//                 var playersOutLived = data.data.stats.all.overall.playersOutlived
//                 var top3 = data.data.stats.all.overall.top3
//                 var top5 = data.data.stats.all.overall.top5
//                 var top10 = data.data.stats.all.overall.top10
//                 var top25 = data.data.stats.all.overall.top25
//                 var winrate = data.data.stats.all.overall.winrate
//                 var wins = data.data.stats.all.overall.wins

//             }
//         });
// }
// submitButton.addEventListener('click', getFort)

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

        });
}

// when clicked, button will dropdown
const menu = document.getElementById('dropdown');
menu.addEventListener('click', e => {
    e.stopPropagation();
    menu.classList.toggle('is-active')
})
document.addEventListener('click', () => {
    menu.classList.remove('is-active')
})
const dropItem = document.querySelectorAll(".dropdown-item")
const button = document.querySelector(".button")


dropItem.forEach(o => {
    o.addEventListener("click", () => {
        console.log(o)
        button.textContent = o.textContent
        menu.classList.remove('is-active')
    })
})

// function that calls the api for each video game
function callAPI(game, search) {
    console.log(typeof game)
    if (game == "Fortnite") {
        //call fortnire api
        console.log("something")
        fetch(`https://fortnite-api.com/v1/stats/br/v2?name=${search}`)
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

                }
                if (game === "Overwatch") {
                    //call overwatch api
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
                }


            })
    }
}
