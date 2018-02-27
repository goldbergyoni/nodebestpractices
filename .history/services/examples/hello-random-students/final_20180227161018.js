var fs = require('fs');
var terminal = require( 'terminal-kit' ).terminal ;

class studentService{
    getWinner(){
        const allStudents = fs.readFile('./students.txt', 'utf-8' ,function(error, data){
            const studentsArray = data.split(';');
            terminal.drawImage( "./goodmorning.jpg" , 
            {shrink:{width: 20, height: 20 }},(err,image)=>{})
            studentsArray.forEach(student => {
                console.log(`Good morning ${student}`)
            });
            nbp-he
        })
    }
}

new studentService().getWinner();

module.exports.studentService = studentService;
module.exports.number = 1;