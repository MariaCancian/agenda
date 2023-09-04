class User{
    constructor(name,  phone, cellphone, url, date, email, cep, city, insta, github){
this.name = name;
this.phone= phone;
this.cellphone= cellphone;
this.url= url;
this.date= date;
this.email= email;
this.cep= cep;
this.city= city;
this.insta= insta;
this.github= github;

    }
    
}

class ListUsers{
    constructor(){
        this.users= []
    }

    addUSers(param){
        this.users.push(param)
    }
}

const arrUsers =  new ListUsers;


function creatUser(){

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let cellphone = document.getElementById("cellphone").value;
    let url = document.getElementById("url").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let city = document.getElementById("city").value;
    let insta = document.getElementById("insta").value;
    let github = document.getElementById("github").value;
    
    const user = new User(name,  phone, cellphone, url, date, email, cep, city, insta, github);
    arrUsers.addUSers(user)
    console.log(arrUsers)
}