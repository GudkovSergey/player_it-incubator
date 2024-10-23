import { createUpdatePlaylist, activateAddEditPlaylist } from "../../Data/data.js";
import { liba } from "../../shared/liba.js"

export function PlaylistsHeader() {
    const element = liba.create('div', ['playlistsHeaderContainer']);
    const myPlaylistitle = liba.create('h1', ['playlistName']);
    myPlaylistitle.append('My Playlist');
    
    const addNewPlaylistButton = liba.create('button',['addPlaylistButton']);
    addNewPlaylistButton.append('Add Playlist');
    addNewPlaylistButton.addEventListener('click', () => {
        //addPlaylist();
        activateAddEditPlaylist()
        

    })
    element.append(myPlaylistitle);
    element.append(addNewPlaylistButton)

    return element;
}