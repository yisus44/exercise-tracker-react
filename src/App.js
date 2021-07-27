import './App.css';
import RegisterUser from './components/register/RegisterUser';
import AddWorkout from './components/add-workout/AddWorkout';
import SeeWorkouts from './components/see-workouts/SeeWorkouts';
function App() {
  return (
    <div>
      <SeeWorkouts />
      <AddWorkout />
      <RegisterUser />
      <p class="center-div">
        Code of the backend here:
        https://github.com/yisus44/exercise-tracker-graph
      </p>
    </div>
  );
}

export default App;
