import React from "react";
import {Link} from "react-router-dom";

const SearchArea = (props) => {
    return (
        <div className="search-area">
            <form onSubmit={props.searchBook} action="">
                <input onChange={(props.handleSearch)}type="text"/>
                <button type="submit">Search</button>
                <Link to={"/savedbooks"}>
                    <button onChange={props.savedBooks}>Saved Books</button>
                </Link>
                <select defaultValue="Sort" onChange={props.handleSort}>
                    <option value="Sort">Sort</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>
                
            </form>
        </div>
    )
}

export default SearchArea;