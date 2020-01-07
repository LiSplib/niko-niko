let date = new Date();
let currentDate = document.getElementById('date');
currentDate.textContent = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();

const addUser = document.getElementById('addUser');
addUser.addEventListener('click', createUser);

function createUser(){

    let users = [];
    let user = '';
    let numbersOfUser = prompt(`Combien d'utilisateur ?`);
        

    while(users.length < numbersOfUser){
        user = prompt('Quel est ton prénom ?');
        users.push(user);
    };
    updateUser(users);
}

function updateUser(users){
    // for(let user of users){
    //     const newElem = document.createElement('p');
    //     newElem.textContent = user;
    //     document.getElementById('user').appendChild(newElem);
    // };
    document.getElementById('user').innerHTML = `
        <div>
            ${users.map(user=>{
                return `<p>${user}</p>`;
                        }).join('')
            }
        </div>`;
    updateStatus(user);
}

function updateStatus(){
    let newImgs = document.querySelectorAll('p');
    for(let newImg of newImgs){
        newImg.addEventListener('click', ev => loadImage(newImg));
    };
   
}
function loadImage(newImg){
    // alert(`c'est cliqué`);
    const newPhoto = document.createElement('img');


    let condition = prompt('Quelle est votre humeur du jour ? \r\r Réponse 1: Tout va bien \r\r Réponse 2: Ca va mais c\'est pas top \n\n Réponse 3: Pas content \n\n');
    switch (condition) {
        case "1":
            newPhoto.setAttribute('src', `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2Fs9cAAOxymnFSHPuB%2Fs-l400.jpg&f=1&nofb=1`);
            break;
        case "2":
            newPhoto.setAttribute('src', `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.05G1sxpANl-Q0wNNefBTaAHaHa%26pid%3DApi&f=1`);
            break;
        case "3":
            newPhoto.setAttribute('src', `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frlv.zcache.com%2Fred_frownie_face_sticker-r4bc918ab39464b9597a4dba99bf7d013_v9waf_8byvr_540.jpg&f=1&nofb=1`);
            break;    
        default: alert('Merci de choisir un chiffre entre 1 et 3 !');
            break;
    }
    newImg.appendChild(newPhoto);


    if(user !== 0){
        saveTheDay();
    }
    newImg.removeEventListerner('click', ev => loadImage(newImg), false);
}




function saveTheDay(){
    let save = document.createElement('button');
    document.getElementById('user').appendChild(save);
    save.textContent = 'Sauvegarder';
}

let myJSON = {
    user: "${user}",
    status: "${user.newPhoto}"
};

let myNewJSON = JSON.stringify(myJSON, null, '\t');

