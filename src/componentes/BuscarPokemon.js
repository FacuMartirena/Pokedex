export const BuscarPokemon = (id) => {
    try {
        
        let url = `https://us-central1-senpai-9b555.cloudfunctions.net/getPokemon?id=${id}`
        const response = fetch(url);
        const data = response.json()
        return data;
    } catch (error) {
        
    }
}