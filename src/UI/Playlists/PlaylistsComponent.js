import { PlaylistComponent } from './Playlist/PlaylistComponent.js';
import { PlaylistImageComponent } from './Playlist/playlistImageComponent.js';

// components
export function PlaylistsComponent(inputPlaylists) {
    const element = document.createElement('div');
    element.classList.add('playlistsComponent');

    for (let i = 0; i < inputPlaylists.length; i++) {
        const playlist = inputPlaylists[i];
        element.append(PlaylistComponent(playlist));
    }

    return element;
}
