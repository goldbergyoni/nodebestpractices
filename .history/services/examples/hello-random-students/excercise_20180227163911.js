const fs = require('fs');

class goodMorningStudents {
  bless() {
      fs.readFile('./')
      const studentsArray = students.split(';');
      studentsArray.forEach(student => {
          console.log(`Good morning ${student}`)
      });
  }
}

new goodMorningStudents().bless()