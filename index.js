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
      for (let index = 0; index < num; index++) {
        if (index % 2 !== 0) {
          str.push("that I love");
        } else if (index === 0) {
          str.push("I hate");
        } else {
          str.push("that I hate");
        }
      }
      str.push("it");
    }
    let newStr = "";
    str.forEach((strin) => {
      newStr = `${newStr} ${strin}`;
    });
    console.log(newStr);
  });
} catch (error) {}
