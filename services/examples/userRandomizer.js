    return s.split("").reverse().join("");
}


class Lottery {
    randomizeUser() {
        console.log('hello world')
        const myStudents = ['גרגורי מולדבסקי', 'ניצן עזרא'];
        const chosenStudentIndex = Math.floor(Math.random() * myStudents.length);
        console.log(`*** These are all the sudents here`)
        myStudents.forEach((student) => {
            console.log(`${reverse(student)},`)
        });
        console.log(`***The winner is***`)
        setTimeout(() => {
            console.log(`And the winner is ${myStudents[chosenStudentIndex]}`)
        }, 5000);
    }

}

module.exports.Lottery = Lottery
module.exports.justNumber = 1
module.exports.x = function () {
    console.log(x)
}