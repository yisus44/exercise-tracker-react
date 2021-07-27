/*getWorkouts(userID: ID!): [Workout] */
import react from 'react';
import { gql } from '@apollo/client';
import './SeeWorkout.styles.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';

let GET_WORKOUTS = gql`
  query GetWorkouts($userID: ID!) {
    getWorkouts(userID: $userID) {
      duration
      category
      id
    }
  }
`;

export default function SeeWorkouts() {
  let userIDInput;
  return (
    <div class="center-div">
      <h1>Consult your workouts here!</h1>
      <form
        onSubmit={async function (event) {
          event.preventDefault();
          try {
            const client = new ApolloClient({
              uri: 'https://exercise-tracker-graphql.herokuapp.com',
              cache: new InMemoryCache(),
            });
            const response = await client.query({
              query: GET_WORKOUTS,
              variables: { userID: userIDInput.value },
            });

            response.data.getWorkouts.map((workout) => {
              alert(`
              Workouts...
              ${workout?.category}
              ${workout?.duration}
              ${workout?.id}
              `);
              return workout.id;
            });
          } catch (error) {
            console.log(error);
            alert('Something went wrong, review your ID');
            console.log(JSON.stringify(error, null, 2));
          }
        }}
      >
        <br />
        <input
          id="userIDInputInput"
          placeholder="userIDInput"
          class="content"
          ref={(node) => {
            userIDInput = node;
          }}
        />

        <br />
        <br />
        <button class="content" type="submit">
          Check!
        </button>
      </form>
    </div>
  );
}
