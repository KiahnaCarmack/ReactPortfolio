import "./home.css"
export default function Home() {
    return (
        <div className="Home" id="home">

            <header>About Me</header>
            <div className="content">
            <img id="pfpimg" src={process.env.PUBLIC_URL+"me.jpeg"} alt="Kiahna Carmack"/>
            <p>
                Welcome to my portfolio! My name is Kiahna Carmack and I am new to the world of all things web development.
                Originally from Austin, Texas, I moved to Seattle 3 years ago not knowing what I would want to do in life. With a vivid imagination and desire to learn, I decided I would try my hand at web develpment.
                Although there are a lot more skills to learn and strengthen, I am excited to continue my journey in building beautiful and responsive sites.
            </p>
            </div>
        </div>

    );
}