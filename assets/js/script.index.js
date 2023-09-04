class User {
    constructor(name, phone, cellphone, url, date, email, cep, city, insta, github) {
        this.name = name;
        this.phone = phone;
        this.cellphone = cellphone;
        this.url = url;
        this.date = date;
        this.email = email;
        this.cep = cep;
        this.city = city;
        this.insta = insta;
        this.github = github;
        this.id = this.generateId();
        this.age = this.calculateAge();
        this.zodiacSign= this.getZodiacSign();

    }

    getZodiacSign() {
        let date = new Date(this.date);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");
        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
    calculateAge() {
        const date = this.date;
        const dateYear = new Date(date).getFullYear();
        const weYear = new Date().getFullYear();
        const dateMonth = new Date(date).getMonth() + 1;
        const weMonth = new Date().getMonth() + 1;


        const age = weYear - dateYear;
        if (dateMonth > weMonth) {
            return age - 1
        } else {
            return age
        }

    }
    generateId() {
        return Math.floor(Math.random() * 9999);
    }
}




class ListUsers {
    constructor() {
        this.users = []
    }

    addUsers(param) {
        if (checkInput() == false) {
            envieMSG("n foi enviada", "error")
        } else if (isURLValida(param.url) == false) {
            envieMSG("endereço de imagem invalida", "error")
        }


        else {
            envieMSG("foi enviada", 'sucess')
            this.users.push(param)
            rengerUser();
            cleanInputs();

        }

    }
    getContactById(id) {
        console.log("Método: ", id);
        return this.users.find(user => user.id == id)
    }
}

const arrUsers = new ListUsers();


function creatUser() {

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

    const user = new User(name, phone, cellphone, url, date, email, cep, city, insta, github);

    arrUsers.addUsers(user)
    console.log(arrUsers)
}
//verificação dos inputs
function checkInput() {
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

    if (name == '' || phone == '' || cellphone == '' || url == '' || date == '' || email == '' || cep == '' || city == '' || insta == '' || github == '') {
        console.log(" NÃO PASSOU PELOS INPUT VAZIOS")
        return false;
    } else {
        console.log("PASSOU PELOS INPUTS VAZIOS")
        return true;
    }
}

function rengerUser() {
    console.log('pasou pela funcao rangerUser()');
    let msg = '';
    arrUsers.users.forEach(user => {
        msg += `
        <div class="contact" onclick ="newUserScreen(${user.id})">
        <img src="${user.url}"class ="avatar">
        <p>Nome Completo:${user.name}</p>
        <p>Telfone Fixo:${formatedCellphone(user.phone)}</p>
        <p>telefone celular:${formatedCellphone(user.cellphone)}</p>
        </div>
        `;
    });
    document.getElementById("result").innerHTML = msg;
}

function dateBr(date) {
    console.log("PASSOU PELA FUNÇÃO DATEBR()");
    return date.split('-').reverse().join('/');
}

function cleanInputs() {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("cellphone").value = "";
    document.getElementById("url").value = "";
    document.getElementById("date").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("city").value = "";
    document.getElementById("insta").value = "";
    document.getElementById("github").value = "";
}

function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

function formatedCellphone(cellphone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function separingCEP(cep) {
    const arrCEP = cep.split("");

    arrCEP.splice(5, 0, "-");

    return arrCEP.join("");
}

function envieMSG(msg, tipoMsg) {
    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    let msgParaTela = `
    <p class = '${tipoMsg}'>${msg}</p>`

    msgDiv.innerHTML = msgParaTela;
    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 3000);
}

function gerarLinkwhatsapp(telefone) {
    let link = "https://api.whatsapp.com/send?phone=55"
        + telefone;
    return link;
}

function gerarLinkinstagram(insta) {
    let link = "https://instagram.com/"
        + insta;
    return link;
}

function gerarLinkGithub(github) {
    let link = "https://github.com/"
        + github;
    return link;
}

function newUserScreen(id) {
    // alert(id)
    const novoUser = arrUsers.getContactById(id)
    console.log(novoUser);
    console.log("passou pela newUserScreen()");
    let msg = `
        <div class="allContact">
            <img src="${novoUser.url}" alt="${novoUser.name}" class= "avatar">
            <p>Nome Completo:${novoUser.name}</p>
            <p>identificação:${novoUser.id}</p>
            <p>Telfone Fixo:${formatedCellphone(novoUser.phone)}</p>
            <p>telefone celular:${formatedCellphone(novoUser.cellphone)}</p>
            <p> Data de aniversário:${dateBr(novoUser.date)}</p>
            <p> signo:${novoUser.zodiacSign}</p>
            <p>Idade:${novoUser.age} anos</p>
            <p>email:${novoUser.email}</p>
            <p>Cep:${separingCEP(novoUser.cep)}</p>
            
            <a target = "_blank" href="${gerarLinkwhatsapp(novoUser.cellphone)}"><img class="icons" src = https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png></a>
            <a target = "_blank" href="${gerarLinkinstagram(novoUser.insta)}"><img class="icons" src = https://ceres.ifch.unicamp.br/pf-ceres/2023-07/Instagram-Icon.png></a>
            <a target = "_blank" href="${gerarLinkGithub(novoUser.github)}"><img class="icons" src =https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png></a>
        </div>
        `;
    document.getElementById("card2").innerHTML = msg;

}




