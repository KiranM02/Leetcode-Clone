
function SignIn() {
  
    return (
      <>
      <h1>SignIn</h1>
      <form action="submit">
        {/* <textarea name="username" id="" placeholder="Username"></textarea> */}
        <input name="username" id="" placeholder="Username"></input><br />
        <input type="password" placeholder="Password"/><br />
        <button type="submit">Submit</button>
      </form>
      </>
    );
  }
  
  export default SignIn
  