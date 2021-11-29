var userIdautoincreament = 100;
var autoIncreamentCourceId = 100;
var User = /** @class */ (function () {
    function User(stdName, stdAge, stdphoneNum) {
        this.name = stdName;
        this.age = stdAge;
        this.phoneNum = stdphoneNum;
        this.userId = "U" + userIdautoincreament;
        userIdautoincreament++;
    }
    return User;
}());
var registeredId;
var registeredName;
var totaldays;
var Enrollment = /** @class */ (function () {
    function Enrollment(subName, stDays, stName) {
        this.courseName = subName;
        this.required_Days = stDays;
        this.buyerId = stName;
        this.courceId = 'M' + autoIncreamentCourceId.toString;
        autoIncreamentCourceId + 1;
    }
    return Enrollment;
}());
var Info = new Array();
Info.push(new User("karthick", 21, 9488847139));
Info.push(new User("kishore", 26, 9443292299));
Info.push(new User("Prasath", 26, 9488776699));
var Subjectlist = new Array();
function Detials() {
    document.getElementById("Detials").style.display = "block";
    document.getElementById("main").style.display = "none";
}
function userInfo() {
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    var mobile = parseInt(document.getElementById("number").value);
    var det = new User(name, +age, +mobile);
    Info.push(det);
    alert('Your regestration is done and your id is:' + det.userId);
    document.getElementById("main").style.display = "block";
    document.getElementById("Detials").style.display = "none";
}
function existinguser() {
    document.getElementById("login").style.display = "block";
    document.getElementById("main").style.display = "none";
}
function Goin() {
    var tem = false;
    var id = document.getElementById("UserId").value;
    for (var i = 0; i < Info.length; i++) {
        if (Info[i].userId == id) {
            registeredName = Info[i].name;
            registeredId = Info[i].userId;
            tem = true;
        }
    }
    if (tem == true) {
        alert('WELCOME' + registeredName);
        document.getElementById("option").style.display = "block";
        document.getElementById("main").style.display = "none";
        document.getElementById("login").style.display = "none";
    }
    else {
        alert('INVALID ID');
        main();
        document.getElementById("main").style.display = "block";
        document.getElementById("Detials").style.display = "none";
        document.getElementById("login").style.display = "none";
    }
}
function avaliableCourse() {
    document.getElementById("main").style.display = "none";
    document.getElementById("option").style.display = "none";
    document.getElementById("course").style.display = "block";
}
function enrolledCourse() {
    document.getElementById("enrolled").style.display = "block";
    document.getElementById("option").style.display = "none";
    document.getElementById("login").style.display = "none";
}
function Register() {
    var sub = document.getElementById("subject").value;
    var days = document.getElementById("days").value;
    var cutId = registeredId;
    var course = new Enrollment(sub, +days, cutId);
}
