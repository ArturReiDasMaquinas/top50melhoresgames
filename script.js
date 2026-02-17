const games = [
    // 1-50 (Aclamação Crítica)
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
    { title: "Hades", genre: "Roguelike" },

    // 51-100 (Favoritos da Comunidade)
    { title: "Diablo II", genre: "Action RPG" },
    { title: "Pokémon Red/Blue", genre: "RPG/Coleção" },
    { title: "League of Legends", genre: "MOBA" },
    { title: "Dota 2", genre: "MOBA" },
    { title: "Fortnite", genre: "Battle Royale" },
    { title: "Overwatch", genre: "Hero Shooter" },
    { title: "Apex Legends", genre: "Battle Royale" },
    { title: "Starfield", genre: "RPG Espacial" },
    { title: "Horizon Zero Dawn", genre: "Ação/Mundo Aberto" },
    { title: "God of War Ragnarök", genre: "Ação" },
    { title: "The Last of Us Part II", genre: "Drama/Ação" },
    { title: "Ghost of Tsushima", genre: "Mundo Aberto/Samurai" },
    { title: "Spiderman (PS4)", genre: "Ação" },
    { title: "Borderlands 2", genre: "Looter Shooter" },
    { title: "Destiny 2", genre: "MMO FPS" },
    { title: "Call of Duty: Modern Warfare 2", genre: "FPS" },
    { title: "Battlefield 1", genre: "FPS" },
    { title: "Monster Hunter: World", genre: "Ação/RPG" },
    { title: "Stardew Valley", genre: "Simulação/Fazenda" },
    { title: "Animal Crossing: New Horizons", genre: "Simulação" },
    { title: "Cuphead", genre: "Run and Gun" },
    { title: "Celeste", genre: "Plataforma" },
    { title: "Dead Cells", genre: "Roguelite" },
    { title: "Slay the Spire", genre: "Card Game/Roguelike" },
    { title: "Terraria", genre: "Sandbox/Ação" },
    { title: "Among Us", genre: "Social" },
    { title: "Roblox", genre: "Plataforma de Criação" },
    { title: "Genshin Impact", genre: "RPG de Ação" },
    { title: "Final Fantasy XIV", genre: "MMORPG" },
    { title: "Assassins Creed II", genre: "Ação/Stealth" },
    { title: "Assassins Creed Valhalla", genre: "RPG/Viking" },
    { title: "Far Cry 3", genre: "FPS/Mundo Aberto" },
    { title: "Dead Space (Remake)", genre: "Horror Espacial" },
    { title: "BioShock Infinite", genre: "FPS Narrativo" },
    { title: "Devil May Cry 5", genre: "Hack and Slash" },
    { title: "Bayonetta 2", genre: "Ação" },
    { title: "Nier: Automata", genre: "RPG/Ação" },
    { title: "Dragon Age: Origins", genre: "RPG" },
    { title: "Mass Effect Trilogy", genre: "RPG" },
    { title: "Metal Gear Solid V", genre: "Stealth" },
    { title: "Tekken 8", genre: "Luta" },
    { title: "Mortal Kombat 11", genre: "Luta" },
    { title: "Injustice 2", genre: "Luta" },
    { title: "Kingdom Hearts II", genre: "RPG" },
    { title: "Ratchet & Clank: Rift Apart", genre: "Plataforma" },
    { title: "Crash Bandicoot N. Sane Trilogy", genre: "Plataforma" },
    { title: "Spyro Reignited Trilogy", genre: "Plataforma" },
    { title: "Sonic Mania", genre: "Plataforma" },
    { title: "Ori and the Will of the Wisps", genre: "Metroidvania" },
    { title: "Inside", genre: "Puzzle/Plataforma" },

    // 101-150 (Retrô e Clássicos Indispensáveis)
    { title: "Super Metroid", genre: "Metroidvania" },
    { title: "Castlevania III", genre: "Plataforma" },
    { title: "Mega Man X", genre: "Ação" },
    { title: "Donkey Kong Country 2", genre: "Plataforma" },
    { title: "GoldenEye 007", genre: "FPS" },
    { title: "Tony Hawk's Pro Skater 2", genre: "Esporte" },
    { title: "Gran Turismo 4", genre: "Simulador Corrida" },
    { title: "Need for Speed: Most Wanted", genre: "Corrida" },
    { title: "Forza Horizon 5", genre: "Corrida" },
    { title: "Mario Kart 8 Deluxe", genre: "Corrida/Party" },
    { title: "Wii Sports", genre: "Esporte" },
    { title: "Guitar Hero III", genre: "Ritmo" },
    { title: "Left 4 Dead 2", genre: "FPS/Co-op" },
    { title: "Portal", genre: "Puzzle" },
    { title: "Team Fortress 2", genre: "Hero Shooter" },
    { title: "Age of Empires II", genre: "Estratégia RTS" },
    { title: "Command & Conquer", genre: "Estratégia" },
    { title: "SimCity 4", genre: "Simulação" },
    { title: "RollerCoaster Tycoon", genre: "Simulação" },
    { title: "The Sims 4", genre: "Simulação" },
    { title: "Banjo-Kazooie", genre: "Plataforma" },
    { title: "Conker's Bad Fur Day", genre: "Plataforma" },
    { title: "Perfect Dark", genre: "FPS" },
    { title: "Fable", genre: "RPG" },
    { title: "Star Wars: KOTOR", genre: "RPG" },
    { title: "Jade Empire", genre: "RPG" },
    { title: "Vampire: The Masquerade", genre: "RPG" },
    { title: "Deus Ex", genre: "RPG/Immersive Sim" },
    { title: "System Shock 2", genre: "Horror/RPG" },
    { title: "Grim Fandango", genre: "Adventure" },
    { title: "Monkey Island 2", genre: "Adventure" },
    { title: "Max Payne", genre: "Ação" },
    { title: "Alan Wake 2", genre: "Terror/Mistério" },
    { title: "Control", genre: "Ação/Sci-fi" },
    { title: "L.A. Noire", genre: "Investigação" },
    { title: "Sleeping Dogs", genre: "Mundo Aberto" },
    { title: "Watch Dogs 2", genre: "Mundo Aberto" },
    { title: "Bully", genre: "Mundo Aberto" },
    { title: "Splinter Cell: Chaos Theory", genre: "Stealth" },
    { title: "Hitman World of Assassination", genre: "Stealth" },
    { title: "Dishonored 2", genre: "Stealth/Ação" },
    { title: "Prey (2017)", genre: "Immersive Sim" },
    { title: "What Remains of Edith Finch", genre: "Narrativo" },
    { title: "Firewatch", genre: "Aventura" },
    { title: "It Takes Two", genre: "Co-op/Plataforma" },
    { title: "Sea of Thieves", genre: "Aventura Pirata" },
    { title: "Valheim", genre: "Sobrevivência" },
    { title: "Rust", genre: "Sobrevivência" },
    { title: "DayZ", genre: "Sobrevivência" },
    { title: "Escape from Tarkov", genre: "Extração Shooter" }
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
