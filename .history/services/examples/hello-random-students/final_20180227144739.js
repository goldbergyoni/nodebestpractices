var fs = require('fs');

class studentService{
    getWinner(){
        const allStudents = fs.readFile('./students.txt', function(error, data){
            console.log(`G`)
        })
    }
}

module.exports.studentService = studentService;
module.exports.number = 1;