import images from '../data/card-images1';
import images2 from '../data/card-images2';
import images3 from '../data/card-images3';
import back from '../assets/images/maze.png';
import back2 from '../assets/images/bg_image.png';
import back3 from '../assets/images/level3/bullet.png';

export function cardData(level){
    if(level === 1){
        return(
            images.map( (front, index) => {
            return {
                front: front,
                back: back,
                flipped: false
            }
        })
    )} else if ( level === 2 ) {
        return(
            images2.map( (front, index) => {
            return {
                front: front,
                back: back2,
                flipped: false
            }
        })
    )}
    else {
        return(
            images3.map( (front, index) => {
            return {
                front: front,
                back: back3,
                flipped: false
            }
        })
    )
    }
}
