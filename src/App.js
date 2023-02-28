import './App.css';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import DriverCard from './components/DriverCard';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import Rating from './components/Rating';
import image from './images/a-guy-opens-his-door-and-gets-shot-and-you-15772358.jpg'

function App() {
  return (
    <div className="App">
      <IdCard firstName={"Walter"} lastName={"White"} gender={"male"} height={1.82} birth={Date("1964-05-24")} image={image} />
      <br />
      <Greetings lang="de">
        Jan
      </Greetings>
      <br />
      <Greetings lang="en">
        Mike
      </Greetings>
      <br />
      <Random min={1} max={5} />
      <br />
      <Random min={5} max={40} />
      <br />
      <BoxColor r={42} g={21} b={136} />
      <br />
      <BoxColor r={241} g={121} b={156} />
      <br />
      <CreditCard type={"Visa"} number={'**** **** **** ' + 6841} expirationMonth={3} expirationYear={2026} bank={"BBVA"} owner={"Palito Palotes"} bgColor={"#11aa99"} color={"white"} />
      <br />
      <CreditCard type={"Mastercard"} number={'**** **** **** ' + 1542} expirationMonth={7} expirationYear={2025} bank={"N26"} owner={"Palito Palotes"} bgColor={"#8563bb"} color={"white"} />
      <br />
      <Rating>
        0
      </Rating>
      <Rating>
        1.49
      </Rating>
      <Rating>
        2.7
      </Rating>
      <Rating>
        4.4
      </Rating>
      <br />
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />
      {/* <DriverCard name={"Mario"} model={"Ford Bronco"} licensePlate={"8282 GJE"} img={image} /> */}
    </div>
  );
}

export default App;
