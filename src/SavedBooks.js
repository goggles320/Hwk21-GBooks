import React, {Component} from "react";

class SavedBooks extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            savedbooks: [],
            searchField: "",
            sort:""
        }
    }

    render() {
        return (
            <div>
                <h1>Saved Books Page.</h1>
            </div>
        )
    }    
}

export default SavedBooks;