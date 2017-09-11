const container = document.querySelector('.my-app');

function logReg() {
    const divFlex = document.createElement('div');
    const divBtn = document.createElement('div');

    function createElement(elementName, parentElement) {
        const element = document.createElement(elementName);
        parentElement.appendChild(element);
        return element;
    }

    function createButtons() {
        const buttonLog = createElement('button', divBtn);
        const buttonReg = createElement('button', divBtn);

        divFlex.className = "flex";
        divBtn.className = "btn-group btn-group-sm";
        buttonLog.className = "btn btn-secondary active";
        buttonReg.className = "btn btn-secondary";
        buttonLog.textContent = "Log in";
        buttonReg.textContent = "Registration";

        divFlex.appendChild(divBtn);
        container.insertBefore(divFlex,container.childNodes[0]);
    }

    function createRegiterForm() {
        const form = document.createElement('form');

        const h2LogIn = createElement('h2', form);
        const hr = createElement('hr', form);
        const divFormEmail = createElement('div',form);
        const divFormPass = createElement('div',form);
        const submit = createElement('button',form);
        const labelEmail = createElement('label', divFormEmail);
        const labelPass = createElement('label', divFormPass);
        const inputEmail = createElement('input', divFormEmail);
        const inputPass = createElement('input', divFormPass);

        divFormEmail.className = "form-group";
        divFormPass.className = "form-group";
        inputEmail.className = "form-control";
        inputPass.className = "form-control";
        submit.className = "btn btn-primary";

        inputEmail.type = "email";
        inputPass.type = "password";
        submit.type = "submit";

        inputEmail.placeholder = "Enter email";
        inputPass.placeholder = "Password";

        labelEmail.textContent = "Email address";
        labelPass.textContent = "Password";
        submit.textContent = "Log in";
        h2LogIn.textContent = "Log in";

        container.insertBefore(form,container.childNodes[1]);
    }

    createButtons();
    createRegiterForm();

    divBtn.addEventListener('click', (e) => {
        const h2 = document.querySelector('form h2');
    const submit = document.querySelector('.btn-primary');
    if (e.target.textContent == "Log in") {
        if (e.target.className != "btn btn-secondary active") {
            e.target.nextSibling.className = "btn btn-secondary";
            e.target.className = "btn btn-secondary active";
            h2.textContent = "Log in";
            submit.textContent = "Log in";
        }
    } else if (e.target.textContent == "Registration") {
        if (e.target.className != "btn btn-secondary active") {
            e.target.previousSibling.className = "btn btn-secondary";
            e.target.className = "btn btn-secondary active";
            h2.textContent = "Registration";
            submit.textContent = "Sign up";
        }
    }
});
}

function createElement(elementName, parentElement, textContent, className) {
    const element = document.createElement(elementName);
    parentElement.appendChild(element);
    element.textContent = textContent;
    element.className = className;
    return element;
}

const toDo = createElement('header', container, "", "to-do");
const h1 = createElement('h1', toDo, "To do list app");
const form = createElement('form', toDo);
const input = createElement('input', form, "","form-control");
const button = createElement('button', form, "Submit", "btn btn-primary");
const divDard = createElement('div', container, "", "card");
const ul = createElement('ul', divDard, "", "list-group list-group-flush");
const liFirst = addLi("Hey I'm working");
const liSecond = addLi("Youahua");

input.placeholder = "Type a Task";
input.type = "text";
button.type = "submit";


form.addEventListener('submit',(e) => {
    e.preventDefault();
    let taskName = form.querySelector("input").value;
    if (taskName) {
        addLi(taskName);
        form.querySelector("input").value = "";
    }
});

function addLi(taskName) {
    const newTask = createElement('li',ul, "", "list-group-item");
    const chceckBox = createElement('input',newTask, "", "checkbox");
    const p = createElement('p',newTask, taskName);
    const div = createElement('div',newTask);
    const editButton = createElement('button',div, "Edit", "btn btn-warning btn-sm");
    const upButton = createElement('button',div, "Up", "btn btn-success btn-sm");
    const downButton = createElement('button',div, "Down", "btn btn-info btn-sm");
    const deleteButton = createElement('button',div, "Delete", "btn btn-danger btn-sm");
    chceckBox.type = "checkbox";
}

ul.addEventListener('change',(e) => {
    const checkbox = e.target;
    const li = checkbox.parentNode;
    if (checkbox.checked) {
        li.id = "lighten";
    } else {
        li.id = "";
    };
});

ul.addEventListener('click',(e) => {
    const button = e.target;
    const li = button.parentNode.parentNode;
    if (e.target.textContent == "Delete") {
        ul.removeChild(li);
    }else if (e.target.textContent == "Edit") {
        const div = button.parentNode;
        const p = div.previousSibling;
        const liInput = createElement('input', li);
        liInput.type = "text";
        liInput.value = p.textContent;
        li.removeChild(p);
        li.insertBefore(liInput,div);
        button.textContent = "Save";
        button.className = "btn btn-primary";
    }else if (e.target.textContent == "Save") {
        const div = button.parentNode;
        const input = div.previousSibling;
        const p = createElement('p', li, input.value);
        li.removeChild(input);
        li.insertBefore(p,div);
        button.textContent = "Edit";
        button.className = "btn btn-warning btn-sm";
    }else if (e.target.textContent == "Up") {
        const prevLi = li.previousSibling;
        if (prevLi) {
        ul.insertBefore(li,prevLi);
        };
    }else if (e.target.textContent == "Down") {
        const nextLi = li.nextSibling;
        if (nextLi) {
            ul.insertBefore(nextLi,li);
        };
    };
});