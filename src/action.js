const pets = [{ name: "mark", desc1: "golden Retriever", desc2: "New York,NY", image: "img-pets/dog11.jpg" },
    {name: "spicy", description: "golden",desc2: "casa-clanca", image: "img-pets/DOG22.jpeg" },
    {name: "luffy", description: "golde", desc2: "New York,NY", image: "img-pets/dog-3.jpg" },
    {name: "doraimon", description: "golde", desc2: "New York,NY", image: "img-pets/dog-4.webp" },
    {name: "macha", description: "golde", desc2: "New York,NY", image: "img-pets/dog-5.jpeg" },
    {name: "mery", description: "golde", desc2: "New York,NY", image: "img-pets/dog-6.jpg" }
];  

let index = 0;
let adoptedPets = [];

function displayPet() {
  const petCard = document.getElementById('pet-card');
  if (index < pets.length) {
    const pet = pets[index];
  petCard.innerHTML = `
    <img src="${pet.image}" alt="smiling-dog" class="w-auto">
      <h1 class="text-black font-bold text-2xl">${pet.name}</h1>
      <h2 class="text-gray-500"> Bread: <span class="text-black font-bold" id="Bread">${pet.desc1}</span></h2>
      <h2 class="text-gray-500"> Location: <span class="text-black font-bold">${pet.desc2}</h2> 
    `;
  } else {
    alert(' ops! no more pets:)');
      return false;
    // petCard.innerHTML = "<p class='ph'>dépasser les animaux disponibles.</p>";
  }
}

function adoptPet() {
  if (index < pets.length) {
    adoptedPets.push(pets[index]);
  }
  nextPet();
}

function nextPet() {
  index++;
  displayPet();
}

function skipPet(){
  if (index < pets.length) {
    adoptedPets.push(pets[index]);
  }
 skip();
}

function skip(){
  index--;
  displayPet();
}

document.getElementById('like-button').addEventListener('click', adoptPet);
document.getElementById('skip-button').addEventListener('click', skipPet);


displayPet();