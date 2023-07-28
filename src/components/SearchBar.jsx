import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";

export default function SearchBar() {
    let { term, handleSearch } = useContext(SearchContext);

    return (
        <form onSubmit={(e) => handleSearch(e, term.current.value)}>
            <input ref={term} type="text" placeholder="Search for music" />
            <button type="submit" >Search</button>
        </form>
    )
}