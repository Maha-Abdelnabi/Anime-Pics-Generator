btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const amineNameEl = document.querySelector(".anime-name");


async function getAnime(){
    try {
        const response = await fetch("https://catboys.com/api/img");
        const data =await  response.json();
        animeImgEl.src = data.url;
        amineNameEl.innerHTML = data.artist;
        console.log(data)
    } catch (error) {
        
    }
}
//add eventlistener to btn
btnEl.addEventListener('click', getAnime);






