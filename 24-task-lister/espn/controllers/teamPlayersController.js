$(function(){
  displayTeamPlayers()
})


function displayTeamPlayers(){
  let teamPlayers = filterTeamPlayers()
  render('.team_player_list', generateTds(teamPlayers))
}

function filterTeamPlayers(){
  let players = store.players
  return players.filter(function(player){
    return player.team !== 'free agent'
  })
}
