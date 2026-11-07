export{}
function calculateFullTeams(students:number, teamSize:number) {
    const teams: number = Math.floor(students / teamSize);
    return teams
}
console.log(calculateFullTeams(20 ,4))
console.log(calculateFullTeams(23 ,3))

function getFullHours(minutes:number) {
    const hours = Math.floor((minutes / 60))
    return hours
}
console.log(getFullHours(50 ))
console.log(getFullHours(70 ))