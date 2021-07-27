import react from 'react';
import { gql, useMutation } from '@apollo/client';
import './AddWorkout.styles.css';

let ADD_WORKOUT = gql`
  mutation AddWorkout($category: String!, $duration: Int!, $userID: ID!) {
    addWorkout(category: $category, duration: $duration, userID: $userID) {
      id
      category
      duration
    }
  }
`;

export default function AddWorkout() {
  let categoryInput, durationInput, userIDInput;
  const [addWorkout, { data }] = useMutation(ADD_WORKOUT);

  return (
    <div class="center-div">
      <h1>Upload your workout here!</h1>
      <form
        onSubmit={async function (event) {
          event.preventDefault();
          try {
            const response = await addWorkout({
              variables: {
                category: categoryInput.value,
                duration: Number(durationInput.value),
                userID: userIDInput.value,
              },
            });
            alert(`Your workout id is: ${response.data.addWorkout.id}`);
          } catch (error) {
            alert('Something went wrong. Review your info');
            console.log(JSON.stringify(error, null, 2));
          }
        }}
      >
        <br />
        <input
          id="categoryInput"
          placeholder="category"
          class="content"
          ref={(node) => {
            categoryInput = node;
          }}
        />
        <br />
        <br />
        <input
          id="durationInput"
          placeholder="duration"
          class="content"
          ref={(node) => {
            durationInput = node;
          }}
        />
        <br />
        <br />
        <input
          id="userIDInput"
          placeholder="Your ID goes here"
          class="content"
          ref={(node) => {
            userIDInput = node;
          }}
        />

        <br />
        <br />
        <button class="content" type="submit">
          Register!
        </button>
      </form>
    </div>
  );
}
