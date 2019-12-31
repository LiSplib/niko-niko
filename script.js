let users = [];
let user = '';
let numbersOfUser = prompt(`Combien d'utilisateur ?`);
    

while(users.length < numbersOfUser){
    user = prompt('Quel est ton prénom ?');
    users.push(user);
};

for(user of users){
    const newElem = document.createElement('p');
    newElem.textContent = user;
    document.getElementById('user').appendChild(newElem);
};

let date = new Date();
let currentDate = document.getElementById('date');
currentDate.textContent = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();

let newImgs = document.getElementsByTagName('p');
for(newImg of newImgs){
    newImg.addEventListener('click', changeImage);
}

function changeImage(element){
    // alert(`c'est cliqué`);
    const newPhoto = document.createElement('img');
    newImg.appendChild(newPhoto);


    let condition = prompt('Comment vous sentez vous ? \r\r Réponse 1: ok \r Réponse 2: bof \r Réponse 3: bad');
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
        default: null
            break;
    }
   }


