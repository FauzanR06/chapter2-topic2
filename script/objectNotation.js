const students = [
  {
    name: "Nida",
    address: {
      city: "Jakarta",
      province: "DKI Jakarta",
    },
  },
  {
    name: "Dwi",
    address: {
      city: "Tangerang",
      province: "Banten",
    },
  },
  {
    name: "Feb",
    address: {
      city: "Tangerang",
      province: "Banten",
    },
  },
  {
    name: "Hukma",
    address: {
      city: "Bandung",
      province: "Jawa Barat",
    },
  },
  {
    name: "Fauzan",
    address: {
      city: "Bandung",
      province: "Jawa Barat",
    },
  },
];

/* 
    Please make an console.log that display every student information
    Example: 
    Nida is from Jakarta, DKI Jakarta
    Dwi is from Tangerang, Banten
    ....
*/

students.map((student) => {
  const search = "ban";
  if (
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.address.city.toLowerCase().includes(search.toLowerCase()) ||
    student.address.province.toLowerCase().includes(search.toLowerCase())
  ) {
    console.log(
      `${student.name} is from ${student.address.city}, ${student.address.province}`
    );
  }
});

console.log(students);
