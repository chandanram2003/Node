//const fs = require("fs");

// fs.appendFileSync("hey.txt", "mai to accha hu ", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file created");
//   }
// });

// fs.rename("hey.txt", "hello.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("done");
//   }
// });

// fs.unlink("hello.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("removed");
// });

//const fs = require("fs");

// fs.mkdir("copy", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Folder created");
//   }
// });

const fs = require("fs");

fs.rm("copy", { recursive: true, force: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Folder deleted");
  }
});
