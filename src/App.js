import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import HouseCard from './components/HouseCard/HouseCard'
import CardList from "./components/CardList/CardList";
import ApartmentPostForm from "./components/AprtmentPostForm/ApartmentPostForm";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        {/* <ApartmentPostForm></ApartmentPostForm> */}
        <CardList></CardList>
      </Box>
    </Container>
  );
}
