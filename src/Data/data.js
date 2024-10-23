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
export const deletePlaylist = (id)=>{
    playlists = playlists.filter(p=>p.id !==id);
    observers.forEach(( observer)=> observer())
}
export const addPlaylist = ()=>{
   playlists.push({
    id: Date.now(),
    title: 'New Playlist',
    tracks:[]
   })
   observers.forEach(( observer)=> observer())
   
}
const observers =[];
/**
 * JSDoc
 * @param {*} observer callback function
 */
export const subscribe =(observer)=>{
observers.push(observer)
}
export const unsubscribe =(observer)=>{
    observers=observers.filter(o=>o !==observer)
    }