previousInfo = document.location.search.split('=')[1]
gameType = previousInfo.split('/')[0]
userOne = previousInfo.split('/')[1]

console.log(userOne)
console.log(gameType)


const firstCard = document.getElementById("first")
const secondCard = document.getElementById("second")
callAPI(gameType, userOne, firstCard)


const submitButton = document.querySelector("#submit");
submitButton.addEventListener('click', function(event){
    event.preventDefault()
    while (secondCard.firstChild){
        secondCard.removeChild(secondCard.lastChild)
      }
    var searchInput = document.getElementById('input');
    callAPI(gameType, searchInput.value.trim(), secondCard)
})

if(secondCard.firstChild){
    CompareStats()
}


function callAPI(game, search, card) {
    console.log('firing')
    if (game == "Fortnite" ) {
        console.log('game == Fortnite')

        fetch(`https://fortnite-api.com/v1/stats/br/v2?name=${search}`)
            .then(function (response) {
                if (response.status !== 200) {
                    alert("error." + response.status);
                    location.reload()
                  } else {
                  }
                  return response.json();
            })
            .then(function (data) {
                console.log(data)
                function List(elem,data){
                  console.log(elem)
                 console.log(data)
                  for( let i=0; i <data.length; i++){
                    var li = document.createElement("li");
                    li.textContent= data[i];
                    elem.appendChild(li);
                  }
                  CompareStats()
                }

                
                List(card,[names = "name: " + data.data.account.name,
                             deaths= "Deaths: " + data.data.stats.all.overall.deaths,
                             kd = "k/d: " + data.data.stats.all.overall.kd,
                             kills = "kills: " + data.data.stats.all.overall.kills,
                             score = "Score: " + data.data.stats.all.overall.score,
                             scorePerMatch = "Score Per Match: " + data.data.stats.all.overall.scorePerMatch,
                             playersOutLived = "Players OutLived: " + data.data.stats.all.overall.playersOutlived,
                             top3 = "Top 3: " + data.data.stats.all.overall.top3,
                             top5 = "Top 5: " + data.data.stats.all.overall.top5,
                             top10 = "Top 10: " + data.data.stats.all.overall.top10,
                             top25 = "Top 25: " + data.data.stats.all.overall.top25,
                             winrate = "WinRate: " + data.data.stats.all.overall.winrate,
                             wins = "Overll Wins: " + data.data.stats.all.overall.wins
                           ])
                           console.log(winrate)
                        });
                            
                          }

                          else if (game == "Overwatch") {
                            var user =  search.replace('#' ,'-' ) 
                            //call overwatch api
                            

                        fetch(`https://ow-api.com/v1/stats/pc/us/${user}/complete`)
                            .then(function (response) {
                                if (response.status !== 200) {
                                    alert("error." + response.status);
                                    location.reload()
                                  } else {
                                  }
                                  return response.json();
                            })
                            .then(function (data) {
                            
                            function List(elem,data){
                                
                                for( let i=0; i <data.length; i++){
                                const li = document.createElement("li");
                                li.textContent= data[i];
                                elem.appendChild(li);
                                }
                                CompareStats()
                            }
            
                            List(card, [compCard ="Competition cards: " + data.competitiveStats.awards.cards,
                                        compMedals= "Competition medals: " + data.competitiveStats.awards.medals,
                                        compBronze= "Comp Bronze Medals: " + data.competitiveStats.awards.medalsBronze, 
                                        compSilver= "Comp Silver Medals: " + data.competitiveStats.awards.medalsSilver, 
                                        compGold= "Comp Glod Medals: " + data.competitiveStats.awards.medalsGold,
                                        compGamesPlayed= "Competition Games Played: " + data.competitiveStats.games.played, 
                                        compGamesWon= "Competition Games Won: " + data.competitiveStats.games.won,
                                        quickCards = "Quick Player Cards: " + data.quickPlayStats.awards.cards,
                                        quickMedals = "Quick Player Medals: " + data.quickPlayStats.awards.medals,
                                        quickBronze = "Quick Player Bronze Medals: " + data.quickPlayStats.awards.medalsBronze,
                                        quickSilver = "Quick Player Silver Medals: " + data.quickPlayStats.awards.medalsSilver,
                                        quickGold = "Quick Player Gold Medals: " + data.quickPlayStats.awards.medalsGold,
                                        quickGamesPlayed = "Quick Play Matches Played: " +data.quickPlayStats.games.played,
                                        quickGamesWon = "Quick Play Matches Won: " +data.quickPlayStats.games.won
                                        ]);
                                        
                                        
                            
                            })
                    }


            }

function CompareStats(){
    listOne = firstCard.children
    listTwo = secondCard.children
    console.log(listTwo)
    if(listTwo[1] != null){

        for (i = 0; i<listOne.length; i ++){
            var val_1 = listOne[i].textContent.split(":")[1].trim()
            var val_2 = listTwo[i].textContent.split(":")[1].trim()
            if(val_1 > val_2){
                console.log("val_1 is bigger")
            }
            if(val_1 < val_2){
                console.log("val_2 is bigger")
            }
            if(val_1 == val_2){
                console.log("same")
            }
        }
    }
    else{
        return;
    }

}