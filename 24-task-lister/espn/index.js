const store = {teams: []}

function createTeam(){
  let id = 0
  return class Team {
    constructor(name, city){
      this.id = ++id
      this.name = name;
      this.city = city
      store.teams.push(this)
    }
  }
}
var Team = createTeam();

new Team('sixers', 'philly')
new Team('cavs', 'cleveland')
new Team('mavericks', 'dallas')


console.assert('it adds items to the store upon constructing', store.teams.length === 3)
console.assert('it increments the id', store.teams.length === store.teams[store.teams.length - 1].id)
console.assert('it adds a team and city attribute', new Team('nets', 'brooklyn').name === 'nets')
