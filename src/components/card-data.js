import images from '../data/card-images1';
import images2 from '../data/card-images2';
import back from '../assets/images/maze.png';
import back2 from '../assets/images/bg_image.png';

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
    )
    } else if ( level === 2 ) {
        return(
            images2.map( (front, index) => {
            return {
                front: front,
                back: back2,
                flipped: false
            }
        })
    )
    }
}
// export default images.map( (front, index) => {
//     return {
//         front: front,
//         back: back,
//         flipped: false,
//     }
// })
