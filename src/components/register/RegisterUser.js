import react from 'react';
import { gql, useMutation } from '@apollo/client';
import './Register.styles.css';
let ADD_USER = gql`
  mutation AddUser($username: String!, $age: Int!) {
    addUser(username: $username, age: $age) {
      id
      username
      age
    }
  }
`;

export default function RegisterUser() {
  let usernameInput, ageInput;
  const [addUser, { data }] = useMutation(ADD_USER);

  return (
    <div class="center-div">
      <h1>Register here!</h1>
      <form
        onSubmit={async function (event) {
          event.preventDefault();
          try {
            const response = await addUser({
              variables: {
                username: usernameInput.value,
                age: Number(ageInput.value),
              },
            });
            alert(`Your id is: ${response.data.addUser.id}`);
          } catch (error) {
            alert('Something went wrong, try a different username');
            console.log(JSON.stringify(error, null, 2));
          }
        }}
      >
        <br />
        <input
          id="usernameInput"
          placeholder="Username"
          class="content"
          ref={(node) => {
            usernameInput = node;
          }}
        />
        <br />
        <br />
        <input
          id="ageInput"
          placeholder="Age"
          class="content"
          ref={(node) => {
            ageInput = node;
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
