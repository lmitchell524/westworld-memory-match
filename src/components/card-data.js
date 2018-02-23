import images from '../data/card-images1';
import images2 from '../data/card-images2';
import images3_1 from '../data/card-images3';
import images3_2 from '../data/card-images3-2';
import images3_3 from '../data/card-images3-3';
import back from '../assets/images/maze.png';
import back2 from '../assets/images/bg_image.png';
import back3 from '../assets/images/level3/bullet.png';



export function cardData(level, didCardsMatch ){
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
        const imageArr = [ images3_1, images3_2, images3_3];
        const randomImgIndex = Math.floor(Math.random() * (3));

        if(!didCardsMatch){
            return(
                imageArr[randomImgIndex].map( (front, index) => {
                    return {
                        front: front,
                        back: back3,
                        flipped: false
                    }
                })
            )
        } else {
            return(
                images3_1.map( (front, index) => {
                return {
                    front: front,
                    back: back3,
                    flipped: false
                    }
                })
            )
        }
    }
}
