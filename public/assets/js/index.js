// TODO: Fetch api and display info 


// Loop that will display everything 

const object = document.querySelector('.object');

for (let i = 0; i < pokemon.length; i++) {

  // Holds all of the object content

  const figure = document.createElement('figure');
  figure.style.maxWidth = `${pokemon[i].width}px`;
  object.appendChild(figure);

  // Image Titles

  const title = document.createElement('h2');
  title.innerText = `${pokemon[i].title}`;
  figure.appendChild(title);

  // Description Added

  const description = document.createElement('h3');
  description.innerText = `${pokemon[i].description}`;
  figure.appendChild(description);

  // Wikipdia link

  const wikiLink = document.createElement('a');
  wikiLink.href = `${pokemon[i].linkURL}`;
  wikiLink.target = '_blank';
  figure.appendChild(wikiLink);

  // Image linked

  const figLinkImg = document.createElement('img');
  figLinkImg.src = `${pokemon[i].pathURL}`;
  figLinkImg.alt = `${pokemon[i].description}`;
  wikiLink.appendChild(figLinkImg);

  // Image credit added

  const figCap = document.createElement('figcaption');
  figure.appendChild(figCap);
  const figCapLink = document.createElement('a');
  figCapLink.innerText = `${pokemon[i].credit}`;
  figCap.appendChild(figCapLink);
}