import { useRef} from "react";
function Form() {
  const firstRef = useRef(null); //reference
  const formSubmitted = (event) => {
    event.preventDefault(); // prevents page reload
    console.log("Form Submitted!");
    console.log(firstRef.current.value);
    firstRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={formSubmitted}>
        <input type="text" ref={firstRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Form;
