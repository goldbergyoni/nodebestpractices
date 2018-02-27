const fs = require("fs");
const terminal = require('terminal-kit')

class goodMorningStudents {
  bless() {

    nsp

    fs.readFile("./students.txt", "utf-8", function(error, data) {
      const studentsArray = data.split(";");
      studentsArray.forEach(student => {
        console.log(`Good morning ${student}`);
      });
    });
  }
}

new goodMorningStudents().bless();
