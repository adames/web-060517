
function generateUls(lists){
  return lists.map(function(list){
    return generateUl(list)
  })
}

function generateUl(obj){
  return `<li id=${obj.id}>${obj.name}</li>`
}

function generateTds(players){
  return players.map(function(player){
    return generateTd(player.team.name, player.name)
  })
}

function generateTd(teamName, playerName){
  return `
  <tr>
    <td>${teamName}</td>
    <td>${playerName}</td>
  </tr>
  `;
}
