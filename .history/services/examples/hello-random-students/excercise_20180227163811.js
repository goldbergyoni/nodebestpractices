const fs = req

class goodMorningStudents {
  bless() {
      const students = "Aviad Raveh (araveh) <araveh@cisco.com; Bitya Neuhof (bineuhof) <bineuhof@cisco.com>; Daniella Lebel (dalebel) <dalebel@cisco.com; Gal Cohen (galcohe) <galcohe@cisco.com>; Gedalia Katz (gekatz) <gekatz@cisco.com>; Ilan Dahan (idahan) <idahan@cisco.com>;  Jonathan Zahtz (jzahtz) <jzahtz@cisco.com>; Leo Zylber (lzylber) <lzylber@cisco.com>; Michael Rochkind (mrochkin) <mrochkin@cisco.com>; Pavel Grabarnick (pgrabarn) <pgrabarn@cisco.com>; Tal Melamed (tmelamed) <tmelamed@cisco.com>; Yael Ariel (yariel) <yariel@cisco.com>; Yoav Reshef (yreshef) <yreshef@cisco.com>; Yoni Boigenman (yboigenm) <yboigenm@cisco.com>; Yonit Damari (ydamari) <ydamari@cisco.com>";
      const studentsArray = students.split(';');
      studentsArray.forEach(student => {
          console.log(`Good morning ${student}`)
      });
  }
}

new goodMorningStudents().bless()