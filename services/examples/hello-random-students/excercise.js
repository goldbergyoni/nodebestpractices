const fs = require("fs");
var terminal = require("terminal-kit").terminal;

let x = 5;

class goodMorning {
  constructor() {}

  bless() {
    fs.readFile("students.txt", "utf-8", function(err, data) {
      const studentsArray = data.split(";");
      terminal.drawImage(
        "./goodmorning.jpg",
        { shrink: { width: 20, height: 20 } },
        (err, image) => {}
      );
      studentsArray.forEach(student => {
        console.log(`Good Morning ${student}!`);
      });
    });
  }
}

module.exports = goodMorning;

new goodMorning().bless()