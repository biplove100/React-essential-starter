import CoreConcept from './components/CoreConcept.jsx';
import components from './assets/components.png';
import config from './assets/config.png';
import stateMgmt from './assets/state-mgmt.png';

function App() {
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <CoreConcept title="Components" description="The core UI building block - compose the user interface by combining multiple components." ImgSrc={components} />
        <CoreConcept title="Props" description="Pass data to components." ImgSrc={config}/>
        <CoreConcept title="State" description="Manage data that changes over time." ImgSrc={stateMgmt}/>
      </main>
    </div>
  );
}

export default App;
