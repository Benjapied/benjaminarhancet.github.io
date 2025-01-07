import './App.css';
import Navbar from './Components/Navbar.js';
import Header from './Components/Header.js';
import Description from './Components/Description.js';
import Projects from './Components/Projects/Projects.js';

import { useRef } from 'react';
import MyModal from './Components/Projects/MyModal.js';
import ModalManager from './Components/Projects/ModalManager.js';

function App() {

  const modalRef = useRef(null);

  const OpenModal = (project) => {

    if (modalRef.current) {
      modalRef.current.openModal(project);
    }
  };

  ModalManager.setModalRef(modalRef);

  return (
    <div className="App">
      <Navbar/>
      <Header title="PortFolio"/>
      <Description/>
      {/* <Parcours/> */}
      <Projects/>
      
      <MyModal ref={modalRef}/>

    </div>
  );

}

export default App;