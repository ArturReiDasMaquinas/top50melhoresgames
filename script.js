const games = [
    { title: "The Legend of Zelda: Ocarina of Time", genre: "Aventura/RPG" },
    { title: "The Witcher 3: Wild Hunt", genre: "RPG de Ação" },
    { title: "Grand Theft Auto V", genre: "Mundo Aberto" },
    { title: "The Last of Us Part I", genre: "Sobrevivência" },
    { title: "Elden Ring", genre: "Souls-like/RPG" },
    { title: "God of War (2018)", genre: "Ação/Aventura" },
    { title: "Red Dead Redemption 2", genre: "Mundo Aberto" },
    { title: "Minecraft", genre: "Sandbox" },
    { title: "Super Mario Odyssey", genre: "Plataforma" },
    { title: "Half-Life 2", genre: "FPS" },
    { title: "Tetris", genre: "Puzzle" },
    { title: "Super Mario World", genre: "Plataforma" },
    { title: "Mass Effect 2", genre: "RPG Espacial" },
    { title: "BioShock", genre: "FPS Narrativo" },
    { title: "Skyrim", genre: "RPG de Fantasia" },
    { title: "Portal 2", genre: "Puzzle" },
    { title: "Shadow of the Colossus", genre: "Aventura" },
    { title: "Bloodborne", genre: "Souls-like" },
    { title: "Hollow Knight", genre: "Metroidvania" },
    { title: "Metal Gear Solid 3", genre: "Stealth" },
    { title: "Chrono Trigger", genre: "JRPG" },
    { title: "Final Fantasy VII", genre: "JRPG" },
    { title: "Resident Evil 4", genre: "Survival Horror" },
    { title: "Dark Souls", genre: "Souls-like" },
    { title: "Street Fighter II", genre: "Luta" },
    { title: "Halo: Combat Evolved", genre: "FPS" },
    { title: "Doom (1993)", genre: "FPS" },
    { title: "Pac-Man", genre: "Arcade" },
    { title: "Zelda: Breath of the Wild", genre: "Mundo Aberto" },
    { title: "Metroid Prime", genre: "Ação/Exploração" },
    { title: "Castlevania: SotN", genre: "Metroidvania" },
    { title: "GTA: San Andreas", genre: "Mundo Aberto" },
    { title: "Uncharted 2", genre: "Ação/Aventura" },
    { title: "The Sims 2", genre: "Simulação" },
    { title: "World of Warcraft", genre: "MMORPG" },
    { title: "Counter-Strike 2", genre: "FPS Tático" },
    { title: "Starcraft II", genre: "Estratégia" },
    { title: "Persona 5 Royal", genre: "JRPG" },
    { title: "Fallout: New Vegas", genre: "RPG" },
    { title: "Batman: Arkham City", genre: "Ação" },
    { title: "Silent Hill 2", genre: "Terror" },
    { title: "Journey", genre: "Indie" },
    { title: "Undertale", genre: "Indie/RPG" },
    { title: "Outer Wilds", genre: "Exploração" },
    { title: "Baldur's Gate 3", genre: "CRPG" },
    { title: "Sekiro: Shadows Die Twice", genre: "Ação" },
    { title: "Civilization VI", genre: "Estratégia" },
    { title: "Cyberpunk 2077", genre: "RPG" },
    { title: "Disco Elysium", genre: "RPG Narrativo" },
    { title: "Hades", genre: "Roguelike" }
];

const container = document.getElementById('game-container');
const searchInput = document.getElementById('search-input');
const randomBtn = document.getElementById('random-btn');

function render(data) {
    container.innerHTML = data.map((game) => {
        const index = games.indexOf(game);
        return `
            <div class="game-card" id="game-${index}">
                <span class="rank">#${index + 1}</span>
                <h2 class="game-title">${game.title}</h2>
                <p class="genre">${game.genre}</p>
            </div>
        `;
    }).join('');
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = games.filter(g => 
        g.title.toLowerCase().includes(term) || g.genre.toLowerCase().includes(term)
    );
    render(filtered);
});

randomBtn.addEventListener('click', () => {
    render(games);
    searchInput.value = '';
    const randomIndex = Math.floor(Math.random() * games.length);
    const selectedCard = document.getElementById(`game-${randomIndex}`);
    
    document.querySelectorAll('.game-card').forEach(c => c.classList.remove('highlight'));
    selectedCard.classList.add('highlight');
    selectedCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

render(games);