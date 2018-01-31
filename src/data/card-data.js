import images from './card-images1';
import back from '../assets/images/maze.png';

export default images.map( (front, index) => {
    return {
        front: front,
        back: back,
        flipped: false
    }
})
