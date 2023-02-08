function solve() {

   let creatorElement = document.getElementById('creator');
   let titleElement = document.getElementById('title');
   let categoryElement = document.getElementById('category');
   let contentElement = document.getElementById('content');

   let createButton = document.querySelector('.btn.create');
   createButton.addEventListener('click', create);

   function create(e) {
      e.preventDefault();

      let siteContent = document.querySelector('.site-content main section');
      let article = document.createElement('article');

      let h = document.createElement('h1');
      h.textContent = titleElement.value;
      article.appendChild(h);

      let categoryP = document.createElement('p');
      categoryP.textContent = 'Category:';
      let strongCategory = document.createElement('strong');
      strongCategory.textContent = categoryElement.value;
      categoryP.appendChild(strongCategory);
      article.appendChild(categoryP);

      let creatorP = document.createElement('p');
      creatorP.textContent = 'Creator:';
      let strongCreator = document.createElement('strong');
      strongCreator.textContent = creatorElement.value;
      creatorP.appendChild(strongCreator);
      article.appendChild(creatorP);

      let contentP = document.createElement('p');
      contentP.textContent = contentElement.value;
      article.appendChild(contentP);

      let div = document.createElement('div');
      div.classList.add('buttons');

      let buttonDelete = document.createElement('button');
      buttonDelete.classList.add('btn', 'delete');
      buttonDelete.textContent = 'Delete';
      buttonDelete.addEventListener('click', deleteArticle);
      div.appendChild(buttonDelete);

      let buttonArchive = document.createElement('button');
      buttonArchive.classList.add('btn', 'archive');
      buttonArchive.textContent = 'Archive';
      buttonArchive.addEventListener('click', arhive);
      div.appendChild(buttonArchive);

      article.appendChild(div);

      siteContent.appendChild(article);

      creatorElement.value = '';
      titleElement.value = '';
      categoryElement.value = '';
      contentElement.value = '';

      function arhive(e) {
         let archiveSection = document.querySelector('.archive-section ol');

         let parentArhive = e.target.parentElement.parentElement;
         let child = parentArhive.children;
         let title = child[0].textContent;

         let listTitle = Array.from(archiveSection.querySelectorAll('li'));

         let li = document.createElement('li');
         li.textContent = title;

         listTitle.push(li);
         listTitle.sort((a, b) => a.textContent.localeCompare(b.textContent));         
         
         for (let title of listTitle) {
            archiveSection.appendChild(title);
         }

         parentArhive.remove();
      }

      function deleteArticle(e) {
         let deleteArticle = e.target.parentElement.parentElement;

         deleteArticle.remove();         
      }
   }
}
