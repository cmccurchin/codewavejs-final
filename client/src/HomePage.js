import logo from './logo.svg';
import './HomePage.css';
import { Link } from 'react-router-dom';
function HomePage() {
    console.log("Homepage rendered");
  return (
    <div>    
        <div class="bg-image" 
        style={{
                backgroundImage: "url(" + "https://wallpapers.com/images/hd/4k-earth-in-outer-space-209qjp66w5rtd320.jpg" + ")",
                height: "100vh"
            }}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light mx-1">
            <a class="navbar-brand" href="/">HOME</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="#">Airlines</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#">About Us</a>
                    </li>
                </ul>
            </div>
            </nav>
        <div class="container px-1 d-flex justify-content-center">
            <div id="trackbox" class="px-1 py-5 mx-5 my-5 text-center bg-secondary bg-gradient border  rounded">
                <img class="d-block mx-auto mb-2" src="images/questionblock.png" alt="" width="100" height="100"/>
                <h1 class="display-5 fw-bold">Home Page</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world's most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <ul id="data">
                    </ul>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <label>Enter airline number</label>
                        <input type="text" class="form-control" placeholder="123-45678951"/>
                        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">SEARCH</button>
                    </div>
                </div>
            </div>
        </div>
            <a href="/page1">Page1</a>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

        <div>
            <h1>HomePage</h1>
            <h2>
            <Link to="/tracking">go to tracking</Link>
            </h2>
        </div>
        </div>
    </div>    
  );
}



export default HomePage;
