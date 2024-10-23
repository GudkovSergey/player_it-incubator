import { createUpdatePlaylist, addEditPlaylistState, deactivateAddEditPlaylist} from "../../Data/data.js";
import { liba } from "../../shared/liba.js";

export function dialogButtonComponent(){
    const element = liba.create('div');

    const cancelButtonElement = liba.create('button');
    cancelButtonElement.append('Cancel')
    cancelButtonElement.addEventListener('click', ()=>{
        deactivateAddEditPlaylist()
    })
    const createButtonElement = liba.create('button');
    createButtonElement.append(addEditPlaylistState.id ? 'Save' : 'Create')

    if(addEditPlaylistState.newTitle ===''){
        createButtonElement.disabled = true;
    }
    createButtonElement.addEventListener('click', ()=>{
        try{
        createUpdatePlaylist()
        }catch (error) {
            alert (error)
        }
    })
    element.append(createButtonElement,cancelButtonElement)
    

    return element;
}