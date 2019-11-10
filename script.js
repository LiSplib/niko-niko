let users = [];
let user = '';
let numbersOfUser = prompt('Combien serez-vous ?');

while( users.length < numbersOfUser){
    user = prompt('Quel est ton nom ?');
    users.push(user);
};

function addUser(newUser){
    let addUser = document.getElementById("user");
    addUser.textContent = newUser;
    if(users > 1){
        document.createElement('td');
    }
}

addUser(user);
