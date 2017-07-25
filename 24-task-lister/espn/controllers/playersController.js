$(function(){
  displayPlayers()
  addPlayer()
})

function displayPlayers(){
  render('.player_list', generateUls(store.players))
}
function addPlayer(){
  $('.new_player').submit(function(event){
    let playerName = $('#new_player_name').val()
    let playerHometown = $('#new_player_hometown').val()
    let playerPoints = $('#new_player_points').val()
    let playerYob = $('#new_player_yob').val()
    new Player(playerName, playerHometown, playerPoints, playerYob)
    event.preventDefault()
    displayPlayers()
  })
}
