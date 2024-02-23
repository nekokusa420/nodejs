const fs = require("fs");

// fs.writeFile("./demo.txt", "NodeJstutorial", () => {
//   console.log("WrittingComplete");
// });

// fs.readFile("./demo1.txt", (error, data) => {
//   if (error) console.log(error);
//   else console.log(data.toString());
// });

if (!fs.existsSync("./image")) {
  fs.mkdir("./image", (error) => {
    if (error) console.log(error);
    else console.log("File is created");
  });
}

// if (fs.existsSync("./delete.txt")) {
//   fs.unlink("./delete.txt", (error) => {
//     if (error) console.log(error);
//     else console.log("File is deleted");
//   });
// }
