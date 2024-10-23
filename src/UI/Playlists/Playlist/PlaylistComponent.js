import { TracksComponent } from './Tracks/TracksComponent.js';
import { liba } from '../../../shared/liba.js';
import { activateAddEditPlaylist, deletePlaylist } from '../../../Data/data.js';



export function PlaylistComponent(inputPlaylist) {
    const classes = ['playlist'];

    if (inputPlaylist.isActive) {
        classes.push('active');
    }

    const element = liba.create('div', classes);

    // todo: split into PlaylistTitleComponent
    const playlistTitleElement = document.createElement('h2');
    playlistTitleElement.append(inputPlaylist.title,'-',inputPlaylist.id);

    const deletButtonElement = liba.create('button');
    deletButtonElement.append('❌');
    deletButtonElement.addEventListener('click',()=>{deletePlaylist(inputPlaylist.id)})

    const editButtonElement = liba.create('button');
    editButtonElement.append('✏️');
    editButtonElement.addEventListener('click',()=>{activateAddEditPlaylist(inputPlaylist.id)})

    element.append(editButtonElement,deletButtonElement,playlistTitleElement);

    element.append(TracksComponent(inputPlaylist.tracks));

    return element;
}
