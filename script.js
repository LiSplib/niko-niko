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
    
        let newElem = document.createElement('td');
        newElem.innerText = user;
        document.body.appendChild(newElem);
        
}


addUser(user);
