import { Link } from "react-router-dom";
const ThankYou = () => {
  return (
    <div>
      <h4>Thank You!</h4>
      <p>Please see the email you just recieved for a welcome tip!</p>
      <p>Now, lets get started.</p>
      <Link to={"/login"} className="fancy-button2">
        Login
      </Link>
    </div>
  );
};
export default ThankYou;
