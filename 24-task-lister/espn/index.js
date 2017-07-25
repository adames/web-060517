const store = {teams: [], players: []}

//seed file team
new Team('Sixers', 'Philly')
new Team('Cavs', 'Cleveland')
new Team('Mavericks', 'Dallas')

//seed file player
new Player('DJ', 'NJ', 1000, 1994)
new Player('Jason', 'MD', 20, 1986)
new Player('Adames', 'NY', 10, 1989)


//tests
console.assert('it adds items to the store upon constructing', store.teams.length === 3)
console.assert('it increments the id', store.teams.length === store.teams[store.teams.length - 1].id)
console.assert('it adds a team and city attribute', new Team('Nets', 'Brooklyn').name === 'Nets')

//tests players
console.assert('it adds items to the store upon constructing', store.players.length === 3)
console.assert('it increments the id', store.players.length === store.teams[store.teams.length - 1].id)
console.assert('it adds a name, hometown, point, and yob attr', new Player('Charles', 'NJ', 15, 1989).name === 'Charles')
