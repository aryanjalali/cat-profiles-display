let catList = [
     {
          name: 'Puffins',
          breed: 'Bengal',
          url: './Images/cat-pic.jpg',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea laboriosam accusamus pariatur iusto similique quidem',
          age: 2
     },
     {
          name: 'Garfield',
          breed: 'Orange Tabby',
          url: './Images/cat-pic.jpg',
          description: 'Quo ea laboriosam accusamus pariatur iusto similique quidem earum temporibus. Quo commodi delectus iste laborum',
          age: 5
     },
     {
          name: 'Blizzard',
          breed: 'Snow Cat',
          url: './Images/cat-pic.jpg',
          description: 'Lorem sit amet consectetur adipisicing. Dolor sit amet consectetur adipisicolor sit amet consectetur adipisicing.',
          age: 6
     },
     {
          name: 'Luna',
          breed: 'Moon cat',
          url: './Images/cat-pic.jpg',
          description: 'Lorem ipsum adipisicing. Dolor sit amet consectetur adipisicolor ipsum ipsum ipsum sit amet consectetur adip.',
          age: 6
     },
     {
          name: 'Vanilla',
          breed: 'Siamese cat',
          url: './Images/cat-pic.jpg',
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          age: 3
     },
     {
          name: 'Simba',
          breed: 'Lion',
          url: './Images/cat-pic.jpg',
          description: 'Duis aute irure ipsum dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          age: 1
     },
]

const insertionPoint = document.querySelector('#main');

createCatCards(catList);

function createCatCards(catArray){
     for (let i = 0; i < catArray.length; i++){
          const div = document.createElement('div');
          div.classList.add('cat-card');

          const img = document.createElement('img');
          img.classList.add('cat-picture');
          img.src = catArray[i].url;

          const h1 = document.createElement('h1');
          h1.classList.add('cat-name');
          h1.innerText = catArray[i].name;

          const h3 = document.createElement('h3');
          h3.classList.add('cat-breed-age');
          h3.innerText = `${catArray[i].breed} - ${catArray[i].age} years old`;

          const p = document.createElement('p');
          p.classList.add('cat-description');
          p.innerText = catArray[i].description;

          div.append(img, h1, h3, p);
          insertionPoint.appendChild(div);
     }
}