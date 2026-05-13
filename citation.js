// Creation des listes de Citation

const devPersoCitation =[
    {
        auteur:"Confucius",
        citation:"Le plus grand voyageur est celui qui a su faire une fois le tour de lui-même."
    },
    {
        auteur:"Jacques Salomé",
        citation:"La porte du changement ne peut s'ouvrir que de l'intérieur."
    },
    {
        auteur:"Sénèque",
        citation:"Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles."
    },
    {
        auteur:"Winston Churchill",
        citation:"Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme."
    },
    {
        auteur:"Mahatma Gandhi",
        citation:"Soyez le changement que vous voulez voir dans le monde."
    },
    {
        auteur:"Sénèque",
        citation:"La vie, ce n'est pas d'attendre que les orages passent, c'est d'apprendre à danser sous la pluie."
    },
    {
        auteur:"Christian D. Larson",
        citation:"Crois en toi-même et en tout ce que tu es. Sache qu'il y a en toi quelque chose de plus grand que n'importe quel obstacle."
    },
    {
        auteur:"George Eliot",
        citation:"Il n'est jamais trop tard pour devenir ce que l'on aurait pu être."
    },
    {
        auteur:"Anonyme",
        citation:"Nos limites sont souvent celles que nous nous imposons par peur de l'inconnu."
    },
    {
        auteur:"Jim Rohn",
        citation:"La discipline est le pont entre les objectifs et l'accomplissement."
    }
];

const romCitation = [
    {
        auteur:"Antoine de Saint-Exupéry",
        citation:"Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction."
    },
    {
        auteur:"Victor Hugo",
        citation:"Le plus beau vêtement d'une femme, c'est le souvenir de l'homme qu'elle aime."
    },
    {
        auteur:"Saint Augustin",
        citation:"La mesure de l'amour, c'est d'aimer sans mesure."
    },
    {
        auteur:"Antoine de Saint-Exupéry",
        citation:"On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux."
    },
    {
        auteur:"Antoine de Saint-Exupéry",
        citation:"L'amour est la seule chose qui croît quand on la partage."
    },
    {
        auteur:"Anonyme",
        citation:"Il n'y a pas de bonheur plus grand que d'être aimé par la personne que l'on aime."
    },
    {
        auteur:"Anonyme",
        citation:"Tes yeux sont des poèmes que je lis en silence."
    },
    {
        auteur:"Honoré de Balzac",
        citation:"L'amour n'est pas seulement un sentiment, c'est un art aussi."
    },
    {
        auteur:"Rosemonde Gérard",
        citation:"Chaque jour je t'aime davantage, aujourd'hui plus qu'hier et bien moins que demain."
    },
    {
        auteur:"Alain",
        citation:"Aimer, c'est trouver sa propre richesse hors de soi."
    },
];

// Creation des variables 
let radioBtn = document.querySelectorAll('.radio');
let resultCitation = document.getElementById('result');
let genBtnCitation = document.getElementById('generate');

// Fonction pour recuperer un nombre au hasard compris entre 0-10
function getCitation(list){
    let indexCitation = Math.floor(Math.random() * list.length);
    return indexCitation;
};

// Fonction pour inserer la citation sur la page
function generateCitation(list){
    let index = getCitation(list);
   return resultCitation.innerHTML = `<p class='mt-2'> ${list[index].citation}</p>
    <p class="text-blue-500 text-center">${list[index].auteur}</p>`
};

// Fonction pour generer une citation au click;
function genBtn(btn, listCitation){
   return  btn.addEventListener('click', ()=>{
      generateCitation(listCitation)  
    })
}
// Fonction principale de l'app
function appCitation(){
    let listCitation = devPersoCitation;
    radioBtn.forEach((btn)=>{
        btn.addEventListener('change', ()=>{
            if(btn.value === 'romantique'){
                listCitation = romCitation;
                generateCitation(listCitation)
                genBtn(genBtnCitation, listCitation)
                
            }else{
                listCitation = devPersoCitation;
                generateCitation(listCitation);
                genBtn(genBtnCitation, listCitation)
            }
        })
    })
    genBtn(genBtnCitation, listCitation);
    generateCitation(listCitation)
};
// Appel de la fonction
appCitation()