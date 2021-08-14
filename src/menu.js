import bakso from '../images/bakso.jpg';
import gadoGado from '../images/gado-gado.jpg';
import rendang from '../images/rendang.jpg';
import sate from '../images/sate-padang.jpg';

export function generateContent(){
    const menuContentContainer = document.createElement('div');
    menuContentContainer.classList.add('menu-content-container');

    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Menu';

    const foodContainer = document.createElement('div');
    for(let x = 0; x < 4; x++){
        const foodImg = new Image();
        switch (x) {
            case 0:
                foodImg.src = bakso;
                break;
            case 1:
                foodImg.src = gadoGado;
                break;
            case 2: 
                foodImg.src = rendang;
                break;
            case 3:
                foodImg.src = sate;
                break;
            default:
                break;
        }
        foodContainer.appendChild(foodImg);
    }

    menuContentContainer.append(menuHeader, foodContainer);

    return menuContentContainer;
}