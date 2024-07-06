import SearchIcon from '@mui/icons-material/Search';

import './style.sass';

const Search = ({ placeholder, value, setValue } : { placeholder:string, value:string, setValue:any }) => {
    return(
        <div id="search-component-main">
            <input 
                value={value}
                type="text" 
                placeholder={placeholder} 
                onChange={(element) => setValue(element.target.value)}
            />
            <SearchIcon/>
        </div>
    )
}

export default Search;