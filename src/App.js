import * as React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

function App() {
  const showAlert = () => alert('Data sent successfully!');

  return (
    <div className="App">
      <Typography variant="h4" gutterBottom component="div">
        The Form for an Integration Test
      </Typography>

      <Box display="flex" flexDirection="column" width="25%">
        <TextField id="data" label="Data" variant="outlined" />

        <Button id="button" variant="contained" onClick={showAlert}>Send</Button>
      </Box>
    </div>
  );
}

export default App;
