function outer (name) {
    //higher order function
    let family = [];
    family.unshift(name);
    const greeting = 'Welcome everyone in family';

    function inner(newMember) {
        console.log(greeting);
        family.unshift(newMember);
        return family;
    }
    return inner; //return inner function
}

const myInner = outer('Umaporn');
console.log(myInner('John'));
console.log(myInner('SuSan'));