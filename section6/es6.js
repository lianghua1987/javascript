class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book){
        const list = document.getElementById('book-list');
        // create element
    
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href = \'#\' class = \'delete\'>x</a></td>
        `;
        list.appendChild(row);
    }

    alert(message, className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);    
    }

    clear(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    delete(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
            this.alert('book removed', 'success');
        }
    }
}

// Event listener
document.getElementById("book-form").addEventListener('submit', function(e){    

    // get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const book = new Book(title, author, isbn);


    const ui = new UI();

    if(title === '' || author === '' || isbn === ''){
        ui.alert('please fill in the fileds', 'error');
    } else {
        // add book
        ui.alert('book added', 'success');
        ui.addBookToList(book);
        ui.clear();
    }
    
    //set timeout
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000)
    e.preventDefault();
})

document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.delete(e.target);
    e.preventDefault();
})