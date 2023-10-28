const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


function showError(input, message) {
    let formControl = input.parentElement;
    formControl.className = "form-control error";
    let small = formControl.querySelector("small");
    small.innerHTML = message;
};
function showSuccess(input) {
    let formControl = input.parentElement;
    formControl.className = "form-control success";
};

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



function checkRequired(inputs) {
    inputs.forEach((input) => {
        if(input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        }  else {
           showSuccess(input);
        }
    });
};

function chekLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} кеминде ${min} белгиден туруш керек`)
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} ${max} белгиден аз болуш керек`)
    }
    else {
        showSuccess(input)
    }
};
function chekEmail(input) {
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(re.test(String(input.value.trim()). toLowerCase())) {
    showSuccess(input);
  }
  else {
    showError(input, `${getFieldName(input)}  жарактуу эмес`)
  }
}

function chekPassword(input1, input2) {
   if(input1.value !== input2.value) {
    showError(input2, "Сыр соз дал келбеди")
   }

// else {
//     showSuccess(input1);
//    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    chekLength(username, 3, 15);
    chekEmail(email)
    chekLength(password, 6, 25)
    chekPassword(password, password2)
});


// function chekEmail(input) {
//     const re =
//   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   if(re.test(String(input.value.trim()). toLowerCase())) {
//     showSuccess(input);
//   }
//   else {
//     showError(input, `${getFieldName(input)} сыр соз жарактуу эмес`)
//   }
// }
// let pattern = /hello/
// let str = 'hello, World'
// let result = pattern.test(str)

// console.log(result);



// function chekLength(input, min, max) {
//     if(input.value.length < min) {
//         showError(input, `${getFieldName(input)} кеминде ${min} белгиден туруш керек`)
//     }
//     else if (input.value.length > max) {
//         showError(input, `${getFieldName(input)} ${max} белгиден аз болуш керек`)
//     }
//     else {
//         showSuccess(input)
//     }
// };
// function setSuccess(element) {
//     let parentElement = element.parentElement;
//     parentElement.
// }
// // function setError(input, message) {
// //     const inputGroup = input.parentElement;
// //     const errorElement = inputGroup.querySelector('small')

// //     errorElement.innerText = message;
// //     inputGroup.classList.add('error');
// //     inputGroup.classList.remove('success')
// // }


// // function setError(input) {
// //     const inputGroup = input.parentElement;
// //     const errorElement = inputGroup.querySelector('.error')

// //     errorElement.innerText = '';
// //     inputGroup.classList.add('success');
// //     inputGroup.classList.remove('error')
// // }


// function checkRequired(inputs) {
//     inputs.forEach((input) => {
//         if(input.value.trim() === "") {
//             showError(input, 'is required')
//         }  else {
//            showSuccess(input);
//         }
//     });
// };

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     checkRequired()
// })

// function checkRequired() {

// }

// function showError(element, message) {
//     const formControl = input.preventElement;
//     const errorElement = formControl.queryselector('small')

//     errorElement.innertext = message;
//     formControl.classList.add('error')
// }


// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     checkRequired([username, email, password, password2]);
// });