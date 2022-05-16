const main = document.getElementById('main');

function getArticlesFromServer() {
    fetch('http://localhost:3000/articles')
        .then(function (response) {
            response.json().then(function (articles) {
                renderArticles(articles);
            });
        });
};

function renderArticles(articles) {
    
    removeOldArticlesFromDOM();

    for (let i = 0; i < articles.length; i++) {
        let articleDOMNode = createArticleDOMNode(articles[i]);
        main.appendChild(articleDOMNode);
    }
}

function removeOldArticlesFromDOM () {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

function createArticleDOMNode(article) {

    let title = document.createElement('h1');
    title.className = "title";
    title.textContent = article.title;

    let header = document.createElement('header');
    header.className="header";
    header.appendChild(title);
    
    let tag = document.createElement('span');
    tag.className = "destination";
    tag.textContent = article.tag;
    
    let author = document.createElement('span');
    author.className = "author";
    author.textContent = article.author;

    let added = document.createElement('span');
    added.className = "added";
    added.textContent = 'Added By ';
    added.appendChild(author)

    let date = document.createElement('span');
    date.className = "date";
    date.textContent = article.date;

    let subHeader = document.createElement('div');
    subHeader.className = "sub-header";
    subHeader.appendChild(tag);
    subHeader.appendChild(added);
    subHeader.appendChild(date);

    let editButton = document.createElement('a');
    editButton.className = "edit-item";
    editButton.textContent = 'Edit';


    let deleteButton = document.createElement('a');
    deleteButton.className = "delete-item";
    deleteButton.textContent = 'Delete';

    let editDeleteButtons = document.createElement('div');
    editDeleteButtons.className = "edit-delete";
    editDeleteButtons.appendChild(editButton);
    editDeleteButtons.appendChild(deleteButton);

    let img = document.createElement('img');
    img.src = article.imgUrl;
    
    let imgContainer = document.createElement('div');
    imgContainer.className="image";
    imgContainer.appendChild(img);
   
    let paragraph = document.createElement('p');
    paragraph.className="par-text";
    paragraph.textContent = article.content;

    let paragraphContainer = document.createElement('div');
    paragraphContainer.className = "paragraph";
    paragraphContainer.appendChild(paragraph);

    let Node = document.createElement('div');
    Node.appendChild(header);
    Node.appendChild(subHeader);
    Node.appendChild(editDeleteButtons);
    Node.appendChild(imgContainer);
    Node.appendChild(paragraphContainer);
    
    return Node;
    
}
getArticlesFromServer();
