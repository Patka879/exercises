function telephoneCheck(str) {

    let sanitaziedPhoneNumber;

    if(/[^0-9()-\s]/g.test(str)) {
        return false;
    } else if(str.startsWith("-", "(", ")") || str.endsWith("-", "(", ")")) {
        return false;
    } else {
        sanitaziedPhoneNumber = str;
    }

    let numberOfDashes = (sanitaziedPhoneNumber.match(/-/g) || '').length;


    if(numberOfDashes >= 3 ) {
        return false;    
    }

const dashSpacesRemoved = sanitaziedPhoneNumber.replace(/[-" "]/g, "");



if(dashSpacesRemoved.charAt(0) == 1 && dashSpacesRemoved.length == 11) {
        return true;
    } else if (dashSpacesRemoved.charAt(0) == 1 && dashSpacesRemoved.charAt(1) == "(" && dashSpacesRemoved.charAt(5) == ")" && dashSpacesRemoved.length == 13) {
        return true;  
    } else if(dashSpacesRemoved.charAt(0) == "(" && dashSpacesRemoved.charAt(4) == ")" && dashSpacesRemoved.length == 12) {
        return true;
    } else if(dashSpacesRemoved.length == 11 && dashSpacesRemoved.charAt(0) == 1) {
        return true;
    } else if (dashSpacesRemoved.length == 10)  {
      return true;
    } else if (dashSpacesRemoved.length < 10 || dashSpacesRemoved.lenght > 13) {
        return false; 
    } else {
        return false;

}
}

module.exports = {telephoneCheck}





