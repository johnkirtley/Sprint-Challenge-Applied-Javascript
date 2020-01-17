// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


// Axios Call for Article Content 
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // Storing Article Object Values In Variable
        const authorData = Object.values(response.data.articles);
        // Looping Through Array of Objects
        authorData.forEach(item => {
            // Looping Through Content Within Each Array
            item.forEach(content => {
                return cardsContainer.append(cardCreator(content));
            })
        })
    })
    .catch(error => {
        console.log('Failed to get author data', error);
    })


function cardCreator(data) {
    const card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgContainer = document.createElement('div'),
        authorImg = document.createElement('img'),
        authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = data.headline;
    authorImg.src = data.authorPhoto;
    authorName.textContent = data.authorName;

    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(authorImg);
    author.append(authorName);

    return card;

}

const cardsContainer = document.querySelector('.cards-container');