window.addEventListener("load", solve);

function solve() {
  let firstNameElement = document.getElementById('first-name');
  let lastNameElement = document.getElementById('last-name');
  let ageElement = document.getElementById('age');
  let storyTitleElement = document.getElementById('story-title');
  let genreElement = document.getElementById('genre');
  let storyElement = document.getElementById('story');

  let publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', publish);

  function publish(e) {
    let firstName = firstNameElement.value;
    let lastName = lastNameElement.value;
    let age = ageElement.value;
    let storyTitle = storyTitleElement.value;
    let genre = genreElement.textContent;
    let storyText = storyElement.value;

    if (!firstName || !lastName || !age || !storyTitle || !storyText) {
      return;
    }

    let previewList = document.getElementById('preview-list');

    let li = document.createElement('li');
    li.classList.add('story-info');

    let article = document.createElement('article');

    let h = document.createElement('h4');
    h.textContent = `Name: ${firstName} ${lastName}`;
    article.appendChild(h);

    let pAge = document.createElement('p');
    pAge.textContent = `Age: ${age}`;
    article.appendChild(pAge);

    let pTitle = document.createElement('p');
    pTitle.textContent = `Title: ${storyTitle}`;
    article.appendChild(pTitle);

    let pGenre = document.createElement('p');
    pGenre.textContent = `Genre: ${genre}`;
    article.appendChild(pGenre);

    let pText = document.createElement('p');
    pText.textContent = storyText;
    article.appendChild(pText);

    let buttonSave = document.createElement('button');
    buttonSave.classList.add('save-btn');
    buttonSave.textContent = 'Save Story';
    buttonSave.enabled = true;
    buttonSave.addEventListener('click', save);

    let buttonEdit = document.createElement('button');
    buttonEdit.classList.add('edit-btn');
    buttonEdit.textContent = 'Edit Story';
    buttonEdit.enabled = true;
    buttonEdit.addEventListener('click', edit);

    let buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete-btn');
    buttonDelete.textContent = 'Delete Story';
    buttonDelete.enabled = true;
    buttonDelete.addEventListener('click', deleteText);

    li.appendChild(article);
    li.appendChild(buttonSave);
    li.appendChild(buttonEdit);
    li.appendChild(buttonDelete);

    previewList.appendChild(li);

    publishBtn.disabled = true;

    firstNameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    storyTitleElement.value = '';
    storyElement.value = '';

    function edit(e) {
      let parentEdit = e.target.parentElement;

      firstNameElement.value = firstName;
      lastNameElement.value = lastName;
      ageElement.value = age;
      storyTitleElement.value = storyTitle;
      storyElement.value = storyText;

      publishBtn.disabled = false;
      parentEdit.remove();
    }

    function save(e) {
      let formWrapper = document.querySelector('.form-wrapper');
      let sideWrapper = document.getElementById('side-wrapper');
      
      let div = document.getElementById('main');

      let h = document.createElement('h1');
      h.textContent = `Your scary story is saved`;
      div.appendChild(h);

      formWrapper.remove();
      sideWrapper.remove();
    }

    function deleteText(e) {
      let storyInfo = document.querySelector('.story-info');
     
      publishBtn.disabled = false;
      storyInfo.remove();
    }
  }
}
