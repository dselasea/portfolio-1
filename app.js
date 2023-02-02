const toggle = document.querySelector('.nav__links');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menuLinks = document.querySelectorAll('.nav__links-items li');
const projectContainer = document.querySelector('.projects');

// Modal
const modal = document.querySelector('#modal');
const projectBtn = document.querySelector('.projects');

// Modal Content
const modalImage = document.querySelector('#modal-image');
const modalTitle = document.querySelector('#modal-title');
const modalTags = document.querySelector('#tag-content');
const modalDescription = document.querySelector('#description');

// Form
const form = document.querySelector('#form');
const stname = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const valid = document.querySelector('.valid');

// Project objects with items and description
const projectItems = [
  {
    id: 1,
    img: './images/snapshotdesktop.png',
    title: 'Multi-Post Stories Gain+Glory 1',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.',
    buttonText: 'See Project',
  },
  {
    id: 2,
    img: './images/snapshotdesktop.png',
    title: 'Multi-Post Stories Gain+Glory 2',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.',
    buttonText: 'See Project',
  },
  {
    id: 3,
    img: './images/snapshotdesktop.png',
    title: 'Multi-Post Stories Gain+Glory 3',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'git'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.',
    buttonText: 'See Project',
  },
  {
    id: 4,
    img: './images/snapshotdesktop.png',
    title: 'Multi-Post Stories Gain+Glory 4',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.',
    buttonText: 'See Project',
  },
  {
    id: 5,
    img: './images/snapshotdesktop.png',
    title: 'Multi-Post Stories Gain+Glory 5',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.',
    buttonText: 'See Project',
  },
  {
    id: 6,
    img: './images/snapshotdesktop.png',
    title: 'Multi-Post Stories Gain+Glory 6',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'React'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed labore maxime neque, omnis at soluta eius quo non, dolorum amet a fuga aspernatur aliquam modi odit, tempore perspiciatis architecto! Assumenda nostrum veniam ab cupiditate, error quidem numquam voluptas? Consequatur alias repudiandae architecto beatae doloremque dolor sit, eveniet delectus corrupti.',
    buttonText: 'See Project',
  },
];

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
});

// Dynamic Content
projectItems.forEach((item, index) => {
  let techItems = '';
  for (let i = 0; i < item.technologies.length; i += 1) {
    techItems += `<li><a href="#" class="card__tags-links">${item.technologies[i]}</a></li>`;
  }
  const htmlContent = `
    <div class="card">
        <div class="card__img"></div>
          <h4 class="card__title">${item.title}</h4>
            <ul class="card__tags">
              ${techItems}
            </ul>
            <button class="btn" id=${index}>${item.buttonText}</button>
    </div>
`;
  projectContainer.innerHTML += htmlContent;
});

// Open Modal
projectBtn.addEventListener('click', (e) => {
  // Technology tags
  let techTags = '';
  // Creates dynamic modal content
  for (let i = 0; i < projectItems.length; i += 1) {
    modalImage.style.backgroundImage = `url(${projectItems[e.target.id].img})`;
    modalTitle.textContent = projectItems[e.target.id].title;
    modalDescription.textContent = projectItems[e.target.id].description;
    console.log(e.target.id);
  }

  // Creates Dynamic modal content for tags
  for (let j = 0; j < projectItems[e.target.id].technologies.length; j += 1) {
    techTags += `<li><a href="#" class="card__tags-links">${projectItems[e.target.id].technologies[j]}</a></li>`;
    modalTags.innerHTML = techTags;
  }
  modal.style.display = 'block';
});

// Close Modal
modal.addEventListener('click', (e) => {
  if (e.target.className === 'close-btn') {
    modal.style.display = 'none';
  }
});

// Form Validation
form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    valid.style.visibility = 'visible';
    event.preventDefault();
  } else {
    valid.style.visibility = 'hidden';
    stname.value = '';
    email.value = '';
  }
});

// Local Storage

window.addEventListener('beforeunload', () => {
  const userForm = {
    fullName: stname.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('formData', JSON.stringify(userForm));
});
