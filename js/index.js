function elements(element, className = '', TextContent = '') {
  const elements = document.createElement(element)

  if(className) {
    elements.className = className
  }

  if(TextContent && typeof TextContent === 'string') {
    elements.textContent = TextContent
    return elements
  } else if(TextContent) {
    elements.append(TextContent)
    return elements
  }
  return elements
}

const list = document.querySelector('.movies__list')
const bombosh = document.createDocumentFragment()

for (i = 0; i <= films.length - 1; i++) {
    const item = elements('li', 'movies__item movie-card',)
    const img = elements('img', 'movie-card__poster')
    img.src = films[i].poster
    const kinoCard = elements('div', 'movie-card__content',)
    const movioTitle = elements('h3','movie-card__title')
    const movioLInk = elements('a', 'movie-card__link', films[i].title)
    const movieText = elements('p', 'movie-card__overview', films[i].overview)
    const cardList = elements('ul', 'movie-card__genres', '')

    for(let j = 0; j < films[i].genres.length; j++) {
        const itemde = elements('li', 'movie-card__genre badge', films[i].genres[j])
        cardList.append(itemde)
    }
    
    const time = elements('time', 'movie-card__release-date', films[i].release_date)
    movioTitle.append(movioLInk)
    kinoCard.append(movioTitle, movieText, cardList, time)
    item.append(img, kinoCard)
    bombosh.append(item)
}
list.append(bombosh)




const forms = document.querySelector('.site-header__form')
const select = document.querySelector('.filter-form__select')
function fun(event) {
    event.preventDefault()
     for (i = 0; i <= films.length -1; i++) {

        if(!films[i].genres.includes(select.value)) {
            continue
        }   
        const item = elements('li', 'movies__item movie-card',)
        const img = elements('img', 'movie-card__poster')
        img.src = films[i].poster
        const kinoCard = elements('div', 'movie-card__content',)
        const movioTitle = elements('h3','movie-card__title')
        const movioLInk = elements('a', 'movie-card__link', films[i].title)
        const movieText = elements('p', 'movie-card__overview', films[i].overview)
        const cardList = elements('ul', 'movie-card__genres',)
        for(let j = 0; j < films[i].genres.length; j++) {
        const itemde = elements('li', 'movie-card__genre badge', films[i].genres[j])
        cardList.append(itemde)
        }
        const time = elements('time', 'movie-card__release-date', films[i].release_date)
        movioTitle.append(movioLInk)
        kinoCard.append(movioTitle, movieText, cardList, time)
        item.append(img, kinoCard)
        bombosh.append(item)
    }
    list.innerHTML = ''
    list.append(bombosh)
    if(select.value == 'All'){
        for (i = 0; i <= films.length - 1; i++) {
            const item = elements('li', 'movies__item movie-card',)
            const img = elements('img', 'movie-card__poster')
            img.src = films[i].poster
            const kinoCard = elements('div', 'movie-card__content',)
            const movioTitle = elements('h3','movie-card__title')
            const movioLInk = elements('a', 'movie-card__link', films[i].title)
            const movieText = elements('p', 'movie-card__overview', films[i].overview)
            const cardList = elements('ul', 'movie-card__genres', '')
        
            for(let j = 0; j < films[i].genres.length; j++) {
                const itemde = elements('li', 'movie-card__genre badge', films[i].genres[j])
                cardList.append(itemde)
            }
            
            const time = elements('time', 'movie-card__release-date', films[i].release_date)
            movioTitle.append(movioLInk)
            kinoCard.append(movioTitle, movieText, cardList, time)
            item.append(img, kinoCard)
            bombosh.append(item)
        }
        list.append(bombosh)
    }
}
forms.addEventListener('submit', fun)

for(let i = 0; i < genres.length; i++) {
    const options = elements('option','', genres[i].name)
    options.value = genres[i].name
    select.append(options)
}