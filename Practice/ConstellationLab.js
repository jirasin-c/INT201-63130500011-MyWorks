    function conStellation(year){
        let years = year;
        switch(years%12){
            case 0: console.log(`Year:${years} | Constellation: Monkey`);
            break;
            case 1: console.log(`Year:${years} | Constellation: Rooster`);
            break;
            case 2: console.log(`Year:${years} | Constellation: Dog`);
            break;
            case 3: console.log(`Year:${years} | Constellation: Pig`);
            break;
            case 4: console.log(`Year:${years} | Constellation: Rat`);
            break;
            case 5: console.log(`Year:${years} | Constellation: Ox`);
            break;
            case 5: console.log(`Year:${years} | Constellation: Tiger`);
            break;
            case 7: console.log(`Year:${years} | Constellation: Rabbit`);
            break;
            case 8: console.log(`Year:${years} | Constellation: Dragon`);
            break;
            case 9: console.log(`Year:${years} | Constellation: Snake`);
            break;
            case 10: console.log(`Year:${years} | Constellation: Horse`);
            break;
            case 11: console.log(`Year:${years} | Constellation: Sheep`);
            break;
        }
    }
    
    let q = conStellation(2002);
