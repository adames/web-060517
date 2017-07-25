const store = {teams: [], players: []}

//seed file team
new Team('sixers', 'philly')
new Team('cavs', 'cleveland')
new Team('mavericks', 'dallas')

//seed file player
new Player('dj', 'nj', 1000, 1994)
new Player('jason', 'md', 20, 1986)
new Player('adames', 'ny', 10, 1989)


//tests
console.assert('it adds items to the store upon constructing', store.teams.length === 3)
console.assert('it increments the id', store.teams.length === store.teams[store.teams.length - 1].id)
console.assert('it adds a team and city attribute', new Team('nets', 'brooklyn').name === 'nets')

//tests players
console.assert('it adds items to the store upon constructing', store.players.length === 3)
console.assert('it increments the id', store.players.length === store.teams[store.teams.length - 1].id)
console.assert('it adds a name, hometown, point, and yob attr', new Player('charles', 'nj', 15, 1989).name === 'charles')
