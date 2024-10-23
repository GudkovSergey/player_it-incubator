import { playlists, subscribe } from './Data/data.js';
import { HeaderComponent } from './header/header.js';
import { AddEditPlaylistComponent } from './UI/AddEditPlaylist/AddEditPlaylistComponent.js';
import { PlaylistsComponent } from './UI/Playlists/PlaylistsComponent.js';
import { PlaylistsHeader } from './UI/PlaylistsHeader/PlaylistsHeader.js';
// RENDER
const root = document.getElementById('root');
root.classList.add('root');

export function refresh() {
    root.innerHTML = '';
    const playlistsElement = PlaylistsComponent(playlists);
    const addEditPlaylistElement = AddEditPlaylistComponent();
    root.append(
        HeaderComponent(),
        PlaylistsHeader(),
        playlistsElement,
        addEditPlaylistElement
    )

}
subscribe(refresh)
refresh();



