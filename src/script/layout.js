export const createElement = (tag, className, text) => {
    const elem = document.createElement(tag)

    if (className) {
        elem.className = className
    }

    if (text) {
        elem.innerHTML = text
    }

    return elem
}

const HEADER_BUTTON_LIST = [
    {
        src: '/svg/back.svg',
        alt: 'photo',
    },
    {
        src: '/img/profil.png',
        alt: 'photo',
    }
]

export const createHeader = () => {
    const header = createElement('header', 'header');
    HEADER_BUTTON_LIST.forEach((params) => {
        const button = createElement('button', 'button')
        const img = createElement('img')
        Object.entries(params).forEach(([key, value]) => {
            img[key] = value
        })
        button.append(img)
        header.append(button)
    })
    return header
}

export const createCard = () => {
    const cardBody = createElement('div', 'card__body')
    const cardHeader = createElement('div', 'card__header')
    cardBody.append(cardHeader)
    const badge = createElement('div', 'badge')
    cardHeader.append(badge)
    const important = createElement('span', 'important', 'Важливо')
    badge.append(important)
    const newB = createElement('span', 'new', 'Нова')
    badge.append(newB)
    const date = createElement('div', 'date__text', '25.01')
    cardHeader.append(date)
    const cardArticle = createElement('div', 'card__article')
    cardBody.append(cardArticle)
    const article = createElement('p', 'card__text', 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс')
    cardArticle.append(article)
    return cardBody
}

export const createCardViewed = () => {
    const cardBodyView = createElement('div', 'card__body__viewed');
    const cardHeader = createElement('div', 'card__header');
    cardBodyView.append(cardHeader);
    const badge = createElement('div', 'badge');
    cardHeader.append(badge);
    const important = createElement('span', 'important', 'Важливо');
    badge.append(important);
    const newB = createElement('span', 'new', 'Нова');
    badge.append(newB);
    const date = createElement('div', 'date__text', '15.01');
    cardHeader.append(date);
    const cardArticle = createElement('div', 'card__article');
    cardBodyView.append(cardArticle);
    const article = createElement('p', 'card__text', 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.');
    cardArticle.append(article);
    return cardBodyView;
}