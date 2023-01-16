import './Search.css'

function Search() {
    return (
        <div className='search'>
            <div className='search_type_in'>
                <input className='search_request_input' type="text" id="search_request_input" name="search_request_input"/>
            </div>

            <div className='search_button'>
                <button> Search </button>
            </div>

        </div>
    );
}

export default Search