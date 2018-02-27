const fs = require("fs");
const terminal = require("terminal-kit").terminal;

class goodMorningStudents {
  bless() {
    terminal.drawImage(
      "./goodmorning.png",
      { shrink: { width: 20, height: 20 } },
      (err, image) => {console.log(err)}
    );

    fs.readFile("./students.txt", "utf-8", function(error, data) {
      const studentsArray = data.split(";");
      studentsArray.forEach(student => {
        console.log(`Good morning ${student}`);
      });
    });
  }
}
