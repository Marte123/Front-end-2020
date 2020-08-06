console.log("Connected");

let birthYear = parseInt (prompt("What year are you born in?"));
let zodiac = (birthYear - 4 ) % 12;


switch (zodiac) {
    case 0:
        zodiac_sign= `RAT`;
        break;
    case 1:
        zodiac_sign=`OX`;
        break;
     case 2:
        zodiac_sign= `TIGER`;
        break;    
    case 3:
        zodiac_sign= `RABBIT`;
         break;   
    case 4:
        zodiac_sign= `DRAGON`;
         break;
    case 5:
        zodiac_sign=`SNAKE`;
        break;
    case 6:
        zodiac_sign= `HORSE`;
        break;
    case 7:
        zodiac_sign= `GOAT`;
        break;
     case 8:
        zodiac_sign= `MONKEY`;
        break;
    case 9:
        zodiac_sign= `ROOSTER`;
        break;
    case 10:
        zodiac_sign= `DOG`;
        break;
    case 11:
        zodiac_sign= `PIG`;
        break;
         default:
                console.log(`No such animal in Chinese zodiac! :D `);
                break;

}

console.log(`You are born in ${birthYear}, so it means you are ${zodiac_sign} in Chinese Zodiac!`);