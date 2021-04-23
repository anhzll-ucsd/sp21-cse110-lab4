function discountPrices(prices, discount ){
    const discounted = [];
    const length = prices.length;

    for(let i = 0; i < prices.length; i ++){
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    //console.log(i);
    //console.log(discountedPrice);
    //console.log(finalPrice);
    //console.log(length);
    return discounted;
}

let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year' : '2022',
    greeting: function(){console.log('Hello!');},
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE110', 'CSE134', 'VIS 41']
};


let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2

};

//for (var property in statistics){
//    if (property.charAt(0) == 'r' || statistics[property] == 3){
//        console.log(statistics[property])
//    }
//}

function modifyArray(array, callback){
    const newArr = [];
    for ( let i = 0; i < array.length ; i ++){
        newArr.push(callback(array[i]));
    }

    return newArr;
}

function doSomething(num) {
    return num * 2;
}



function printNums(){
    console.log(1);
    setTimeout(function() {console.log(2);}, 1000);
    setTimeout(function() {console.log(3); }, 0);
    console.log(4);
}

printNums();


//console.log(modifyArray([1,2,3], doSomething))



