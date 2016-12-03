function getBathCode() {

    var firstPathToButton = 'UUURRRRULRDLRDRRDURDDDLLDLLLULDUDDLDLULUURULRLDLRRLLLRRDRRLDDLLULUDUDDLRDRDUURDLURUURLRULLDDURULRRURDUURLULUUUURDDDDUUDLULRULLLRLLRRRURDLLRLLRRRUURULRDRUUDDDDDLLLRURRURRUURDUURDDRDLULRRLLLDRRRLURRLLURLDRRDDLDLRRLLRDRLLLLDLULDLRRDRRLDDURLULLUDLUDRRDRRLRLULURDRLRLUUUDLRLDLLLURDUDULULDDRUUURLLLDLLDDUDDRURURUDDLUULRDRRRRLDRDDURLUDURDULLDLUDLULDRLRLLRLLLLRURDURLLDRRDRLRUUUUULLLRUDURUDLLLUDLLLLRDLDRDUDRURLUDDUDDURLUUUUDDLLUDLULLLLLDUDLLRLRRDDDULULRLDRLLULDLUDLLURULRDDUURULRDLDLDLRL';
    var secondPathToButton = 'URUUURDULUDLUUUUDDRRRDRRRLDUDLRDRRDRDDLRUULDLLDUDULLLRLDRDRRLDLDLUUDRUULDUDULDUDURURDDURULDLURULRLULDUDDUULDLLLDDURDDRDDURUULUUDRLDDULDRRRRDURRUDLLLURDDDLRULLRDDRDDDDLUUDRDUULRRRRURULDDDLDDRDRRUDRRURUDRDDLDRRRLLURURUULUUDRDULLDRLRDRRDDURDUDLDRLUDRURDURURULDUUURDUULRRRRRUDLLULDDDRLULDDULUDRRRDDRUDRRDLDLRUULLLLRRDRRLUDRUULRDUDRDRRRDDRLLRUUDRLLLUDUDLULUUDULDRRRRDDRURULDULLURDLLLDUUDLLUDRLDURRRLDDDURUDUDURRULDD';
    var thirdPathToButton = 'LRUDDULLLULRLUDUDUDRLLUUUULLUDLUUUUDULLUURDLLRDUDLRUDRUDDURURRURUDLLLRLDLUDRRRRRRDLUURLRDDDULRRUDRULRDRDDUULRDDLDULDRRRDDLURRURLLLRURDULLRUUUDDUDUURLRLDDUURLRDRRLURLDRLLUUURDRUUDUUUDRLURUUUDLDRRLRLLRRUURULLLRLLDLLLDULDDLDULDLDDRUDURDDURDUDURDLLLRRDDLULLLUDURLUDDLDLUUDRDRUDUUDLLDDLLLLDRDULRDLDULLRUDDUULDUDLDDDRUURLDRRLURRDDRUUDRUDLLDLULLULUDUDURDDRLRDLRLDRLDDRULLLRUDULDRLRLRULLRLLRRRLLRRRDDRULRUURRLLLRULDLUDRRDDLLLUDDUDDDLURLUDRDLURUUDLLDLULURRLLDURUDDDDRLULRDDLRLDDLRLLDDRRLRDUDUUULRRLRULUDURDUDRLRLRUDUDLLRRRRLRRUDUL';
    var fourthPathToButton = 'RULLLLUUUDLLDLLRULLRURRULDDRDLUULDRLLRUDLLRRLRDURLLDUUUUURUUURDLUURRLDDDLRRRRLRULDUDDLURDRRUUDLRRRDLDDUDUDDRUDURURLDULLDLULDLLUDLULRDRLLURRLLDURLDLRDLULUDDULDLDDDDDUURRDRURLDLDULLURDLLDDLLUDLDLDRLRLDLRDRLDLRRUUDRURLUUUDLURUULDUDRDULLDURUDLUUURRRLLDUDUDDUUULLLRUULDLURUDDRLUDRDDLDLLUDUDRRRDDUUULUULLLRLLUURDUUDRUUULULLDLDRUUDURLLUULRLDLUURLLUUDRURDDRLURULDUDUUDRRUUURDULRLDUUDDRURURDRRULDDDRLUDLLUUDURRRLDLRLRDRURLURLLLRLDDLRRLDLDDURDUUDRDRRLDRLULDRLURUUUDDRLLLDDLDURLLLLDRDLDRRUDULURRLULRDRLLUULLRLRDRLLULUURRUDRUDDDLLDURURLURRRDLLDRDLUDRULULULRLDLRRRUUDLULDURLRDRLULRUUURRDDLRUURUDRURUDURURDD';
    var fifthPathToButton = 'DURRDLLLDDLLDLLRLULULLRDLDRRDDRDLRULURRDUUDDRLLDDLDRRLRDUDRULDLRURDUUDRDDLLDRRDRUDUDULLDDDDLDRRRLRLRDRDLURRDDLDDDUUDRDRLLLDLUDDDLUULRDRLLLRLLUULUDDDRLDUUUURULRDDURRDRLUURLUDRLRLLLDDLRDDUULRRRRURDLDDDRLDLDRRLLDRDDUDDUURDLDUUDRDLDLDDULULUDDLRDDRLRLDDLUDLLDRLUDUDDRULLRLDLLRULRUURDDRDRDRURDRRLRDLLUDDRRDRRLDDULLLDLUDRRUDLDULDRURRDURLURRLDLRDLRUDLULUDDRULRLLDUURULURULURRLURRUULRULRRRLRDLULRLRLUDURDDRUUURDRLLRRRDDLDRRRULLDLRDRULDRRLRRDLUDDRDDDUUURRLULLDRRUULULLRRRRLDDRDDLUURLLUDLLDUDLULUULUDLLUUURRRUDDDRLLLRDRUUDUUURDRULURRLRDLLUURLRDURULDRRUDURRDDLDRLDRUUDRLLUDLRRU';

    var arrayOfFirstPathToButton = firstPathToButton.split('');
    var arrayOfSecondPathToButton = secondPathToButton.split('');
    var arrayOfThirdPathToButton = thirdPathToButton.split('');
    var arrayOfFourthPathToButton = fourthPathToButton.split('');
    var arrayOfFifthPathToButton = fifthPathToButton.split('');

    var arrayOfAllPaths = [
       arrayOfFirstPathToButton,
       arrayOfSecondPathToButton,
       arrayOfThirdPathToButton,
       arrayOfFourthPathToButton,
       arrayOfFifthPathToButton
    ];

    // Navigation rules for Task 2.1
    function navigateTask1(number, direction) {

        if (direction === 'L') {
            switch (number) {
                case 1:
                case 4:
                case 7:
                    return number;
                    break;
                default:
                    return number -= 1;
                    break;
            }
        } else if (direction === 'R') {
            switch (number) {
                case 3:
                case 6:
                case 9:
                    return number;
                    break;
                default:
                    return number += 1;
                    break;
            }
        } else if (direction === 'U') {
            switch (number) {
                case 1:
                case 2:
                case 3:
                    return number;
                    break;
                default:
                    return number -= 3;
                    break;
            }
        } else if (direction === 'D') {
            switch (number) {
                case 7:
                case 8:
                case 9:
                    return number;
                    break;
                default:
                    return number += 3;
                    break;
            }
        }
    }

    // Navigation rules for Task 2.2
    function navigateTask2(number, direction) {

        if (direction === 'L') {
            switch (number) {
                case 1:
                case 2:
                case 5:
                case 'A':
                case 'D':
                    return number;
                    break;
                case 'B':
                    return number = 'A';
                    break;
                case 'C':
                    return number = 'B';
                    break;
                default:
                    return number -= 1;
                    break;
            }
        } else if (direction === 'R') {
            switch (number) {
                case 1:
                case 4:
                case 9:
                case 'C':
                case 'D':
                    return number;
                    break;
                case 'A':
                    return number = 'B';
                    break;
                case 'B':
                    return number = 'C';
                    break;
                default:
                    return number += 1;
                    break;
            }
        } else if (direction === 'U') {
            switch (number) {
                case 1:
                case 2:
                case 4:
                case 5:
                case 9:
                    return number;
                    break;
                case 3:
                    return number = 1;
                    break;
                case 'A':
                    return number = 6;
                    break;
                case 'B':
                    return number = 7;
                    break;
                case 'C':
                    return number = 8;
                    break;
                case 'D':
                    return number = 'B';
                    break;
                default:
                    return number -= 4;
                    break;
            }
        } else if (direction === 'D') {
            switch (number) {
                case 5:
                case 9:
                case 'A':
                case 'C':
                case 'D':
                    return number;
                    break;
                case 'B':
                    return number = 'D';
                    break;
                case 6:
                    return number = 'A';
                    break;
                case 7:
                    return number = 'B';
                    break;
                case 8:
                    return number = 'C';
                    break;
                case 1:
                    return number = 3;
                    break;
                default:
                    return number += 4;
                    break;
            }
        }
    }


    function getButtons(arr) {
        var button;
        var numbersArray = [];

        var button2;
        var numbersArray2 = [];

        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {

                for (var j = 0; j < arr[i].length; j++) {

                    if (i === 0 && j === 0) {
                        button = 5;
                        numbersArray.push(button);

                        button2 = 5;
                        numbersArray2.push(button2);
                    } else {
                        var buttonPosition = numbersArray.length - 1;
                        button = numbersArray[buttonPosition];

                        var buttonPosition2 = numbersArray2.length - 1;
                        button2 = numbersArray2[buttonPosition2];
                    }

                    var newButton = navigateTask1(button, arr[i][j]);
                    numbersArray.push(newButton);

                    var newButton2 = navigateTask2(button2, arr[i][j]);
                    numbersArray2.push(newButton2);
                }
            }
            else {
                return;
            }
            console.log('button result ' + (i + 1) + ': ' + newButton);
            console.log('button result TASK 2 ' + (i + 1) + ': ' + newButton2);
        }
    }
    getButtons(arrayOfAllPaths);
}

getBathCode();
