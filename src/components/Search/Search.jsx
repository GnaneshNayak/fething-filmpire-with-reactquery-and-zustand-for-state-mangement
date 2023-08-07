import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';
import useStore from '../../app/store';

const Search = () => {
  const [query, setQuery] = useState('');
  const setSearchInput = useStore((s) => s.setSearchInput);

  const classes = useStyles();
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log(query);

      setSearchInput(query);
      setQuery('');
    }
  };
  return (
    <div className={classes.searchContianer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
export default Search;

// import React, { useState, useEffect } from 'react';
// import { TextField, InputAdornment } from '@mui/material';
// import { Search as SearchIcon } from '@mui/icons-material';
// import { useLocation } from 'react-router-dom';
// import useStyles from './styles';
// const Search = () => {
//   const [query, setQuery] = useState('');
//   const classes = useStyles();
//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//     }
//   };
//   return (
//     <div className={classes.searchContianer}>
//       <TextField
//         onKeyPress={handleKeyPress}
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         variant="standard"
//         InputProps={{
//           className: classes.input,
//           startAdornment: (
//             <InputAdornment position="start">
//               <SearchIcon />
//             </InputAdornment>
//           ),
//         }}
//       />
//     </div>
//   );
// };
// export default Search;
