function randomnumber() {
    let hiddenNumber=Math.random();
    let hiddenNumber2=Math.floor(hiddenNumber*10);
    return hiddenNumber2;
    //console.log(hiddenNumber2);
}

export {randomnumber};