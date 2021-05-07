// new push


// modal
var input = document.querySelector("#input")



// onRefresh()
// populateTable()
const dropItem = document.querySelectorAll(".dropdown-item")
const button = document.querySelector(".button")

const submitButton = document.querySelector("#submit");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content")

submitButton.addEventListener("click", (event) => {
  event.preventDefault()
  var searchInput = document.getElementById('input');
  var chooseGame = document.querySelector(".button")
  callAPI(chooseGame.textContent, searchInput.value.trim());

  var displayed = false
  updateHistory(searchInput.value, chooseGame.textContent, displayed)

  localStorage.setItem('searchHistory', JSON.stringify(searches))
  modal.classList.add('is-active');

  modalContent.classList.remove('fortnite', true)
  modalContent.classList.remove('overwatch', true)
  if (chooseGame === 'Fortnite') {
    modalContent.classList.add('fortnite')
  } else {
    modalContent.classList.add('overwatch')
  }


  updateTable()


});

modalBg.addEventListener('click', () => {
  modal.classList.remove('is-active');

  while (document.getElementById('list').firstChild) {
    document.getElementById('list').removeChild(document.getElementById('list').lastChild)
  }



})

// when clicked, button will dropdown
const menu = document.getElementById('dropdown');
menu.addEventListener('click', e => {
  e.preventDefault()
  e.stopPropagation();
  menu.classList.toggle('is-active')
})
document.addEventListener('click', () => {
  menu.classList.remove('is-active')
})



dropItem.forEach(o => {
  o.addEventListener("click", (event) => {
    console.log(o)
    button.textContent = o.textContent
    menu.classList.remove('is-active')

    console.log(dropItem)
  })
})

const resetBtn = document.getElementById('reset')
resetBtn.addEventListener('click', function (event) {
  array = JSON.parse(localStorage.getItem('searchHistory'))
  array = []
  localStorage.setItem('searchHistory', JSON.stringify(array))
  var table = document.getElementById("tableBody")
  while (table.firstChild) {
    table.removeChild(table.lastChild)
  }
})




//creates storage array if one does not exist already
function onRefresh() {
  if (!localStorage.getItem('searchHistory')) {
    searches = []
    localStorage.setItem('searchHistory', JSON.stringify(searches))
    console.log('created array')
  }
  else {
    console.log('array exists')

    data = JSON.parse(localStorage.getItem('searchHistory'))

    data.forEach(element => {
      element.shown = false
      localStorage.setItem('searchHistory', JSON.stringify(data))
    })

  }
}
//updates histroy in local storage, pass in new string
//add dupe checking
function updateHistory(name, game, shown) {
  searches = JSON.parse(localStorage.getItem('searchHistory'))
  var newObj = { name, game, shown }
  searches.unshift(newObj)
  localStorage.setItem('searchHistory', JSON.stringify(searches))
}

function populateTable() {
  tableContent = JSON.parse(localStorage.getItem('searchHistory'))
  var table = document.getElementById('tableBody')

  tableContent.forEach(element => {
    if (element.shown == false) {
      var newRow = document.createElement("TR")
      var tableName = document.createElement("TD")
      var tableGame = document.createElement("TD")

      tableName.addEventListener("click", function (event) {
        console.log("clicked")
        event.preventDefault()
        callAPI(element.game, element.name)
        modal.classList.add('is-active');
      })

      tableGame.addEventListener("click", function (event) {
        console.log("clicked")
        event.preventDefault()
        callAPI(element.game, element.name)
        modal.classList.add('is-active');
      })

      table.appendChild(newRow)
      newRow.appendChild(tableName)
      tableName.textContent = element.name
      newRow.appendChild(tableGame)
      tableGame.textContent = element.game
      element.shown = true
      localStorage.setItem('searchHistory', JSON.stringify(tableContent))
    }
  })
}

function updateTable() {
  tableContent = JSON.parse(localStorage.getItem('searchHistory'))
  var table = document.getElementById('tableBody')

  tableContent.forEach(element => {
    if (element.shown == false) {
      var newRow = document.createElement("TR")
      var tableName = document.createElement("TD")
      var tableGame = document.createElement("TD")

      tableName.addEventListener("click", function (event) {
        console.log("clicked")
        event.preventDefault()
        callAPI(element.game, element.name)
        modal.classList.add('is-active');
      })

      tableGame.addEventListener("click", function (event) {
        console.log("clicked")
        event.preventDefault()
        callAPI(element.game, element.name)
        modal.classList.add('is-active');
      })

      if (!table.firstChild) {
        table.appendChild(newRow)
      }
      else {
        table.insertBefore(newRow, table.firstChild)
      }
      newRow.appendChild(tableName)
      tableName.textContent = element.name.trim()
      newRow.appendChild(tableGame)
      tableGame.textContent = element.game
      element.shown = true
      localStorage.setItem('searchHistory', JSON.stringify(tableContent))
    }
  })

}

// function that calls the api for each video game
function callAPI(game, search) {


  if (game == "Fortnite") {

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
        function List(elem, data) {
          console.log(elem)
          console.log(data)
          for (let i = 0; i < data.length; i++) {
            var li = document.createElement("li");
            li.textContent = data[i];
            elem.appendChild(li);
          }
        }

        var things = document.getElementById('list');
        List(things, [names = "name: " + data.data.account.name,
        deaths = "Deaths: " + data.data.stats.all.overall.deaths,
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
      });

  }
  else if (game == "Overwatch") {
    var user = search.replace('#', '-')
    //call overwatch api
    console.log(game)

    fetch(`https://ow-api.com/v1/stats/pc/us/${user}/complet`)
      .then(function (response) {
        if (response.status !== 200) {
          alert("error." + response.status);
          location.reload()
        } else {
        }
        return response.json();
      })
      .then(function (data) {

        function List(elem, data) {

          console.log(elem)
          console.log(data)
          for (let i = 0; i < data.length; i++) {
            const li = document.createElement("li");
            li.textContent = data[i];
            elem.appendChild(li);
          }
        }
        var things = document.getElementById('list');
        List(things, [compCard = "Competition cards: " + data.competitiveStats.awards.cards,
        compMedals = "Competition medals: " + data.competitiveStats.awards.medals,
        compBronze = "Comp Bronze Medals: " + data.competitiveStats.awards.medalsBronze,
        compSilver = "Comp Silver Medals: " + data.competitiveStats.awards.medalsSilver,
        compGold = "Comp Glod Medals: " + data.competitiveStats.awards.medalsGold,
        compGamesPlayed = "Competition Games Played: " + data.competitiveStats.games.played,
        compGamesWon = "Competition Games Won: " + data.competitiveStats.games.won,
        quickCards = "Quick Player Cards: " + data.quickPlayStats.awards.cards,
        quickMedals = "Quick Player Medals: " + data.quickPlayStats.awards.medals,
        quickBronze = "Quick Player Bronze Medals: " + data.quickPlayStats.awards.medalsBronze,
        quickSilver = "Quick Player Silver Medals: " + data.quickPlayStats.awards.medalsSilver,
        quickGold = "Quick Player Gold Medals: " + data.quickPlayStats.awards.medalsGold,
        quickGamesPlayed = "Quick Play Matches Played: " + data.quickPlayStats.games.played,
        quickGamesWon = "Quick Play Matches Won: " + data.quickPlayStats.games.won
        ]);
      })
  }


}

onRefresh()
populateTable()