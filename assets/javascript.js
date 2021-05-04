
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

//player info https://api.opendota.com/api/players/{accountid} 
// wins and losses /wl
// no end -mmr, comp rank, solo rank, leaderboard rank

//requestUrl = 'https://api.opendota.com/api/players/105248644?api_key=6eb1beea-905d-4e5d-96b4-e90090e00a0a'

//example stat calls---------------------------------------------------------------------------
fetch('https://api.opendota.com/api/players/105248644?api_key=6eb1beea-905d-4e5d-96b4-e90090e00a0a')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

   // for (i = 0; i < data.length)
    console.log(data.profile.name)
    console.log(data.leaderboard_rank)
    console.log(data.mmr_estimate.estimate)
    console.log(data.solo_competitive_rank)
    console.log(data.competitive_rank)
  });


  
//   fetch('https://api.opendota.com/api/proPlayers?api_key=6eb1beea-905d-4e5d-96b4-e90090e00a0a')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
    
//     console.log(data[1].name)
//   });
  //-------------------------------------------------------------------------------------------

  

function searchProPlayers(searchInput){
    fetch('https://api.opendota.com/api/proPlayers?api_key=6eb1beea-905d-4e5d-96b4-e90090e00a0a')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
          for( i=0; i<1000; i++){
            console.log(searchInput)
              if(data[i].name === searchInput){
                  console.log('hit')
                  break
              }
          }      
    });
}

searchProPlayers('N0tail')

