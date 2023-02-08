window.addEventListener("load", solve);

function solve() {
  const publishBtnElement = document.getElementById('publish-btn');
  publishBtnElement.addEventListener('click', publish);

  const titleElement = document.getElementById('post-title');
  const categoryElement = document.getElementById('post-category');
  const contentElement = document.getElementById('post-content');

  const publishedListElement = document.getElementById('published-list');
  const clearBtnElement = document.getElementById('clear-btn');

  function publish(e) {
    let title = titleElement.value;
    let category = categoryElement.value;
    let content = contentElement.value;

    if (!title || !category || !content) {
      return;
    }

    createElements(title, category, content);

    function createElements(title, category, content) {
      let ul = document.getElementById('review-list');

      let li = document.createElement('li');
      li.className = 'rpost';

      let article = document.createElement('article');

      let hTitle = document.createElement('h4');
      hTitle.textContent = title;

      let pContent = document.createElement('p');
      pContent.textContent = `Category: ${category}`;

      let pCategory = document.createElement('p');
      pCategory.textContent = `Content: ${content}`;

      let buttonEdit = document.createElement('button');
      buttonEdit.className = 'action-btn edit';
      buttonEdit.textContent = 'Edit';

      let buttonApprove = document.createElement('button');
      buttonApprove.className = 'action-btn approve';
      buttonApprove.textContent = 'Approve';

      article.appendChild(hTitle);
      article.appendChild(pContent);
      article.appendChild(pCategory);

      li.appendChild(article);
      li.appendChild(buttonEdit);
      li.appendChild(buttonApprove);
      ul.appendChild(li);

      titleElement.value = '';
      categoryElement.value = '';
      contentElement.value = '';

      buttonEdit.addEventListener('click', edit);

      function edit(e) {
        let parent = e.target.parentElement;

        titleElement.value = title;
        categoryElement.value = category;
        contentElement.value = content;

        parent.remove();
      }

      buttonApprove.addEventListener('click', approve);

      function approve(e) {
        let parent = e.target.parentElement;
        publishedListElement.appendChild(parent);

        buttonEdit.remove();
        buttonApprove.remove(); 
      }
    }

    clearBtnElement.addEventListener('click', clearElements);

    function clearElements(e) {
      Array.from(publishedListElement.children).forEach(child => child.remove());
    }
  }
}