import {playlists} from './Data/data.js';
import { PlaylistsComponent } from './UI/Playlists/PlaylistsComponent.js';
// RENDER
const root = document.getElementById('root')
const playlistsElement = PlaylistsComponent(playlists)
root.append(playlistsElement)



