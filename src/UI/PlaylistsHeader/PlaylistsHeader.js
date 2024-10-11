import { addPlaylist } from "../../Data/data.js";
import { liba } from "../../shared/liba.js"

export function PlaylistsHeader() {
    const element = liba.create('div');
    const addNewPlaylistButton = liba.create('button');
    addNewPlaylistButton.append('Add new Playlist');
    addNewPlaylistButton.addEventListener('click', () => {
        addPlaylist();
        

    })
    element.append(addNewPlaylistButton)

    return element;
}