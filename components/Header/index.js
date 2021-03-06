// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('div'),
        date = document.createElement('span'),
        title = document.createElement('h1'),
        temperature = document.createElement('span')

    header.classList.add('header');
    date.classList.add('date');
    temperature.classList.add('temp');

    date.textContent = new Date().toDateString()
    title.textContent = 'Newsfeed';
    temperature.textContent = '98°';

    header.append(date);
    header.append(title);
    header.append(temperature);

    return header;
}

const headerContainer = document.querySelector('.header-container');

headerContainer.append(Header());