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

const MAIN_HEADER_LIST = [
    {
        className: 'btn-content',
        text: 'База знань',
    },
    {
        className: 'btn-content--checked',
        text: 'Інформація',
    }
]

export const createMainHeader = () => {
    const mainHeader = createElement('div', 'main__header')
    MAIN_HEADER_LIST.forEach((btn) => {
        const btnMainHead = createElement('button', `${btn.className}`, `${btn.text}`);
        mainHeader.append(btnMainHead)
        if (btn.className === 'btn-content--checked') {
            btnMainHead.classList.add('btn-content--checked');
        }
    })
    return mainHeader
}

const HERO_IMG = [
    {
        src: '/img/hero.png',
        alt: 'photo',
    }
]

export const createHeroImg = () => {
    const heroImage = createElement('img')
    HERO_IMG.forEach((params) => {
        Object.entries(params).forEach(([key, value]) => {
            heroImage[key] = value
        })
    })

    return heroImage
}

const ARTICLE_BLOCK = [
    {
        className: 'article__title',
        text: 'Що таке база знань?',
    },
    {
        className: 'article__text',
        text: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
    }
]

export const createArticle = () => {
    const articleElem = createElement('div', 'article')
    ARTICLE_BLOCK.forEach((paragraph) => {
        if (paragraph.className === 'article__title') {
            const parTitle = createElement('p', `${paragraph.className}`, `${paragraph.text}`);
            articleElem.append(parTitle);
        }
        else if (paragraph.className === 'article__text') {
            const parText = createElement('p', `${paragraph.className}`, `${paragraph.text}`);
            articleElem.append(parText);
        }
    })
    return articleElem
}