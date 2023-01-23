function createNewUser () {
    let newUser = new Object();
    newUser.firstName = prompt('Write please your firstname');
    newUser.lastName = prompt('Write please your lastname');
    newUser.getLogin = function () {
        return `${(newUser.firstName.charAt(0) + newUser.lastName).toLowerCase()}`;
    }
    return newUser;
}

let user = createNewUser();
console.log(user.getLogin());
