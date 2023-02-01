const toggle = document.querySelector('.nav__links');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menuLinks = document.querySelectorAll('.nav__links-items li');
const projectContainer = document.querySelector('.projects');

// Modal
const modal = document.querySelector('#modal');
const modalContent = document.querySelector('.modal-content');
const projectBtn = document.querySelector('.projects')
const closeBtn = document.querySelector('.close-btn');

// Project objects with items and description
const projectItems = [
  {
    img: 'Image 1',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.'
  },
  {
    img: 'Image 2',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.'
  },
  {
    img: 'Image 3',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.'
  },
  {
    img: 'Image 4',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.'
  },
  {
    img: 'Image 5',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.'
  },
  {
    img: 'Image 6',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'React'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.'
  },
];

// Dynamic Content 
projectItems.forEach((item) => {
  let techItems = '';
  for(let i = 0; i < item.technologies.length; i++){
    techItems += `<li><a href="#" class="card__tags-links">${item.technologies[i]}</a></li>`
  }
  const htmlContent = `
    <div class="card">
        <div class="card__img">${item.img}</div>
          <h4 class="card__title">${item.title}</h4>
            <ul class="card__tags">
              ${techItems}
            </ul>
            <button class="btn">See Project</button>
    </div>
`
    projectContainer.innerHTML += htmlContent;
})

// Open Modal
// projectBtn.addEventListener('click',(e) => {
//   const modal = document.querySelector('.modal')
//   const modalContent = document.createElement('div');
//   modalContent.classList.add('modal-content');
//   modal.appendChild(modalContent);
//   const displayModal = modalContent.innerHTML = `
//   <span class="close-btn">&times;</span>
//   <img src="./images/popupimg.png" alt="">
//   <h2>Keep track of hundreds of components</h2>
//   <ul class="card__tags">
//       <li><a href="#" class="card__tags-links">Ruby on rails</a></li>
//       <li><a href="#" class="card__tags-links">css</a></li>
//       <li><a href="#" class="card__tags-links">JavaScript</a></li>
//       <li><a href="#" class="card__tags-links">Gitlab</a></li>
//       <li><a href="#" class="card__tags-links">Terminal</a></li>
//   </ul>  
  
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.</p>
//   <button class="btn">See Live</button>
//   <button class="btn">See Source</button>
//   `
  
//   if(e.target.className == 'btn'){
//     projectItems.forEach((project) => {
//       `
//   <span class="close-btn">&times;</span>
//   <img src="./images/popupimg.png" alt="">
//   <h2>${project.img}</h2>
//   <ul class="card__tags">
//       <li><a href="#" class="card__tags-links">Ruby on rails</a></li>
//       <li><a href="#" class="card__tags-links">css</a></li>
//       <li><a href="#" class="card__tags-links">JavaScript</a></li>
//       <li><a href="#" class="card__tags-links">Gitlab</a></li>
//       <li><a href="#" class="card__tags-links">Terminal</a></li>
//   </ul>  
  
//   <p>${project.description}</p>
//   <button class="btn">See Live</button>
//   <button class="btn">See Source</button>
//   `
//     })
//     modal.style.display = 'block'
//   }
// })

// Close Modal
modal.addEventListener('click', (e) => {
  if(e.target.className == 'close-btn'){
    modal.style.display = 'none';
    modal.innerHTML = ' ';
  }
})


// Mobile Menu
hamburger.addEventListener('click', () => {
  toggle.classList.toggle('show');
  close.style.display = 'block';
});

close.addEventListener('click', () => {
  toggle.classList.remove('show');
  close.style.display = 'none';
});

menuLinks.forEach((menu) => {
  menu.addEventListener('click', () => {
    toggle.classList.remove('show');
    close.style.display = 'none';
  });
})
