import './App.css';
import { PresentationCard } from './Components/PresentationCard';
import { Form } from './Components/Form';


function App() {
  return (
    <div className="App">
      <PresentationCard
        name={"Javier"}
        description={"A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic. Choosing the most relevant academic and professional experiences and putting them in an easily understood format will show an employer proof of your organizational, communication, and tangible career-related skills.   "}
        email={"javier@gmail.com"}
      ></PresentationCard>

      <Form>

      </Form>
    </div>
  );
}

export default App;
