import { TrackTitleComponent } from './TrackTitle/TrackTitleComponent.js';
import { TrackImageComponent } from './TrackImage/TrackImageComponent.js';



export function TrackComponent(inputTrack) {
    // create
    const element = document.createElement('li');

    // add data
    element.append(
        TrackImageComponent(inputTrack.imageSource),
        TrackTitleComponent(inputTrack)
    );

    // return
    return element;
}
