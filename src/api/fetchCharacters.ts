export async function fetchCharacters() {
    //https://dummyjson.com/users
    try {
        const response = await fetch('https://dummyjson.com/users');
        const dataResult = await response.json();
        return dataResult.users;
    }catch (error) {
        console.error('Error fetching characters', error);
    }

}