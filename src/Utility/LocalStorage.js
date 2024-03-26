const getBooks = (name)=>{
    const Books = localStorage.getItem(name);
    if (Books){
        return JSON.parse(Books);
    }else{
        return [];
    }
}

const setBook = (ID,name) =>{
    const BooksList = getBooks(name);
    const exists = BooksList.find(Books=> Books === ID);

    if (!exists){
        BooksList.push(ID);
        localStorage.setItem(name, JSON.stringify(BooksList))
    } 
}
export {getBooks,setBook};