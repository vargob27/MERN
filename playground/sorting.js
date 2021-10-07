const animals = [
    { name: 'zoey',  breed: 'dog', color: 'black'},
    { name: 'milo',  breed: 'smalldog', color: 'white'},
    { name: 'leah',  breed: 'dog', color: 'brown'},
    { name: 'snickers',  breed: 'smalldog', color: 'brown'},
    { name: 'test',  breed: 'cat', color: 'black'},
    { name: 'test2',  breed: 'dog', color: 'black'},
    { name: 'tes3',  breed: 'smalldog', color: 'black'},

]
console.log(animals);
animals.sort((a,b) => {
    if (a.name > b.name) {
        return 1
    } else {
        return -1
    }
})
console.log(animals);