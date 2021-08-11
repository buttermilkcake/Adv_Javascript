//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

function winBattle(bool) {
    return bool;
}

var experiencePoints = winBattle(false) ? "You get 10 points" : "You get 1 point";
/*the true statement comes before the false statement*/


//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward"); /*please enter a valid direction. I was wrong it just returns undefined*/

//#3 return value when moveCommand("back"); /*I was wrong, it is you arrived home. I thought it would return the default response*/

//#4 return value when moveCommand("right"); /*you found a river*/

//#5 return value when moveCommand("left"); /*please enter a valid direction. I was wrong, it just returns undefined*/

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

/*My own switch*/
function enterAnswer(species) {
    var whatCat;
    switch(species) {
        case "striped":
            whatCat = "you have a tabby";
        break;
    case "splotched":
            whatCat = "you have a holstein, calico or tortie";
        break;         
    case "yowly":
            whatCat = "you probably have a Siamese";
        break;
    default:
            whatCat = "please enter a type of cat";           
    }
    return whatCat;
}