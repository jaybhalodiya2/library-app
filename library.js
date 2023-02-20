console.log("this is library");

//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//display constructor
function Display() {

}

//add methods to display prototype
Display.prototype.add = function (book) {
    console.log("adding ui");
    tablebody = document.getElementById('tablebody')
    let uistring = `<tr>
                         <td>${book.name}</td>
                         <td>${book.author}</td>
                         <td>${book.type}</td>
                    </tr>`
    tablebody.innerHTML += uistring;
}

//clear method
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

//validate method
Display.prototype.validate = function (book) {
    if(book.name.length<2 || book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}

Display.prototype.show = function(type,showmessage){
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message: </strong> ${showmessage}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`
    setTimeout(function(){
        message.innerHTML = ''
    },2000)                
}


// add submit event listener to libraryform
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryformsubmit);

function libraryformsubmit(e) {
    console.log("form submited");
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;
    //radio button
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','your book add successfully added')
    }
    else{
        display.show('danger','sorry you cannot add this book');
    }
    e.preventDefault();
}