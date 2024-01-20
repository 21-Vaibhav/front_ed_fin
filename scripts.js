// 1.function to deposit amounnt
// 2.function to det number of lines to bet money on
// 3.function to collect a bet amounnt
// 4.function to spin the slot machine
// 5.check if user won or Not
// 6.give back the winner their wins
// 7.play again
const prompt= require("prompt-sync")();

const deposit = () =>{
    while(true){
            const depositamount = prompt(
              "enter a amount, deposit to be more fuckin spcific"
            );

            const numberdepositamount = parseFloat(depositamount);

            if (isNaN(numberdepositamount) || numberdepositamount <= 0) {
              console.log("no money , no honey!");
            }
            else{
                return numberdepositamount;
            }
    }
}

const numberOfLines = () => {
  while (true) {
    const numberofLines = prompt(
      "enter the number of lines to bet on!"
    );

    const numbernumberofLiness = parseFloat(numberofLines);

    if (isNaN(numbernumberofLiness) || numbernumberofLiness<0 || numbernumberofLiness>3) {
      console.log("no money , no honey!");
    } else {
      return numbernumberofLiness;
    }
  }
};
const getBet = (balance, lines) => {
  while (true) {
    const betamount = prompt("enter how much you wanna bet !");

    const numberbetamount = parseFloat(betamount);

    if (
      isNaN(numberbetamount) ||
      numberbetamount < 0 ||
      (numberbetamount*lines)>balance
    ) {
      console.log("no money , no honey!");
    } else {
      return numberbetamount;
    }
  }
};

 let balance=deposit();
 const betlines=numberOfLines();
 const bet=getBet(balance, betlines);
 