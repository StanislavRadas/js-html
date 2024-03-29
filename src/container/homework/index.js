import { createHeader, createElement, createMainHeader, createHeroImg, createArticle} from '../../script/test'

const page = document.querySelector('.page')
const pageContent = document.querySelector('.page__content')
page.append(pageContent)

const header = createHeader();

pageContent.append(header)

const h1 = createElement('h1', 'text__title', 'Коммьюніті')

pageContent.append(h1)

const main = createElement('main', 'main')

pageContent.append(main)

const mainHeader = createMainHeader()

main.append(mainHeader)

const imgHero = createHeroImg()

main.append(imgHero)

const article = createArticle()

main.append(article)

const btnFooter = createElement('button', 'btn__submit', 'Перейти до комюніті у Телеграм')

main.append(btnFooter)