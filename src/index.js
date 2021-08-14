import background from '../images/background.jpg';
import './style.css';
import * as home from './home.js';
import * as menu from './menu.js';
import * as contact from './contact.js';

const contentContainer = document.getElementById('content');
const tabContent = document.createElement('div');
tabContent.classList.add('tab-content');
function createHero() {
    const tabName = ['Home', 'Menu', 'Contact'];

    const heroContainer = document.createElement('div');
    heroContainer.classList.add('hero-container');

    const backgroundImage = new Image();
    backgroundImage.src = background;

    const headerText = document.createElement('h1');
    headerText.textContent = 'Restaurant';

    const tabContainer = document.createElement('div');
    tabContainer.classList.add('tab-container');
    
    for(let x = 0; x < tabName.length; x++){
        const tab = createTab(tabName[x]);
        tab.addEventListener('click', e => {
            let elem;
            document.querySelector('.tab-content').remove();
            switch (x) {
                case 0:
                    elem = home.generateContent();
                    break;
                case 1:
                    elem = menu.generateContent();
                    break;
                case 2:
                    elem = contact.generateContent();
                    break;
                default:
                    break;
            }
            const newTabContent = document.createElement('div');
            newTabContent.classList.add('tab-content');
            newTabContent.append(elem);

            contentContainer.append(newTabContent);
        })


        tabContainer.appendChild(tab);
    }

    heroContainer.append(backgroundImage, headerText, tabContainer);

    return heroContainer;
}

function createTab(name){
    const newTab = document.createElement('div');
    newTab.classList.add('tab');
    
    const tabParagraph = document.createElement('p');
    tabParagraph.textContent = name;

    newTab.appendChild(tabParagraph);

    return newTab;
}


window.addEventListener('load', () => {
    tabContent.append(home.generateContent());
    contentContainer.append(createHero(), tabContent);
})
