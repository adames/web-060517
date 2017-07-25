
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
    return generateTd(player.team.name, player.team.city, player.name, player.hometown)
  })
}

function generateTd(teamName, city, playerName, hometown){
  return `
  <tr>
    <td>${teamName}</td>
    <td>${city}</td>
    <td>${playerName}</td>
    <td>${hometown}</td>
  </tr>
  `;
}
