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

// Modal Content
// const img = document.querySelector('')
const modalImage = document.querySelector('#modal-image')
const modalTitle = document.querySelector('#modal-title')
const modalTags = document.querySelector('#tag-content')
const modalDescription = document.querySelector('#description')

// Project objects with items and description
const projectItems = [
  {
    id: 1,
    img: 'Image 1',
    title: 'Multi-Post Stories Gain+Glory 1',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.',
    buttonText: 'See Project'
  },
  {
    id: 2,
    img: 'Image 2',
    title: 'Multi-Post Stories Gain+Glory 2',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.',
    buttonText: 'See Project'
  },
  {
    id: 3,
    img: 'Image 3',
    title: 'Multi-Post Stories Gain+Glory 3',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'git'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.',
    buttonText: 'See Project'
  },
  {
    id: 4,
    img: 'Image 4',
    title: 'Multi-Post Stories Gain+Glory 4',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.',
    buttonText: 'See Project'
  },
  {
    id: 5,
    img: 'Image 5',
    title: 'Multi-Post Stories Gain+Glory 5',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.',
    buttonText: 'See Project'
  },
  {
    id: 6,
    img: 'Image 6',
    title: 'Multi-Post Stories Gain+Glory 6',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'React'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.',
    buttonText: 'See Project'
  },
];

// Dynamic Content 
projectItems.forEach((item,index) => {
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
            <button class="btn" id=${index}>${item.buttonText}</button>
    </div>
`
    projectContainer.innerHTML += htmlContent;
})

// Open Modal
projectBtn.addEventListener('click',(e) => {
  // Technology tags
  let techTags = '';
  
  // Creates dynamic modal content
  for(let i = 0; i < projectItems.length; i++){
      modalImage.textContent = projectItems[e.target.id].img
      console.log(projectItems[e.target.id].img)
      modalTitle.textContent = projectItems[e.target.id].title;
      modalDescription.textContent = projectItems[e.target.id].description;
      
    }

    // Creates Dynamic modal content for tags
  for(let j = 0; j < projectItems[e.target.id].technologies.length; j++){
      techTags += `<li><a href="#" class="card__tags-links">${projectItems[e.target.id].technologies[j]}</a></li>`;
      modalTags.innerHTML = techTags;
  }
  modal.style.display = 'block';
})

// Close Modal
modal.addEventListener('click', (e) => {
  if(e.target.className == 'close-btn'){
    modal.style.display = 'none';
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
