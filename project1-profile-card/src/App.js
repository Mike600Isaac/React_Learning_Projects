// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div className="App">
      <ProfileCard
      name="Dr. Angela Yu"
       bio="A web developer and the founder of applebrewery companies.."
       ImgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzi3EAcgGR60_VuWUM3EM9r-5Ynz64MF79w&s"
      />
    </div>
  );
}

export default App;
