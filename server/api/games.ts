export default defineEventHandler((event) => {

    // Path: server/api/games.ts
    let games = [{ id: 1, name: 'Game 1', slug: 'gm1' }, { id: 2, name: 'Game 2', slug: 'gm2' }, { id: 3, name: 'Game 3', slug: 'gm3' }, { id: 4, name: 'Game 4', slug: 'gm4' }, { id: 5, name: 'Game 5', slug: 'gm4' }];
    return {
        games: games
    }
})