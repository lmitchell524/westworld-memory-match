import '../assets/css/app.css';

export function doubleArray(array, times = 2){

    const newArray = [];

    for(let count = 0; count < times; count++){
        for(let index = 0; index < array.length; index++){
            let jsonString = JSON.stringify(array[index]);
            let newObj = JSON.parse(jsonString);

            newArray.push(newObj);
        }
    }
    return newArray;
}

export function transition(){
  var timer = null;
  var target = document.querySelector('.iris');
  var irisPercent = 99.99;
  var irisDeltaPerSecond = 33.3;
  var transitionTime = 3000;
  var timePerInterval = 10;
  var intervalCount = transitionTime / timePerInterval;
  var irisDeltaPerInterval = irisDeltaPerSecond*(transitionTime/1000) / intervalCount;
  var remainingIntervalCount = intervalCount;

  target.style.display = 'block';

  timer = setInterval(incrementTransition, timePerInterval);
  function incrementTransition(){
    irisPercent -= irisDeltaPerInterval;
    //console.log(irisPercent);
    target.style.background = `radial-gradient(transparent ${irisPercent}%, black ${irisPercent+.001}%, black 100%)`;
    remainingIntervalCount--;
    if(!remainingIntervalCount){
      clearInterval(timer);
    }
  }
}
