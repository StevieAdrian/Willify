function validate() {
    let form = document.getElementById("formContact");
    let inputName = document.getElementById("name")
    let errorName = document.getElementById("error-name")
    let inputEmail = document.getElementById("email")
    let inputPassword = document.getElementById("password")
    let inputAge = document.getElementById("age")
    let errorAge = document.getElementById("error-age")
    let inputMale = document.getElementById("male")
    let inputFemale = document.getElementById("female")
    let errorGender = document.getElementById("error-gender")

    errorName.innerHTML = ""
    errorAge.innerHTML = ""
    errorGender.innerHTML = ""

    if (inputName.value == ""){
        errorName.innerHTML = "Please enter a valid name"
        return false
    } else if (inputName.value.length < 5 || inputName.value.length > 20){
        errorName.innerHTML = "Name must be 5-20 characters"
        return false
    }
    
    if (!isValid(inputEmail.value)){
        return false
    }
    
    if (!isAlphaNumeric(inputPassword.value)){
        return false;
    }

    if (inputAge.value == ""){
        errorAge.innerHTML = "Please enter a valid age"
        return false
    } else if (isNaN(inputAge.value)){
        errorAge.innerHTML = "Age must be numeric"
        return false
    } else if (inputAge.value < 8){
        errorAge.innerHTML = "You must be at least 8 years old"
        return false
    }

    if (!inputMale.checked && !inputFemale.checked){
        errorGender.innerHTML = "Please enter a gender"
        return false
    }

    alert("Thank you for becoming a part of Willify!")
    form.submit()
}

function isValid(email){
    let errorEmail = document.getElementById("error-email")
    errorEmail.innerHTML = ""

    let countAt = 0
    let countDot = 0

    if (email == ""){
        errorEmail.innerHTML = "Please enter a valid email"
        return false
    }
    for(let i = 0; i < email.length; i++){
        if(email[i] == '@'){
            countAt++
            posA = i
        } else if(email[i] == '.'){
            countDot++;
        }
    }

    if(countAt != 1){
        errorEmail.innerHTML = "Email must contain one [@]"
        return false
    } 

    if(email.split("@")[0].length == 0){ 
        errorEmail.innerHTML = "There must be a text before [@]"
        return false
    } else if(email.split("@")[1].length == 0){
        errorEmail.innerHTML = "There must be a text after [@]"
        return false
    } else if(email.split("@")[1][0] == '.'){
        errorEmail.innerHTML = "[.] can't be directly behind [@]"
        return false    
    } 
    
    if(email.split(".")[1].length == 0){
        errorEmail.innerHTML = "There must be a text behind [.]"
        return false
    }

    return true
}

function isAlphaNumeric(password){
    let errorPassword = document.getElementById("error-password")
    let hasNumber = false;
    let hasUpperCase = false;
    let hasSpecialChar = false;
    errorPassword.innerHTML = ""

    if (password == ""){
        errorPassword.innerHTML = "Password must be 8-16 characters long, contain at least one uppercase letter, one number, and one special character."
        return false
    } else if (password.length < 8 || password.length > 16){
        errorPassword.innerHTML = "Password must be 8-16 characters long"
        return false
    }

    for (let i = 0; i < password.length; i++){
        if (password[i] >= 'a' && password[i] <= 'z'){
            
        } else if (password[i] >= '0' && password[i] <= '9'){
            hasNumber = true;
        } else if (password[i] >= 'A' && password[i] <= 'Z'){
            hasUpperCase = true;
        } else {
            hasSpecialChar = true;
        }
    }

    if (!hasNumber){
        errorPassword.innerHTML = "Password must contain at least one number"
        return false
    } else if (!hasUpperCase){
        errorPassword.innerHTML = "Password must contain at least one uppercase letter"
        return false
    } else if (!hasSpecialChar){
        errorPassword.innerHTML = "Password must contain at least one special character"
        return false
    }

    return true
}

let open = false
function toggle(){
    if(open == false){
        open = true
        document.getElementById("hamburger-menu").style.display = "flex"
    } else if(open == true){
        open = false
        document.getElementById("hamburger-menu").style.display = "none"
    }
}