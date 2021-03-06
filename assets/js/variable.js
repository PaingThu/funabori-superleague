var premierLeagueData = [
    {name : "Maw Paing Thu", team : "Wolves", id : "mpt21007"},
    {name : "Htet Wai Aung", team : "Chelsea", id : "hwa2212"},
    {name : "Soe Mon Theik", team : "Southampton", id : "smt21108"},
    {name : "Min Thiri", team : "Liverpool", id : "mtr2927"},
    {name : "Arkar Zaw Hein", team : "Watford", id : "azh1311"},
    {name : "Soe Zayar Tun", team : "Leicester", id : "szt2308"},
    {name : "Min Paing", team : "Burnley", id : "mp9999"},
    {name : "Aung Yin", team : "Man United", id : "ay2411"},
    {name : "Moe Nyi", team : "Leeds", id : "mnnt21433"},
    {name : "Aung Sett Myat", team : "Everton", id : "asm2309"},
    {name : "Nyi Win", team : "Crystal Palace", id : "nw21107"},
    {name : "Zaw Zaw Aung", team : "Brighton", id : "zza21030"},
    {name : "Ye Htun Oo", team : "Newcastle", id : "yho2308"},
    {name : "Arkar Aung", team : "Brentford", id : "aka21107"},
    {name : "Htet Aung Kyaw", team : "Man City", id : "hak21105"},
    {name : "Nyan Linn Aung", team : "Aston Villa", id : "nla2308"},
]

var searchDataTeam = premierLeagueData.slice();
searchDataTeam = searchDataTeam.sort(function (a, b) {
    if(a.team < b.team) { return -1; }
    if(a.team > b.team) { return 1; }
    return 0
});


var searchDataPlayer = premierLeagueData.slice();
searchDataPlayer = searchDataPlayer.sort(function (a, b) {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0
});