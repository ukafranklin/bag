let homeCount = document.getElementById("homescore")
let guestCount = document.getElementById("guestscore")
let home = 0
let guest = 0

function home1Point() {
    home = home + 1
    homeCount.textContent = home
}

function home2Point() {
    home = home + 2
    homeCount.textContent = home
}

function home3Point() {
    home = home + 3
    homeCount.textContent = home
}

function guest1Point() {
    guest = guest + 1
    guestCount.textContent = guest
}

function guest2Point() {
    guest = guest + 2
    guestCount.textContent = guest
}

function guest3Point() {
    guest = guest + 3
    guestCount.textContent = guest
}