
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  return (
    <section className="container">
      <div id="col-1">
      <h1>LogIn</h1>
      <TextField
          id="outlined-textarea"
          label="Username"
          placeholder="username"
          multiline
          className="username"
        />
      <TextField
          id="outlined-textarea"
          label="Password"
          placeholder="password"
          multiline
          className="password"
        />
        <Button className="button" variant="contained">Contained</Button>
      </div>
      <div id="col-2">
        <img src={require('./assets/imgs/scraper22.png')} alt="scrap2per" />
        <span id="firstH">ScrapperZilla</span>
        <span id="secondH">Scrap all the content you want</span>
      </div>
    </section>
  );
}

export default App;
