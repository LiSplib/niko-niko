let users = [];
let user = '';
let numbersOfUser = prompt('Combien serez-vous ?');

while( users.length < numbersOfUser){
    user = prompt('Quel est ton nom ?');
    users.push(user);
};

for( let i in users){
    let newElem = document.createElement('tr');
    newElem.innerText = users[i];
    document.getElementById('user').appendChild(newElem);
}


