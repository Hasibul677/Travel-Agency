import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import Booking from './components/Booking/Booking';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Login from './components/Login/Login';
import MyBooking from './components/MyBooking/MyBooking';
import Service from './components/Service/Service';
import TotalBooking from './components/TotalBooking/TotalBooking';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';
import Offer from './components/Offer/Offer';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import Travel from './components/Travel/Travel';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Hero></Hero>
          <Service></Service>
          <Travel></Travel>
          <Gallery></Gallery>
          <Blog></Blog>
          <Offer></Offer>
        </Route>
        <Route path='/home'>
          <Hero></Hero>
          <Service></Service>
          <Travel></Travel>
          <Gallery></Gallery>
          <Blog></Blog>
          <Offer></Offer>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path='/addService'>
          <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path='/allBookingInfo'>
          <TotalBooking></TotalBooking>
        </PrivateRoute>
        <Route path='/contact'>
         <Contact></Contact>
        </Route>
        <PrivateRoute path='/myBooking'>
          <MyBooking></MyBooking>
        </PrivateRoute>
        <PrivateRoute path='/booking/:id'>
          <Booking></Booking>
        </PrivateRoute>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </AuthProvider>
  );
}

export default App;
