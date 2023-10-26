import "../../src/App.css";
function Header()
{
    // internal style 
    // const myStyle={
    //     color:"green",
    //     backgroundcolor:"black"
    // }
    return(
        <div class="bg-dark text-center text-light p-3">
            {/* <h1 style={{color:"red"}}>Shoppy website</h1>
            inline styling */}
            <h1 >Shoppy website</h1>
            {/* <h2 style={myStyle}>low cots more products</h2> */}
            {/* internal styling */}
            <h2>low cots more products</h2>
            {/* <p id="i1">Explore more...varioud products</p> */}
            {/* external styling  */}
            <p >Explore more...various products</p>
        </div>
    )
}
export default Header;