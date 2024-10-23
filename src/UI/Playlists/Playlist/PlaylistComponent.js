import { TracksComponent } from './Tracks/TracksComponent.js';
import { liba } from '../../../shared/liba.js';

//import { deletePlaylist } from '../../../Data/data.js';
import { PlaylistImageComponent } from './playlistImageComponent.js';

import { activateAddEditPlaylist, deletePlaylist } from '../../../Data/data.js';




export function PlaylistComponent(inputPlaylist) {
    

    if (inputPlaylist.isActive) {
        classes.push('active');
    }

    const element = liba.create('div', ['playlist']);
    const playlistContainer = liba.create('div',['stylePlaylistContainer'])


    
   
    
    
    
   
    
    const editButtonElement = liba.create('img', ['editButton']);
    editButtonElement.src= './img/icons/edit.svg';
    
    editButtonElement.addEventListener('click',()=>{activateAddEditPlaylist(inputPlaylist.id)})
    const playlistTitleElement = liba.create('h2',['playlistsTitle']);
    playlistTitleElement.append(inputPlaylist.title,'-',inputPlaylist.id);

    const deletButtonElement = liba.create('img',['deleteButton']);
    deletButtonElement.src= './img/icons/basket.svg';
    
    deletButtonElement.addEventListener('click',()=>{deletePlaylist(inputPlaylist.id)})
    playlistTitleElement.append(inputPlaylist.title)
    playlistContainer.append(PlaylistImageComponent(inputPlaylist.img),playlistTitleElement,editButtonElement,deletButtonElement)
    
    


    element.append(playlistContainer);

   

    


    element.append(TracksComponent(inputPlaylist.tracks));

    return element;
}
