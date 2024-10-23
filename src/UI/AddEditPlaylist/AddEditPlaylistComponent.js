import { addEditPlaylistState } from "../../Data/data.js";
import { liba } from "../../shared/liba.js";
import { dialogButtonComponent } from "./DialogButtonComponent.js";
import { dialogFormComponent } from "./DialogFormComponent.js";
import { dialogHeaderComponent } from "./dialogHeaderComponent.js";
export function AddEditPlaylistComponent(){
    const element = liba.create('dialog');

    element.append(dialogHeaderComponent(),dialogFormComponent(),dialogButtonComponent())
    element.open=addEditPlaylistState.isActive;
    
    return element;
}