const _ = require('lodash');

// user object 

const user = { 
    name: 'Name',
    surname: 'Surname',
    allGrades: [
        {
            subjectName: 'subjectNameOne',
            grades: [5, 4, 3, 5, 2],
            weight: 3
        },
        {
            subjectName: 'subjectNameTwo',
            grades: [3, 3.5, 2],
            weight: 1
        },
        {
            subjectName: 'subjectNameThree',
            grades: [4, 3, 3.5],
            weight: 5
        }
    ]
};

// function weightedArithmeticMean(obj) {
//     let sum = 0;
//     let weightSum = 0;
//     for (let i = 0; i < obj.allGrades.length; i++) {
//         sum += _.sum(obj.allGrades[i].grades) * obj.allGrades[i].weight;
//         weightSum += obj.allGrades[i].weight;
//     }
//     return obj.name + ' ' + obj.surname + ' ' + sum / weightSum;
// }

// console.log(weightedArithmeticMean(user));

function weightedArithmeticMeanVerTwo(obj){ 
    let weightedMean = 0;
    let sumOfWeight = 0;
    obj.allGrades.map(
        (grade) => {
            weightedMean += _.sum(grade.grades) * grade.weight
            sumOfWeight += grade.weight
        }
    )
    return obj.name + ' ' + obj.surname + ' ' + weightedMean / sumOfWeight
}

console.log(weightedArithmeticMeanVerTwo(user));