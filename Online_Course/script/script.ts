let userIdautoincreament:number=100;
let autoIncreamentCourceId:number=100;
class User
{
    name:string;
    age:number;
    phoneNum:number;
    userId:string;
    constructor(stdName:string,stdAge:number,stdphoneNum:number,)
    {
        this.name=stdName;
        this.age=stdAge;
        this.phoneNum=stdphoneNum;
        this.userId="U"+userIdautoincreament;
        userIdautoincreament++;

    }
   
}
let registeredId:string;
let registeredName:string;
let totaldays:number;
class Enrollment
{
    courseName:string;
    required_Days:number;
    buyerId:string;
    courceId:string;
    constructor(subName:string,stDays:number,stName:string)
    {
        this.courseName=subName;
        this.required_Days=stDays;
        this.buyerId=stName;
        this.courceId='M'+autoIncreamentCourceId.toString;
        autoIncreamentCourceId+1;

    }
}
let Info:User[]=new Array();
Info.push(new User("karthick",21,9488847139));
Info.push(new User("kishore",26,9443292299));
Info.push(new User("Prasath",26,9488776699));
let Subjectlist:Enrollment[]=new Array();
function Detials() 
{
   
    (document.getElementById("Detials")as HTMLDivElement).style.display="block";
    (document.getElementById("main")as HTMLDivElement).style.display="none";
  
}
function userInfo()
{
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let age = parseInt((document.getElementById("age") as HTMLInputElement).value);
    let mobile = parseInt((document.getElementById("number") as HTMLInputElement).value);
    let det:User=new User(name,+age,+mobile);
    Info.push(det); 
    alert('Your regestration is done and your id is:'+det.userId);
    (document.getElementById("main")as HTMLDivElement).style.display="block";
    (document.getElementById("Detials")as HTMLDivElement).style.display="none";
}
function existinguser() 
{
    (document.getElementById("login")as HTMLDivElement).style.display="block";
    (document.getElementById("main")as HTMLDivElement).style.display="none";
}
function Goin() 
{

    let tem:boolean=false;
    let id=(document.getElementById("UserId")as HTMLInputElement).value;
    for(let i=0;i<Info.length;i++)
    {
        if(Info[i].userId==id)
        {
            registeredName=Info[i].name;
            registeredId=Info[i].userId;
            tem=true;
        }
    }
    if(tem==true)
    {
        alert('WELCOME'+registeredName);
        (document.getElementById("option")as HTMLDivElement).style.display="block";
        (document.getElementById("main")as HTMLDivElement).style.display="none";
        (document.getElementById("login")as HTMLDivElement).style.display="none"; 
       


    }
    else
    {
        alert('INVALID ID');
        main();
        (document.getElementById("main")as HTMLDivElement).style.display="block";
        (document.getElementById("Detials")as HTMLDivElement).style.display="none";
        (document.getElementById("login")as HTMLDivElement).style.display="none";  
    }
  
}

function avaliableCourse()
{
    (document.getElementById("main")as HTMLDivElement).style.display="none";
    (document.getElementById("option")as HTMLDivElement).style.display="none";
    (document.getElementById("course")as HTMLDivElement).style.display="block";  
}
function enrolledCourse()
{
    (document.getElementById("enrolled")as HTMLDivElement).style.display="block";
    (document.getElementById("option")as HTMLDivElement).style.display="none";
    (document.getElementById("login")as HTMLDivElement).style.display="none";  
}
function Register()
{
    let sub=(document.getElementById("subject")as HTMLSelectElement).value;
    let days=(document.getElementById("days")as HTMLInputElement).value;
    let cutId=registeredId;
    let course=new Enrollment(sub,+days,cutId);


}
