import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
const formData = localStorage.getItem(LOCALSTORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) : {};


formRef.addEventListener('input', throttle(inputData, 500));
formRef.addEventListener('submit', toSubmit);

setFormData ()

function inputData({ target: { name, value } }) {
    formData[name] = value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
    }

function setFormData () {
    const emailRef = formRef.elements.email;
    const messageRef = formRef.elements.message;

    const localStorageData = localStorage.getItem(LOCALSTORAGE_KEY);

    if (localStorageData) {
        const data = JSON.parse(localStorageData);
        if (data.email) {
            emailRef.value = data.email;
        }
        if (data.message) {
            messageRef.value = data.message;
        }
    }
}

function toSubmit (e) {
    e.preventDefault();

    const email = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;

    if (email === "" || message === "") {
        alert("Заполните пустые поля!");
        return;
    }
    formRef.reset();
    console.log({email, message});
}
