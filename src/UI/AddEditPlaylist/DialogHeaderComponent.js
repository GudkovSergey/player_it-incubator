import { addEditPlaylistState } from "../../Data/data.js";
import { liba } from "../../shared/liba.js";
export function dialogHeaderComponent(){
    const element = liba.create('h3');

    element.append('Add newPlaylist')
    

    return element;
}