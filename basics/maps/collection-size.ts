export{}
const userIds = [101, 205, 101, 309, 205, 101, 412];

const visitCounts = new Map<number, number>();
userIds.forEach(user => {
    const visits = visitCounts.get(user) ?? 0;
    visitCounts.set(user, visits + 1);
})
console.log(visitCounts.size);
console.log(visitCounts.get(101));
console.log(visitCounts.get(205));
console.log(visitCounts.get(309));
console.log(visitCounts.get(412));



const pages = [
    "/home",
    "/profile",
    "/home",
    "/settings",
    "/profile",
    "/home"
];

const siteVisits = new Map<string, number>();

for(let i = 0 ; i < pages.length; i++) {
    console.log(siteVisits.set(pages[i], i))
}
console.log(siteVisits.size);

const homeVisit = siteVisits.get("/home");
const profileVisit = siteVisits.get("/profile");

console.log(homeVisit);
console.log(profileVisit);
