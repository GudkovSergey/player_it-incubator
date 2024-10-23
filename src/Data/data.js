import { refresh } from "../index.js";

export let playlists = [
    {
        id: 1,
        title: 'Hip-Hop Hits',
        img: '/src/img/cardImage/image1.jpeg',
        tracks: [
            {
                artist: 'Eminem',
                title: 'Rap God',
                isHot: true,
                imageSource: '/src/img/cardImage/trackList/track1.jpeg'
            },
            {
                artist: '50cent',
                title: 'In da Club',
                isHot: false,
                imageSource: '/src/img/cardImage/trackList/track2.jpeg'
            }

        ]

    },
    {
        id: 2,
        title: 'Rap Hits 1990s',
        img: '/src/img/cardImage/image2.jpeg',
        tracks: [
            {
                artist: 'Public Enemy',
                title: 'Fight the Power',
                isHot: true,
                imageSource: '/src/img/cardImage/trackList/track3.jpeg'
            },
            {
                artist: 'Vanila Ice',
                title: 'Ice Ice Baby',
                isHot: false,
                imageSource: '/src/img/cardImage/trackList/track4.jpeg'
            }

        ]
    }

];
export function emit() {
    observers.forEach((observer) => observer());

}

export let addEditPlaylistState = {
    isActive: false,
    newTitle: '',
    id: null
};
export let setNewTitle = (title) => {
    addEditPlaylistState.newTitle = title;
    emit();
}

export const activateAddEditPlaylist = (playlistId = null) => {
    addEditPlaylistState.isActive = true;
    if (playlistId) {
        addEditPlaylistState.id = playlistId;
        const foundPlaylist = playlists.find((p) => p.id === playlistId);
        if (!foundPlaylist) {
            throw new Error('404')
        }
        addEditPlaylistState.newTitle = foundPlaylist.title
    } else {
        addEditPlaylistState.newTitle = '';
        addEditPlaylistState.id = null;
    }
    emit();
}
export let deactivateAddEditPlaylist = () => {
    addEditPlaylistState.isActive = false;
    addEditPlaylistState.title = '';
    addEditPlaylistState.id = null;
    emit();
}
export const deletePlaylist = (id) => {
    playlists = playlists.filter(p => p.id !== id);
    emit();
}
export const createUpdatePlaylist = () => {
    if (addEditPlaylistState.newTitle === '') {
        throw new Error('Empty playlist title is imposible')
    }

    if (addEditPlaylistState.id) {
        const foundPlaylist = playlists.find((p) => p.id === addEditPlaylistState.id);
        if (!foundPlaylist) {
            throw new Error('404')
        }
        foundPlaylist.title = addEditPlaylistState.newTitle;

    } else {
        playlists.push({
            id: Date.now(),
            title: addEditPlaylistState.newTitle,
            tracks: []
        })
    }
        deactivateAddEditPlaylist();

        emit();
    



}
const observers = [];
/**
 * JSDoc
 * @param {*} observer callback function
 */
export const subscribe = (observer) => {
    observers.push(observer)
}
export const unsubscribe = (observer) => {
    observers = observers.filter(o => o !== observer)
}