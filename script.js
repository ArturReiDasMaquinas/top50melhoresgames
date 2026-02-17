const games = [
    { title: "The Legend of Zelda: Ocarina of Time", genre: "Aventura" },
    { title: "The Witcher 3: Wild Hunt", genre: "RPG" },
    { title: "Grand Theft Auto V", genre: "Mundo Aberto" },
    { title: "Elden Ring", genre: "Souls-like" },
    { title: "The Last of Us Part I", genre: "Sobrevivência" },
    { title: "God of War", genre: "Ação" },
    { title: "Minecraft", genre: "Sandbox" },
    { title: "Red Dead Redemption 2", genre: "Ação/Mundo Aberto" },
    { title: "Half-Life 2", genre: "FPS" },
    { title: "Super Mario World", genre: "Plataforma" },
    // Adicione mais até chegar nos 150...
    { title: "Baldur's Gate 3", genre: "RPG" },
    { title: "Hades", genre: "Roguelike" },
    { title: "Cyberpunk 2077", genre: "RPG" },
    { title: "Hollow Knight", genre: "Metroidvania" },
    { title: "Stardew Valley", genre: "Simulação" }
];

// Gerar lista automaticamente
const container = document.getElementById('game-container');
const searchInput = document.getElementById('search-input');
const randomBtn = document.getElementById('random-btn');

function render(data) {
    container.innerHTML = data.map((game, i) => `
        <div class="game-card" id="game-${games.indexOf(game)}">
            <span class="rank">#${games.indexOf(game) + 1}</span>
            <h2>${game.title}</h2>
            <p class="genre">${game.genre}</p>
        </div>
    `).join('');
}

// Filtro de Busca
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = games.filter(g => 
        g.title.toLowerCase().includes(term) || g.genre.toLowerCase().includes(term)
    );
    render(filtered);
});

// Sorteio
randomBtn.addEventListener('click', () => {
    render(games);
    const randomIndex = Math.floor(Math.random() * games.length);
    const selectedCard = document.getElementById(`game-${randomIndex}`);
    
    document.querySelectorAll('.game-card').forEach(c => c.style.borderColor = 'rgba(255,255,255,0.1)');
    selectedCard.style.borderColor = '#00f2ff';
    selectedCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

render(games);
