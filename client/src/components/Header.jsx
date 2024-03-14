import { Link } from "react-router-dom";

function Header(props){
    return(
        <>
         <div className="nav">
        <div className="logo">
        <h1>Biblio Track</h1>
        </div>
        <div className="menu">
          <Link to="/"><p>Home</p></Link>
          {props.add &&

          <div className="items">
          <Link to="/bookform"><p>Add Book</p></Link>

          <p onClick={props.bookCall}>See Collection</p>
          </div>
          }
        </div>
      </div>
      <hr id='navline'/>
        </>
    )
}
export default Header;