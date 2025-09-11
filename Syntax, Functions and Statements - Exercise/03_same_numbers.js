function same(number) {

    let string = number + "";
    let sum = 0;
    let comparable = string[0];
    let isSame = true;

    for (let i = 0; i < string.length; i++) {

        sum += Number(string[i]);

    }


    for (let i = 1; i < string.length; i++) {

        if (string[i] != comparable) {
            isSame = false;
            break;
        }

    }

    console.log(isSame);
    console.log(sum);

}

same(2222222)