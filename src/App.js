import Dropdown from './components/Dropdown';
import TimePicker from './components/TimePicker';
import DinersPicker from './components/DinersPicker';
import './App.css';
import '@fontsource/karla'; // Defaults to 400 weight
import DatePicker from './components/DatePicker';



function App() {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  return (
    <>
      <Dropdown options={options} label="Choose an option:" />
      <TimePicker />
      <DinersPicker />
      <DatePicker />
    </>
  );
}

export default App;
