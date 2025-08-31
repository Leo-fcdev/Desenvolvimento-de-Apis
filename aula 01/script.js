const catBtn = document.getElementById('catBtn');
const dogBtn = document.getElementById('dogBtn');
const petImg = document.getElementById('petImg');

const CatApiUrl = 'https://api.thecatapi.com/v1/images/search';
const DogApiUrl = 'https://api.thedogapi.com/v1/images/search';
''
catBtn.addEventListener('click', () =>{
    fetch(CatApiUrl)
    .then(response => response.json())
    .then(data =>{
        const imgUrl = data[0].url;
        petImg.src = imgUrl;
    })
    .catch(error =>{
        console.log("ocorreu um erro ao buscar a imagem do gato", error);
    })
});

dogBtn.addEventListener('click', () =>{
    fetch(DogApiUrl)
    .then(response => response.json())
    .then(data =>{
        const imgUrl = data[0].url;
        petImg.src = imgUrl;
    })
    .catch(error =>{
        console.log("ocorreu um erro ao buscar a imagem do cachorro", error);
    })  
});