console.log("This is Es6 version of our Project2 Jinah Library");

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {

    add(book) {
        //console.log("Adding to UI user data");
        let tableBody = document.getElementById("tableBody");
        let uiString = `
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        <td id = "delBtn"><button type="button" class="btn btn-primary">Delete</button></td>
                    </tr> `;
        tableBody.innerHTML += uiString;
        //to added books delete
        // let delBtn = document.getElementById("delBtn");
        // delBtn.addEventListener("click", () => {
        //     console.log("You deleted your book");
        //     tableBody.remove();
        // });
    }

    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset(); //when user click to add book data after click form will be empitys
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) { //means book name and author must contain more than 2 words
            return false;
        } else {
            return true;
        }
    }

    show(type, massage) {
        let alertMassage = document.getElementById("alertMassage");
        let strongTest;

        if (type === "success") {
            strongTest = "Success:";
        } else {
            strongTest = "Error!";
        }

        alertMassage.innerHTML = `
                    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>${strongTest}</strong> ${massage}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div> `;

        setTimeout(() => { //using this function after 2 seconds alert massage will be unShow
            alertMassage.innerHTML = ``;
        }, 5000);
    }

} //end of class Display


//add submit eventListener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    //console.log("you have submitted your form");
    //getting three perameters for our new object
    let bookName = document.getElementById("bookName").value;
    let bookAuthor = document.getElementById("bookAuthor").value;
    let givenType;

    //variables for Check-box section
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let history = document.getElementById("history");
    let space = document.getElementById("space");

    if (fiction.checked) {
        givenType = fiction.value; //getting value for perameter givenType
    } else if (programming.checked) {
        givenType = programming.value;
    } else if (history.checked) {
        givenType = history.value;
    } else if (space.checked) {
        givenType = space.value;
    }


    let book = new Book(bookName, bookAuthor, givenType); //creating Object through Constructor, that will be automatically run
    console.log(book);

    let display = new Display();

    if (display.validate(book)) { //aplling Validation on user input date if validation will fales works else condition

        display.add(book); //then add user input data on UI
        display.clear(); //when user click to add book data after click Form will be empity
        display.show("success", "Your Book has been added Successfully!");
        // display.deleteBook();
    } else {
        //show error to user
        display.show("danger", "Sorry you cannot add this Book. Please Write Valid, name of Book and Author of Book!");
    }

    e.preventDefault(); //using this to keep not reload page autometically

} //end of libraryFormSubmit()