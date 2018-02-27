const fs = require("fs");
const terminal = require('terminal-kit')

class goodMorningStudents {
  bless() {

    terminal.drawImage( "./goodmorning.jpg" , 
                {shrink:{width: 20, height: 20 }},(err,image)=>{})

    fs.readFile("./students.txt", "utf-8", function(error, data) {
      const studentsArray = data.split(";");
      studentsArray.forEach(student => {
        console.log(`Good morning ${student}`);
      });
    });
  }
}

new goodMorningStudents().bless();
