import React, {Component} from 'react';
import SearchArea from "./SearchArea";
import BookList from "./BookList"

import request from "superagent";


class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            savedbooks: [],
            searchField: "",
            sort:""
        }
    }
    
    //GET data from Google Books API
    searchBook = (event) => {
        event.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField})
            .then((data) => {
                //console.log(data);
                const cleanData = this.cleanData(data)
                this.setState({books: cleanData});
            })
    }

    //Save data for the "saved" Page
    saveBook = (event) => {
        this.setState({savedbooks: event.target.value})
    }

    handleSearch = (event) => {
        //console.log(event.target.value);
        //Every time type into input box will fire an event
        this.setState({searchField: event.target.value })
    }

    handleSort = (event) => {
        //Sort button value to whatver user selects from dropdown
        this.setState({sort: event.target.value})
    }

    //Cleans up book object which does not include the properties we ask for (e.g. year, author)
    cleanData = (data) => {
        const cleanedData = data.body.items.map((book) => {
            //Check if has "published date property"
            if (book.volumeInfo.hasOwnProperty("publishedDate") === false){
                //Set default date to 0000 if no published date provided
                book.volumeInfo["publishedDate"] = "0000";
            }
            //Check if has "published date property"
            else if (book.volumeInfo.hasOwnProperty("imageLinks") === false){
                //Set default date to 0000 if no published date provided
                book.volumeInfo["imageLinks"] = { thumbnail: "https://commons.wikimedia.orghttps://www.shutterstock.com/image-vector/no-image-available-sign-absence-373243873/wiki/File:No_image_available.svg"};
            }
            return book;
        })
        return cleanedData;
    }
    render(){
        const sortedBooks = this.state.books.sort((a,b) => {
            if (this.state.sort === "Newest"){
                //Sort by the newest Year only
                return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
            }
            else if (this.state.sort === "Oldest"){
                //Sort by the newest Year only
                return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
            }
        })
        return (
            <div>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort}/> 
                <BookList books={sortedBooks}/>
            </div>
        );
    }
}
export default Books;