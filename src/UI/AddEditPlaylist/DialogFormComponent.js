import { addEditPlaylistState, setNewTitle } from "../../Data/data.js";
import { liba } from "../../shared/liba.js";

export function dialogFormComponent(){
    const element = liba.create('form');

    const playlistNameElement =liba.create('input')

    playlistNameElement.addEventListener('input', ()=>{
        setNewTitle(playlistNameElement.value)
    })

    playlistNameElement.value = addEditPlaylistState.newTitle
    setTimeout(()=>{
        playlistNameElement.focus()
    },0)
    
    //const playImageSrcElement =liba.create('input')
    element.append(playlistNameElement)
    

    return element;
}
