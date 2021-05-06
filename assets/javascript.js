
// modal
const submitButton = document.querySelector("#submit");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");
let userName = "";

submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    modal.classList.add('is-active');
    userName = $("#searchBar").val();
    const isOw = $("#overwatch").prop('checked');
    console.log(isOw)
    if(isOw === "overwatch"){
      fetch(`https://ow-api.com/v1/stats/pc/us/${userName}/complete`)
      .then(function (response) {
        return response.json();
        
      })
      
    
      .then(function (data) {
        console.log(data)
        console.log(data.competitiveStats);
        console.log(data.competitiveStats.careerStats.allHeroes.average.allDamageDoneAvgPer10Min);
        console.log(data.gamesWon)//.eliminationsAvgPer10Min)
        console.log(data.competitiveStats.careerStats.allHeroes)
        console.log(data.quickPlayStats.games)
        $('#stats').text('Leaderboard; ' + data.competitiveStats.careerStats.allHeroes.average.allDamageDoneAvgPer10Min) 
      }
      )
    } else{
      // this where dota goes
    }
    
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

//   fetch('https://api.opendota.com/api/players/105248644/wl?api_key=6eb1beea-905d-4e5d-96b4-e90090e00a0a')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
    
//     console.log(data.win);
//     console.log(data.lose);
//   });

  
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
    //.then(function (data) {
      //console.log(data)
    // var// found = false
       // wh//ile(!found){
         // fo//r( i=0; i<100; i++){
           // co//nsole.log(searchInput)
              //if//(data[i].name === searchInput){
                  //console.log('hit')
                 // found = true   
              //}
          //}
         // for( i=1001; i<2000; i++){
           // console.log(searchInput)
             // if(data[i].name === searchInput){
               //   console.log('hit')
                 // found = true   
       / //      }
        / //// }
         // /for( i=2001; i<data.length; i++){
           // console.log(searchInput)
            //  if(data[i].name === searchInput){
             //     console.log('hit')
              //    found = true   
              }//
          //}
        //}
    //});
//}

searchProPlayers('sumail')





//fetch(`https://ow-api.com/v1/stats/pc/${region}/${userName}/complete`)
