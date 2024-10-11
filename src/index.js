import { playlists, subscribe } from './Data/data.js';
import { AddEditPlaylistComponent } from './UI/AddEditPlaylist/AddEditPlaylistComponent.js';
import { PlaylistsComponent } from './UI/Playlists/PlaylistsComponent.js';
import { PlaylistsHeader } from './UI/PlaylistsHeader/PlaylistsHeader.js';
// RENDER
const root = document.getElementById('root')

export function refresh() {
    root.innerHTML = '';
    const playlistsElement = PlaylistsComponent(playlists); 
    const addEditPlaylistElement = AddEditPlaylistComponent();
    root.append(PlaylistsHeader(),playlistsElement,addEditPlaylistElement)

}
subscribe(refresh)
refresh();



  