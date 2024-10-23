import { liba } from "../../../shared/liba.js";

export function PlaylistImageComponent(inputImg) {
    const element = liba.create('img', ['imgStyle']);
    element.src = inputImg;
    return element;
}