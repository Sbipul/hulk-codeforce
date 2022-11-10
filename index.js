const readline = require("readline");
try {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("", function (answer) {
    const num = parseInt(answer);
    let str = [];
    if (1 <= num && num <= 100) {
      if (num > 1) {
        for (let index = 0; index < num; index++) {
          if (index % 2 !== 0) {
            str.push("that I love");
          } else {
            str.push("that I hate ");
          }
        }
        str.push("it");
      } else {
        str.push("I hate it ");
      }
    }
    let newStr = "";
    str.forEach((strin) => {
      newStr = `${newStr} ${strin}`;
    });
    console.log(newStr);
  });
} catch (error) {}
