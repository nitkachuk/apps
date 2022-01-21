import "./style.scss";
import { Link } from "react-router-dom";


const Preview = () => { 
  const loaderImage = "/images/Nikolai.jpg";

  return( 
    <div className="preview">
      <div>
        <img src={ loaderImage } alt="Preview" width={200} height={200} />
        <h2> Николай Ткачук </h2>
        <Link to="/todo">
          <h4> Откройте магический мир ToDo </h4>
        </Link>
      </div>
    </div>
  );
}


export default Preview;