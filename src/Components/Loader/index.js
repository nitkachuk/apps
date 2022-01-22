import "./style.scss";


const Loader = () => { 
  const loaderImage = "/images/loader.gif";

  return( 
    <div className="loader">
      <img src={ loaderImage } alt="Loader" />
    </div>
  );
}


export default Loader;