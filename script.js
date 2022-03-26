// sign in form validation in javascript
// for testing purposes 
// var testUname="lol",testPassword="lol";
users=[
    {
        first_name : "Ahmed",
        last_name : "Samy",
        username : "Ahmed_samy",
        password : "lol",
        email : "randomc@random.com"
    },
    {
        first_name : "Mohammed",
        last_name : "Ali",
        username : "Mo_Al",
        password : "lol2",
        email : "randomf@random.com"
    },
    {
        first_name : "Hassan",
        last_name : "Hosny",
        username : "HH",
        password : "lol3",
        email : "randome@random.com"
    },
];
//---------------------------------------------------------
function formValidation(){
    var username = document.signinForm.username.value;
    var password = document.signinForm.password.value;
    var i;
    while(i<6){
        if (username == user.uname && password == user.password) {
            document.write("you're in !");
            console.log("worked");
            break;
        } else {
            document.write("calling 911 ... FBI OPEN UP");
            console.log("not");
        }
        i++;
    }
}
// -------------------------
//--------------------------------------------------
function getData(){
    var fname = document.signup.fname.value;
    var lname = document.signup.lname.value;
    var eml = document.signup.email.value;
    var pass = document.signup.passwd.value;
    var uname = document.signup.uname.value;
    user = {
        first_name : fname,
        last_name : lname,
        email : eml,
        password : pass,
        username : uname
    }

    users.push(user);
    console.log(users);
}