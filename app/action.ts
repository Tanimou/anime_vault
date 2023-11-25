"use server"

export const fetchAnime = async () => {
    const response = await fetch('https://shikimori.one/api/animes')
    return await response.json();
}