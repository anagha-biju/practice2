import logo from "./logo.jpg";

export function Footer()
{
    return(
        
        <div class="row bg-secondary text-light">
             <div class="col-sm-12 col-md-6 col-lg-3 ">
                <h1>Visit us on</h1>
                <ul>
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://whatsapp.com">Whatsapp</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                </ul>
                
             </div>
             <div class="col-sm-12 col-md-6 col-lg-3">
                <h1>Blogs</h1>
                <ol>
                    <li><a href="www.https://instagram.com">BLOG 1</a></li>
                    <li><a href="www.https://instagram.com">BLOG 2</a></li>
                    <li><a href="www.https://instagram.com">BLOG 3</a></li>
                    <li><a href="www.https://instagram.com">BLOG 4</a></li>
                </ol>

             </div>
             <div class="col-sm-12 col-md-6 col-lg-3">
                <h1>Topics</h1>
                <p>subtopics</p>
                <p>subtopics</p>
                <p>subtopics</p>

             </div>
             <div class="col-sm-12 col-md-6 col-lg-3">
                <a href="https://flipkart.com">
                    <img  height={200} src={logo} alt="image"/>
                </a>

             </div>
             
        </div>
    )
}