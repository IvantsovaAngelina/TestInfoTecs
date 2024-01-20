import React, { useState, useEffect} from 'react';

function InputSearch() {
    const [userSearch, setUserSearch] = useState([]);

    useEffect(() => {
        const getUserSearch = () => {
            fetch('https://dummyjson.com/users/search?q=oeg')
            .then(res => res.json())
            .then(data => {
                setUserSearch(data.users);
            })
            .catch(error => console.error('Error fetching users:', error));
        };
    
        getUserSearch();
      }, []); 

    return ( 
        <div className='search'>
            <input></input>
            <button>Поиск</button>
        </div>
     );
}

export default InputSearch;