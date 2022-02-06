let form = [...document.querySelector('.form').children];
let button = document.getElementById('claim-trial')
let message = document.querySelector('.message-error')
let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
let verify = 0;

button.addEventListener('click', () => {

    for (let i = 0; i < 4; i++) {

        if (!form[i].firstElementChild.value) {
            if (i == 2) {
                if (!emailRegex.test(form[i].firstElementChild.value)) {

                    form[i].firstElementChild.setAttribute("placeholder", "email@example/com")
                    form[i].firstElementChild.classList.add('email-example')

                    form[i].children[1].style.display = "block"
                    form[i].children[0].style.border = "1px solid var(--red)"

                }
            } else {
                form[i].classList.add('error')
                form[i].firstElementChild.setAttribute('placeholder', '')
                form[i].children[1].style.display = "block"
                form[i].children[0].style.border = "1px solid var(--red)"
            }

        } else if (form[i].firstElementChild.value) {
            if (i == 2) {
                if (!emailRegex.test(form[i].firstElementChild.value)) {

                    form[i].firstElementChild.setAttribute("placeholder", "email@example/com")
                    form[i].firstElementChild.classList.add('email-example')

                    form[i].children[1].style.display = "block"
                    form[i].children[0].style.border = "1px solid var(--red)"
                } else {
                    form[i].children[1].style.display = "none"
                    form[i].children[0].style.border = "1px solid var(--gray-blue)"
                }
            } else {
                form[i].classList.remove('error')
                form[i].children[1].style.display = "none"
                form[i].children[0].style.border = "1px solid var(--gray-blue)"


            }

        }

    }

})