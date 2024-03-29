import { createHeader, createElement, createCard, createCardViewed } from '../../script/layout'

const page = document.querySelector('.page')
const pageContent = document.querySelector('.page__content')
page.append(pageContent)

const header = createHeader();

pageContent.append(header)

const h1 = createElement('h1', 'text__title', 'Мій блог')

pageContent.append(h1)

const main = createElement('main', 'content')

pageContent.append(main)

const cardContent = createElement('div', 'content__cards')

main.append(cardContent)

const cardBody = createCard()

cardContent.append(cardBody)

const cardViewed = createCardViewed()

cardContent.append(cardViewed)
