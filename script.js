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
    { title: "Hades", genre: "Roguelike" },
    { title: "Diablo II", genre: "Action RPG" },
    { title: "Pokémon Red/Blue", genre: "RPG" },
    { title: "League of Legends", genre: "MOBA" },
    { title: "Dota 2", genre: "MOBA" },
    { title: "Fortnite", genre: "Battle Royale" },
    { title: "Overwatch", genre: "Hero Shooter" },
    { title: "Apex Legends", genre: "Battle Royale" },
    { title: "Starfield", genre: "RPG Espacial" },
    { title: "Horizon Zero Dawn", genre: "Ação" },
    { title: "God of War Ragnarök", genre: "Ação" },
    { title: "The Last of Us Part II", genre: "Drama/Ação" },
    { title: "Ghost of Tsushima", genre: "Samurai" },
    { title: "Spiderman (PS4)", genre: "Ação" },
    { title: "Borderlands 2", genre: "Looter Shooter" },
    { title: "Destiny 2", genre: "MMO FPS" },
    { title: "Call of Duty: MW2", genre: "FPS" },
    { title: "Battlefield 1", genre: "FPS" },
    { title: "Monster Hunter: World", genre: "Ação/RPG" },
    { title: "Stardew Valley", genre: "Simulação" },
    { title: "Animal Crossing: NH", genre: "Simulação" },
    { title: "Cuphead", genre: "Ação" },
    { title: "Celeste", genre: "Plataforma" },
    { title: "Dead Cells", genre: "Roguelite" },
    { title: "Slay the Spire", genre: "Card Game" },
    { title: "Terraria", genre: "Sandbox" },
    { title: "Among Us", genre: "Social" },
    { title: "Roblox", genre: "Criação" },
    { title: "Genshin Impact", genre: "RPG de Ação" },
    { title: "Final Fantasy XIV", genre: "MMORPG" },
    { title: "Assassins Creed II", genre: "Ação/Stealth" },
    { title: "Assassins Creed Valhalla", genre: "RPG" },
    { title: "Far Cry 3", genre: "FPS" },
    { title: "Dead Space", genre: "Horror" },
    { title: "BioShock Infinite", genre: "FPS" },
    { title: "Devil May Cry 5", genre: "Ação" },
    { title: "Bayonetta 2", genre: "Ação" },
    { title: "Nier: Automata", genre: "RPG" },
    { title: "Dragon Age: Origins", genre: "RPG" },
    { title: "Mass Effect Trilogy", genre: "RPG" },
    { title: "Metal Gear Solid V", genre: "Stealth" },
    { title: "Tekken 8", genre: "Luta" },
    { title: "Mortal Kombat 11", genre: "Luta" },
    { title: "Injustice 2", genre: "Luta" },
    { title: "Kingdom Hearts II", genre: "RPG" },
    { title: "Ratchet & Clank: RA", genre: "Plataforma" },
    { title: "Crash Bandicoot Trilogy", genre: "Plataforma" },
    { title: "Spyro Trilogy", genre: "Plataforma" },
    { title: "Sonic Mania", genre: "Plataforma" },
    { title: "Ori and the Will of the Wisps", genre: "Metroidvania" },
    { title: "Inside", genre: "Puzzle" },
    { title: "Super Metroid", genre: "Metroidvania" },
    { title: "Castlevania III", genre: "Plataforma" },
    { title: "Mega Man X", genre: "Ação" },
    { title: "Donkey Kong Country 2", genre: "Plataforma" },
    { title: "GoldenEye 007", genre: "FPS" },
    { title: "Tony Hawk's Pro Skater 2", genre: "Esporte" },
    { title: "Gran Turismo 4", genre: "Simulador" },
    { title: "Need for Speed: MW", genre: "Corrida" },
    { title: "Forza Horizon 5", genre: "Corrida" },
    { title: "Mario Kart 8 Deluxe", genre: "Corrida" },
    { title: "Wii Sports", genre: "Esporte" },
    { title: "Guitar Hero III", genre: "Ritmo" },
    { title: "Left 4 Dead 2", genre: "FPS" },
    { title: "Portal", genre: "Puzzle" },
    { title: "Team Fortress 2", genre: "Hero Shooter" },
    { title: "Age of Empires II", genre: "Estratégia" },
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
    { title: "Deus Ex", genre: "RPG" },
    { title: "System Shock 2", genre: "Horror" },
    { title: "Grim Fandango", genre: "Adventure" },
    { title: "Monkey Island 2", genre: "Adventure" },
    { title: "Max Payne", genre: "Ação" },
    { title: "Alan Wake 2", genre: "Terror" },
    { title: "Control", genre: "Ação" },
    { title: "L.A. Noire", genre: "Investigação" },
    { title: "Sleeping Dogs", genre: "Mundo Aberto" },
    { title: "Watch Dogs 2", genre: "Mundo Aberto" },
    { title: "Bully", genre: "Mundo Aberto" },
    { title: "Splinter Cell: CT", genre: "Stealth" },
    { title: "Hitman World of Assassination", genre: "Stealth" },
    { title: "Dishonored 2", genre: "Stealth" },
    { title: "Prey (2017)", genre: "Sci-Fi" },
    { title: "Edith Finch", genre: "Narrativo" },
    { title: "Firewatch", genre: "Aventura" },
    { title: "It Takes Two", genre: "Co-op" },
    { title: "Sea of Thieves", genre: "Pirata" },
    { title: "Valheim", genre: "Sobrevivência" },
    { title: "Rust", genre: "Sobrevivência" },
    { title: "DayZ", genre: "Sobrevivência" },
    { title: "Escape from Tarkov", genre: "Shooter" }
];

const container = document.getElementById('game-container');
const searchInput = document.getElementById('search-input');
const randomBtn = document.getElementById('random-btn');

function render(data) {
    if (!container) return; // Segurança contra erro de carregamento
    container.innerHTML = data.map((game) => {
        const originalIndex = games.indexOf(game);
        return `
            <div class="game-card" id="game-${originalIndex}">
                <span class="rank">#${originalIndex + 1}</span>
                <h3 class="game-title">${game.title}</h3>
                <span class="genre">${game.genre}</span>
            </div>
        `;
    }).join('');
}

// Filtro de Busca Dinâmico
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = games.filter(g => 
        g.title.toLowerCase().includes(term) || g.genre.toLowerCase().includes(term)
    );
    render(filtered);
});

// Botão de Sorteio com Scroll Inteligente
randomBtn.addEventListener('click', () => {
    // Primeiro renderizamos a lista completa caso haja filtro ativo
    render(games);
    searchInput.value = '';

    const randomIndex = Math.floor(Math.random() * games.length);
    const selectedCard = document.getElementById(`game-${randomIndex}`);
    
    if (selectedCard) {
        // Remove destaques anteriores
        document.querySelectorAll('.game-card').forEach(c => {
            c.classList.remove('highlight');
            c.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });

        // Adiciona novo destaque
        selectedCard.style.borderColor = '#00f2ff';
        selectedCard.classList.add('highlight');
        
        // Rola até o card sorteado
        selectedCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    render(games);
});
