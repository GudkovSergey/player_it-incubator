import { playlists, subscribe } from './Data/data.js';
import { AddEditPlaylistComponent } from './UI/AddEditPlaylist/AddEditPlaylistComponent.js';
import { PlaylistsComponent } from './UI/Playlists/PlaylistsComponent.js';
import { PlaylistsHeader } from './UI/PlaylistsHeader/PlaylistsHeader.js';
import * as module from './Data/data.js';
// RENDER
const root = document.getElementById('root')

export function refresh() {
    root.innerHTML = '';
    const playlistsElement = PlaylistsComponent(module.playlists); 
    if (module.addEditPlaylistState.isActive){
    const addEditPlaylistElement = AddEditPlaylistComponent();
    root.append(addEditPlaylistElement)
    }
    root.append(PlaylistsHeader(),playlistsElement)

}
module.subscribe(refresh)
refresh();



  