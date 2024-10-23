import { playlists, subscribe } from './Data/data.js';
import { HeaderComponent } from './header/header.js';
import { AddEditPlaylistComponent } from './UI/AddEditPlaylist/AddEditPlaylistComponent.js';
import { PlaylistsComponent } from './UI/Playlists/PlaylistsComponent.js';
import { PlaylistsHeader } from './UI/PlaylistsHeader/PlaylistsHeader.js';
import * as module from './Data/data.js';
// RENDER
const root = document.getElementById('root');
root.classList.add('root');

export function refresh() {
    root.innerHTML = '';
// <<<<<<< HEAD
//     const playlistsElement = PlaylistsComponent(playlists);
//     const addEditPlaylistElement = AddEditPlaylistComponent();
//     root.append(
//         HeaderComponent(),
//         PlaylistsHeader(),
//         playlistsElement,
//         addEditPlaylistElement
//     )
// =======
    const playlistsElement = PlaylistsComponent(module.playlists); 
    if (module.addEditPlaylistState.isActive){
    const addEditPlaylistElement = AddEditPlaylistComponent();
    root.append(addEditPlaylistElement)
    }
    root.append(HeaderComponent(),PlaylistsHeader(),playlistsElement)


}
module.subscribe(refresh)
refresh();



