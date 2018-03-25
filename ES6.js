/*
if(true) {
    let x = 10;
    document.write("x = " + x + "<br/>");
}

document.write("x = " + x + "<br/>");
*/
///////////////////////////////

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    //// Metodele statice nu au legatura cu instantierea, obiectul marius nu are metoda countUsers.
    //// Este apelata doar din clasa. Ex: User.CountUsers()
    static countUsers(){
        console.log("Exista 50 de utilizatori.")
    }

    register () {
        console.log(`Utilizatorul ${this.username} este inregistrat!`)
    }
}

let marius = new User("Marius", "marius@gmail", "12345Pass");
marius.register();

class Member extends User {
    constructor(username, email, password, memberPackage) {
        super(username, email, password);
        this.memberPackage = memberPackage;
    }

    getPackage() {
        console.log(`Utilizatorul ${this.username} este abonat cu pachetul ${this.memberPackage}.`)
    }
}

let eliza = new Member('Eliza', 'eliza@gmail.com', '1234Pass' , 'standard');
eliza.register();
eliza.getPackage();