const card = document.querySelector('.form');
const users = document.querySelector('#users');

let render = (json) => {
 users.innerText ='';

    const card = document.createElement('div');
    const nameElem = document.createElement('p');
    const emailElem = document.createElement('a');


    nameElem.innerText = json.name;
    emailElem.innerText = json.email;
    
    emailElem.setAttribute('href',`mailto: ${json.email}`)

    card.append(nameElem, emailElem);
    users.append(card);
    
    };


   let getUsers = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp =>resp.json())
    .then (json => render(json))
    };

 card.addEventListener('submit', (event)=> {
 event.preventDefault();
 const id = event.target.id.value;
 getUsers(id);
  });
