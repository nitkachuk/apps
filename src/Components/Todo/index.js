import Header from "../Header/";
import Wrapper from "../Wrapper/index.tsx";
import ThemeMode from "../ThemeMode";


const Todo = () => { 
  return( 
    <>
      <ThemeMode />

      <Header />
      <Wrapper />
    </>
  );
}


export default Todo;
