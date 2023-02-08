function solve() {
    const recipientNameElement = document.getElementById('recipientName');
    const titleElement = document.getElementById('title');
    const messageElement = document.getElementById('message');

    const ulList = document.getElementById('list');
    const listMailsElement = document.querySelector('.list-mails');

    const sentMailsElement = document.querySelector('.sent-mails');
    const sentListElement = document.querySelector('.sent-list');

    const deletedMailsElement = document.querySelector('.delete');
    const deleteListElement = document.querySelector('.delete-list');

    const addBtnElement = document.getElementById('add');
    addBtnElement.addEventListener('click', add);

    const resetBtnElement = document.getElementById('reset');
    resetBtnElement.addEventListener('click', reset);

    function add(e) {
        e.preventDefault();
        let recipientName = recipientNameElement.value;
        let title = titleElement.value;
        let message = messageElement.value;

        if (!recipientName || !title || !message) {
            return;
        }

        clearElements();
        createElements(recipientName, title, message);

        function clearElements() {
            recipientNameElement.value = '';
            titleElement.value = '';
            messageElement.value = '';
        }

        function createElements(recipientName, title, message) {
            let li = document.createElement('li');

            let hFirst = document.createElement('h4');
            hFirst.textContent = `Title: ${title}`;

            let hSecond = document.createElement('h4');
            hSecond.textContent = `Recipient Name: ${recipientName}`;

            let span = document.createElement('span');
            span.textContent = message;

            let div = document.createElement('div');
            div.setAttribute('id', 'list-action');

            let buttonSend = document.createElement('button');
            buttonSend.setAttribute('type', 'submit');
            buttonSend.setAttribute('id', 'send');
            buttonSend.textContent = 'Send';
            buttonSend.addEventListener('click', send);

            let buttonDelete = document.createElement('button');
            buttonDelete.setAttribute('type', 'submit');
            buttonDelete.setAttribute('id', 'delete');
            buttonDelete.textContent = 'Delete';
            buttonDelete.addEventListener('click', deleteBtn);

            div.appendChild(buttonSend);
            div.appendChild(buttonDelete);

            li.appendChild(hFirst);
            li.appendChild(hSecond);
            li.appendChild(span);
            li.appendChild(div);

            ulList.appendChild(li);
            listMailsElement.appendChild(ulList);

            function deleteBtn(e) {
                let parentDeleteMailsElement = e.target.parentElement.parentElement;
                let currentText = parentDeleteMailsElement.children;
                let title = currentText[0].textContent.split(': ')[1];
                let recipientName = currentText[1].textContent.split(': ')[1];

                let li = document.createElement('li');

                let recipientElement = document.createElement('span');
                recipientElement.textContent = `To: ${recipientName}`;

                let titleElement = document.createElement('span');
                titleElement.textContent = `Title: ${title}`;

                li.appendChild(recipientElement);
                li.appendChild(titleElement);

                deleteListElement.appendChild(li);
                deletedMailsElement.appendChild(deleteListElement);

                parentDeleteMailsElement.remove();
            }

            function send(e) {
                let parentSentMailsElement = e.target.parentElement.parentElement;
                let currentText = parentSentMailsElement.children;
                let title = currentText[0].textContent.split(': ')[1];
                let recipientName = currentText[1].textContent.split(': ')[1];

                let li = document.createElement('li');

                let spanRecipientName = document.createElement('span');
                spanRecipientName.textContent = `To: ${recipientName}`;

                let spanTitle = document.createElement('span');
                spanTitle.textContent = `Title: ${title}`;

                let div = document.createElement('div');
                div.setAttribute('class', 'btn');

                let button = document.createElement('button');
                button.setAttribute('type', 'submit');
                button.setAttribute('class', 'delete');
                button.textContent = 'Delete';

                div.appendChild(button);

                li.appendChild(spanRecipientName);
                li.appendChild(spanTitle);
                li.appendChild(div);

                sentListElement.appendChild(li);
                sentMailsElement.appendChild(sentListElement);

                parentSentMailsElement.remove();

                button.addEventListener('click', deleteText);

                function deleteText(e) {
                    let parentSentMailsElement = e.target.parentElement.parentElement;

                    let li = document.createElement('li');

                    let recipientName = document.createElement('span');
                    recipientName.textContent = spanRecipientName.textContent;

                    let title = document.createElement('span');
                    title.textContent = spanTitle.textContent;

                    li.appendChild(recipientName);
                    li.appendChild(title);

                    deleteListElement.appendChild(li);
                    deletedMailsElement.appendChild(deleteListElement);

                    parentSentMailsElement.remove();
                }
            }
        }
    }

    function reset(e) {
        e.preventDefault();
        let parent = e.target.parentElement.parentElement.children;
        let recipientName = parent[1];
        let title = parent[3];
        let message = parent[5];

        recipientName.value = '';
        title.value = '';
        message.value = '';
    }
}
solve()