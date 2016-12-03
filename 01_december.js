// advent of code DAY 1 part 2
function identifyDuplicatesFromArray(arr, x, y) {

    for (var counterArray = 0; counterArray < arr.length; counterArray++) {

        var current = arr[counterArray].join();
        var newArrayLength = counterArray - 1;
        var currentArray = arr.slice(0, newArrayLength);

        if (counterArray > 0 && currentArray.join(' / ').includes(' ' + current + ' ')) {

            var xPos = arr[counterArray][0];
            var yPos = arr[counterArray][1];

            if (xPos < 0 && yPos < 0) {
                yPos *= -1;
                xPos *= -1;
            } else if (xPos < 0) {
                xPos *= -1;
            } else if (yPos < 0) {
                yPos *= -1;
            }

            console.log('result 1.2: ' + (xPos + yPos));
            break;
        }

    }
}

// advent of code DAY 1 part 1
function direction(direction) {
    var adventOfCodeBlocks = ['R2', 'L1', 'R2', 'R1', 'R1', 'L3', 'R3', 'L5', 'L5', 'L2', 'L1', 'R4', 'R1', 'R3', 'L5', 'L5', 'R3', 'L4', 'L4', 'R5', 'R4', 'R3', 'L1', 'L2', 'R5', 'R4', 'L2', 'R1', 'R4', 'R4', 'L2', 'L1', 'L1', 'R190', 'R3', 'L4', 'R52', 'R5', 'R3', 'L5', 'R3', 'R2', 'R1', 'L5', 'L5', 'L4', 'R2', 'L3', 'R3', 'L1', 'L3', 'R5', 'L3', 'L4', 'R3', 'R77', 'R3', 'L2', 'R189', 'R4', 'R2', 'L2', 'R2', 'L1', 'R5', 'R4', 'R4', 'R2', 'L2', 'L2', 'L5', 'L1', 'R1', 'R2', 'L3', 'L4', 'L5', 'R1', 'L1', 'L2', 'L2', 'R2', 'L3', 'R3', 'L4', 'L1', 'L5', 'L4', 'L4', 'R3', 'R5', 'L2', 'R4', 'R5', 'R3', 'L2', 'L2', 'L4', 'L2', 'R2', 'L5', 'L4', 'R3', 'R1', 'L2', 'R2', 'R4', 'L1', 'L4', 'L4', 'L2', 'R2', 'L4', 'L1', 'L1', 'R4', 'L1', 'L3', 'L2', 'L2', 'L5', 'R5', 'R2', 'R5', 'L1', 'L5', 'R2', 'R4', 'R4', 'L2', 'R5', 'L5', 'R5', 'R5', 'L4', 'R2', 'R1', 'R1', 'R3', 'L3', 'L3', 'L4', 'L3', 'L2', 'L2', 'L2', 'R2', 'L1', 'L3', 'R2', 'R5', 'R5', 'L4', 'R3', 'L3', 'L4', 'R2', 'L5', 'R5'];
    var x = 0;
    var y = 0;
    var numberOfSteps;

    var visitedPlaces = [];

    for (counter = 0; counter < adventOfCodeBlocks.length; counter++) {

        if (counter === 0 && (adventOfCodeBlocks[counter].includes('R')) === true) {
            direction = 180;
            numberOfSteps = parseInt(adventOfCodeBlocks[counter].substr(1));

            for (stepCounter = 1; stepCounter <= numberOfSteps; stepCounter++) {
                x += 1;
                visitedPlaces.push([x, y]);
            }

        } else if (counter === 0 && (adventOfCodeBlocks[counter].includes("L")) === true) {
            direction = 0;
            numberOfSteps = parseInt(adventOfCodeBlocks[counter].substr(1));

            for (stepCounter = 1; stepCounter <= numberOfSteps; stepCounter++) {
                x -= 1;
                visitedPlaces.push([x, y]);
            }

        } else if (counter !== 0 && adventOfCodeBlocks[counter].includes("R")) {

            if (direction === 360) {
                direction = 0;
            }

            numberOfSteps = parseInt(adventOfCodeBlocks[counter].substr(1));
            direction += 90;

            if (direction === 360) {

                for (stepCounter = 1; stepCounter <= numberOfSteps; stepCounter++) {
                    x -= 1;
                    visitedPlaces.push([x, y]);
                }

            } else if (direction === 90) {

                for (stepCounter = 1; stepCounter <= numberOfSteps; stepCounter++) {
                    y += 1;
                    visitedPlaces.push([x, y]);
                }
            } else if (direction === 180) {

                for (stepCounter = 1; stepCounter <= numberOfSteps; stepCounter++) {
                    x += 1;
                    visitedPlaces.push([x, y]);
                }
            } else if (direction === 270) {

                for (stepCounter = 1; stepCounter <= numberOfSteps; stepCounter++) {
                    y -= 1;
                    visitedPlaces.push([x, y]);
                }
            }
        } else if (counter !== 0 && adventOfCodeBlocks[counter].includes("L")) {

            if (direction === 0) {
                direction = 360;
            }

            numberOfSteps = parseInt(adventOfCodeBlocks[counter].substr(1));
            direction -= 90;

            if (direction === 0) {

                for (stepCounter = 1; stepCounter <= numberOfSteps; stepCounter++) {
                    x -= 1;
                    visitedPlaces.push([x, y]);
                }
            } else if (direction === 270) {

                for (stepCounter = 1; stepCounter <= numberOfSteps; stepCounter++) {
                    y -= 1;
                    visitedPlaces.push([x, y]);
                }
            } else if (direction === 180) {

                for (stepCounter = 1; stepCounter <= numberOfSteps; stepCounter++) {
                    x += 1;
                    visitedPlaces.push([x, y]);
                }
            } else if (direction === 90) {

                for (stepCounter = 1; stepCounter <= numberOfSteps; stepCounter++) {
                    y += 1;
                    visitedPlaces.push([x, y]);
                }
            }
        }
    }

    identifyDuplicatesFromArray(visitedPlaces, x, y); // advent of code DAY 1 part 2

    if (y < 0 && x < 0) {
        y *= -1;
        x *= -1;
    } else if (x < 0) {
        x *= -1;
    } else if (y < 0) {
        y *= -1;
    }

    console.log('result 1.1: ' + (x + y));
}

direction(0);
