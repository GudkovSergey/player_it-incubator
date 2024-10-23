import { TracksComponent } from './Tracks/TracksComponent.js';
import { liba } from '../../../shared/liba.js';
import { deletePlaylist } from '../../../Data/data.js';
import { PlaylistImageComponent } from './playlistImageComponent.js';



export function PlaylistComponent(inputPlaylist) {
    

    if (inputPlaylist.isActive) {
        classes.push('active');
    }

    const element = liba.create('div', ['playlist']);
    const playlistContainer = liba.create('div',['stylePlaylistContainer'])


    // todo: split into PlaylistTitleComponent
    const playlistTitleElement = liba.create('h2',['playlistsTitle']);
    
    
    const deletButtonElement = liba.create('img',['deleteButton']);
    deletButtonElement.src= './img/icons/basket.svg';
    const editButtonElement = liba.create('img', ['editButton']);
    editButtonElement.src= './img/icons/edit.svg';
    
   
    deletButtonElement.addEventListener('click',()=>{deletePlaylist(inputPlaylist.id)})
    playlistTitleElement.append(inputPlaylist.title)
    playlistContainer.append(PlaylistImageComponent(inputPlaylist.img),playlistTitleElement,editButtonElement,deletButtonElement)
    
    

    element.append(playlistContainer);

    element.append(TracksComponent(inputPlaylist.tracks));

    return element;
}
