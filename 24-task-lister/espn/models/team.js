
function createTeam(){
  let id = 0
  return class {
    constructor(name, city){
      this.name = name
      this.city = city
      this.id = ++id
      store.teams.push(this)
    }
    static find(id){
      return store.teams.filter(function(team){
        return team.id === id
      })[0]
    }
  }
}

let Team = createTeam();
