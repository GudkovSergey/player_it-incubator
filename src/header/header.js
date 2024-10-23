import { liba } from "../shared/liba.js";

export function HeaderComponent() {
    const element = liba.create('header', ['header']);
    const headerButton = liba.create('button', ['headerimgButton']);

    const headerTitle = liba.create('h2', ['headerTitle']);
    headerTitle.textContent = 'InPlaylist';
    element.append(headerButton, headerTitle);
    return element;

};
