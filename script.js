// Toggle navigation menu for mobile devices
const hamburgerMenu = document.getElementById("hamburger-menu");
const navMenu = document.querySelector("nav ul");

// Casual player list with profile images
const players = [
  {
    name: "Anh Tuan",
    nickname: "Fast Feet",
    profilePic: "images/player/img-01.png",
  },
  {
    name: "Minh Lazy",
    nickname: "Only Runs for Food",
    profilePic: "images/player/img-02.jpg",
  },
  {
    name: "Huy Chill",
    nickname: "Goal or Nap",
    profilePic: "images/player/img-03.jpg",
  },
];

// Casual schedule
const schedule = [
  { when: "Maybe Saturday", plan: "If it’s not raining, we play at the park." },
  { when: "Next Week?", plan: "Depends if we’re free or eating." },
];

// Display players
function displayPlayers() {
  const playerList = document.getElementById("player-list");
  players.forEach((player) => {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");
    playerCard.innerHTML = `
      <img src="${player.profilePic}" alt="${player.name}'s profile picture" />
      <h3>${player.name}</h3>
      <p>aka "${player.nickname}"</p>
    `;
    playerList.appendChild(playerCard);
  });
}

// Display schedule
function displaySchedule() {
  const scheduleList = document.getElementById("schedule-list");
  schedule.forEach((match) => {
    const scheduleCard = document.createElement("div");
    scheduleCard.classList.add("schedule-card");
    scheduleCard.innerHTML = `
      <h3>${match.when}</h3>
      <p>${match.plan}</p>
    `;
    scheduleList.appendChild(scheduleCard);
  });
}

// Load content
window.onload = () => {
  displayPlayers();
  displaySchedule();
};
