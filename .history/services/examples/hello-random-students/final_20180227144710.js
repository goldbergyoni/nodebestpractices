var fs = require('fs');

class studentService{
    getWinner(){
        const allStudents = fs.readFile('./students.txt')

    }
}

module.exports.studentService = studentService;
module.exports.number = 1;