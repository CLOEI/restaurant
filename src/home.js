export function generateContent(){
    const homeContentContainer = document.createElement('div');
    homeContentContainer.classList.add('home-content-container');

    const homeHeader = document.createElement('h2');
    homeHeader.textContent = 'About us';

    const homeParagraph = document.createElement('p');
    homeParagraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    homeContentContainer.append(homeHeader, homeParagraph);

    return homeContentContainer;
}