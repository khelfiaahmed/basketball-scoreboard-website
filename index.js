let home = 0
let guest = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function add1home(){
    home += 1
    homeScoreEl.textContent = home
}

function add2home(){
    home += 2
    homeScoreEl.textContent = home
}

function add3home(){
    home += 3
    homeScoreEl.textContent = home
}

function add1guest(){
    guest += 1
    guestScoreEl.textContent = guest
}

function add2guest(){
    guest += 2
    guestScoreEl.textContent = guest
}

function add3guest(){
    guest += 3
    guestScoreEl.textContent = guest
}
