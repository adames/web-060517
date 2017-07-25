
//players have name, hometown, points, yob
function createPlayer(){
  let id = 0;
  return class{
    constructor(name, hometown, points, yob){
      this.name = name
      this.hometown = hometown
      this.points = points
      this.yob = yob
      this.id = ++id
      this.team = "free agent"
      store.players.push(this)
    }
    static find(id){
      return store.players.filter(function(player){
        return player.id === id
      })[0]
    }
  }
}

Player = createPlayer();
