import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Trending"
        value="trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        label="TV shows"
        value="tvshows"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        label="Movie"
        value="movie"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction 
      label="Search" 
      value="search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}