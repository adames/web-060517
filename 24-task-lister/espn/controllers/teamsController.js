$(function(){
  addTeam()
  displayTeams()
  wasClicked()

})

function displayTeams(){
  render('.team_list', generateUls(store.teams))
}

function wasClicked(){
  let selectedTeamId = 0
  $('body').on('click', function(event){
    if(event.target.parentElement.className === "team_list"){
      //find target
      event.target.style.color = 'red'
      selectedTeamId = event.target.id
    }
    else if(event.target.parentElement.className === "player_list" && selectedTeamId !== 0){
      let selectedPlayer = Player.find(parseInt(event.target.id))
      let selectedTeam = Team.find(parseInt(selectedTeamId))
      selectedPlayer.team = Team.find(selectedTeam.id)
      displayTeamPlayers()
      resetTeam()
    }
    else {

      displayTeams()
    }
  })
}

function resetTeam(){
  $('.team_list').empty()
  displayTeams()
}

function addTeam(){
  $('.new_team').submit(function(event){
    let teamName = event.target.children.new_team_name.value
    let teamCity = event.target.children.new_team_city.value
    new Team(teamName, teamCity)
    event.preventDefault()
    displayTeams()
  })
}
