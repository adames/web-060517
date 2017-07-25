$(function(){
  displayPlayers()
  addPlayer()
})

function displayPlayers(){
  render('.player_list', generateUls(store.players))
}
function addPlayer(){
  $('.new_player').submit(function(event){
    let playerName = event.target.children.new_player_name.value
    let playerHometown = event.target.children.new_player_hometown.value
    let playerPoints = event.target.children.new_player_points.value
    let playerYob = event.target.children.new_player_yob.value
    new Player(playerName, playerHometown, playerPoints, playerYob)
    event.preventDefault()
    displayPlayers()
  })
}
