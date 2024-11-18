import './App.css';
import { PresentationCard } from './Components/PresentationCard';

const team = [
  {
  name: "Javier",
  description: "I love js",
  email: "javier@gmail.com"
  },
  {
    name: "Alex",
    description: "I love css",
    email: "alex@gmail.com"
  },
  {
    name: "Mike",
    description: "I love html",
    email: "mike@gmail.com"
  }
]

function App() {
  return (
    <div>
        {/** This is just how we use the function and how we
         *  give it input and how we use the output */}
        {
          team.map(person => {
            return <PresentationCard
              name={person.name}
              description={person.description}
              email={person.email}        
            />
          })
        }
    </div>
  );
}

export default App;
