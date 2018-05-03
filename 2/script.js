// there is custom js
var Teachers = [
    {
        name: 'Khan td',
        Age: 1952
    },
    {
        name: 'King t',
        Age: 1998
    },
    {
        name: 'Loop t',
        Age: 1994
    },
    {
        name: 'Khalid t',
        Age: 1997
    },
    {
        name: 'Karim t',
        Age: 1998
    },
    {
        name: 'Leader t',
        Age: 2000
    },
];
var students = [
    {
        name: 'Ali',
        Age: 1990
    },
    {
        name: 'King',
        Age: 2000
    },
    {
        name: 'Loop',
        Age: 1988
    },
    {
        name: 'Khalid',
        Age: 1995
    },
    {
        name: 'Karim',
        Age: 1980
    },
    {
        name: 'Leader',
        Age: 1996
    },
];
var stdName = getNames(students);
stdName.forEach(stdN => console.log(stdN));

var techName = getNames(Teachers);
techName.forEach(techN => console.log(techN));
/*function  GetNameSS(){
    var keywords = document.getElementById('getArray').value;
  getNames(keywords);

}*/

//function to show names student from array
function getNames(array) {
    return array.map(Elemtnt => {
        return Elemtnt.name + ' is ' + GetAge(Elemtnt.Age) + ' Years Old';
    })
}


//function to get Age form date of brith
function GetAge(dob) {

    var dateTime = new Date();
    var currentYear = dateTime.getFullYear()
    return currentYear - dob;
}
