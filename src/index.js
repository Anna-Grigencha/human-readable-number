module.exports = function toReadable(number) {
    number = number.toString();

    let getUnits = (number) => {
        switch (number) {
            case "0":
                return "zero";
            case "1":
                return "one";
            case "2":
                return "two";
            case "3":
                return "three";
            case "4":
                return "four";
            case "5":
                return "five";
            case "6":
                return "six";
            case "7":
                return "seven";
            case "8":
                return "eight";
            case "9":
                return "nine";
            default:
                return null;
        }
    };

    let getDozens = (number) => {
        switch (number) {
            case "1":
                return "one";
            case "2":
                return "twenty";
            case "3":
                return "thirty";
            case "4":
                return "forty";
            case "5":
                return "fifty";
            case "6":
                return "sixty";
            case "7":
                return "seventy";
            case "8":
                return "eighty";
            case "9":
                return "ninety";
            default:
                return null;
        }
    };

    let getFromElevenToNineteen = (number) => {
        switch (number) {
            case "0":
                return "ten";
            case "1":
                return "eleven";
            case "2":
                return "twelve";
            case "3":
                return "thirteen";
            case "4":
                return "fourteen";
            case "5":
                return "fifteen";
            case "6":
                return "sixteen";
            case "7":
                return "seventeen";
            case "8":
                return "eighteen";
            case "9":
                return "nineteen";
            default:
                return null;
        }
    };

    if (number.length === 1) {
        return getUnits(number);
    } else if (number === "10") {
        return "ten";
    } else if (number.length === 2 && number[1] === "0") {
        return getDozens(number[0]);
    } else if (number.length === 2 && number[0] === "1") {
        return getFromElevenToNineteen(number[1]);
    } else if (number.length === 2) {
        return getDozens(number[0]) + " " + getUnits(number[1]);
    } else if (number.length === 3 && number[1] === "0" && number[2] === "0") {
        return getUnits(number[0]) + " hundred";
    } else if (number.length === 3 && number[1] === "0") {
        return getUnits(number[0]) + " hundred " + getUnits(number[2]);
    } else if (number.length === 3 && number[1] === "1") {
        return (
            getUnits(number[0]) +
            " hundred " +
            getFromElevenToNineteen(number[2])
        );
    } else if (number.length === 3 && number[2] === "0") {
        return getUnits(number[0]) + " hundred " + getDozens(number[1]);
    } else if (number.length === 3) {
        return (
            getUnits(number[0]) +
            " hundred " +
            getDozens(number[1]) +
            " " +
            getUnits(number[2])
        );
    }
};
