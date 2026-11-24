// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'

//  card components
// import Card from "./Card.jsx";


// add CSS styles 3rd
// import Button from './Button.jsx'
// function App() {

//   return(
    // <>
    // <Header/>
    // <Footer/>
    // <Food/>
    // </>

    // <>

    //  <Card/>
    //  <Card/>
    //  <Card/>
    //  <Card/>

    // </>

//     <Button/>


//   );

// }

// export default App



// 4th props
// import Student from './Student.jsx'

// function App(){
//   return(
//     <>
//     <Student name="Spongebob" age={30} isStudent={true}/>
//     <Student name="sudipta" age={30} isStudent={false}/>
//     <Student name="niloy" age={30} isStudent={true}/>
//     <Student name="bhowmick" age={30} isStudent={false}/>
//     <Student name="Larry"/>
//     </>
//   )
// }

// export default App


// 5th conditional rendering 
// import UserGreeting from "./UserGreeting.jsx";
// function App(){
//   return(
//     <>
//     <UserGreeting isLoggedIn={true} username="BroCode"/>
//     </>
//   )

// }
// export default App



// 6th render lists
// import List from './List.jsx'

// function App(){

//   const fruits = [{id: 1, name: "apple", calories: 95},
//                     {id: 2, name: "orange", calories: 45},
//                     {id: 3, name: "banana", calories: 105},
//                     {id: 4, name: "coconat", calories: 159},
//                     {id: 5, name: "pineapple", calories: 35},];
     
//   const vegetables = [{id: 6, name: "potatoes", calories: 110},
//                     {id: 7, name: "celery", calories: 15},
//                     {id: 8, name: "carrots", calories: 25},
//                     {id: 9, name: "corn", calories: 36},
//                     {id: 10, name: "broccoli", calories: 50},];   

//   return(
//     <>
//       {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
//       {vegetables.length > 0 && <List items={vegetables} category="vegetables"/>}
     
//     </>
  
//   );
// }

// export default App


// 7th 01:29:43 click events 

// import Button_2 from './Button_2.jsx'
// import ProfilePicture from './ProfilePicture.jsx'

// function App(){

//   return((<ProfilePicture/>)
// )

// }

// export default App


// 8th   01:42:04 useState() hook 

// import MyComponent from './MyComponent.jsx'
// import Counter from './Counter.jsx'

// function App(){

//   // return((<MyComponent/>)
//   return((<Counter/>)
// )

// }

// export default App

// 9th   01:58:36 onChange event handler

// import MyComponent_2 from './MyComponent_2.jsx'

// function App(){

//   return((<MyComponent_2/>)
// )

// }

// export default App


// 10. 02:13:16 color picker app

// import ColorPicker from './ColorPicker.jsx'

// function App(){

//   return((<ColorPicker/>)
// )

// }

// export default App

// 11. 02:23:31 updater functions 

// import ToDoList from './ToDoList.jsx'

// function App(){

//   return(<ToDoList/>
// )

// }

// export default App



// 16. 03:24:17 useEffect() hook

// import DigitalClock from './DigitalClock.jsx'

// function App(){

//   return(<>
//    <DigitalClock/>
//   <DigitalClock/>
//   <DigitalClock/>
//   <DigitalClock/>
//   </>
 
// )

// }

// export default App


// import React from 'react';
// import ComponentA from './ComponentA.jsx';

// function App() {
//     return (
//         <ComponentA />
//     );
// }

// export default App;


// import MyComponent_9 from './MyComponent_9.jsx';

// function App() {
//     return (
//         <MyComponent_9 />
//     );
// }

// export default App;



import Stopwatch from './Stopwatch.jsx';

function App() {
    return (
        <>
        <Stopwatch />
        <Stopwatch />
        <Stopwatch />
        </>
        
    );
}

export default App