import "./Navbar.css"
const Features = ["Home","About Us","Products","Services","Constact Us"]
const Nav = [
    {
        feature: "Home",
        url: "/Home"
    },
    {
        feature: "About Us",
        url: "/About"
    },
    {
        feature: "Products",
        url: "/Products"
    },
    {
        feature: "Services",
        url: "/Services"
    },
    {
        feature: "Constact Us",
        url: "/Constact"
    }
]
export default function Navbar(){
    return(
        <>
        <div className="navbar">
        <div className="logo">
            <h3>DECOR</h3>
        </div>
        <div className="img">
            <img src="https://t3.ftcdn.net/jpg/02/36/29/56/360_F_236295604_5cTJm2Ksy8F4l2iIo9QrCmc5O1tbs8yo.jpg" alt="" />
        </div>
        <div className="features">
            <ul>
                {
                    Nav.map((i)=><a href={i.url}><li>{i.feature}</li></a>)
                }
            </ul>
        </div>
        </div>
        </>
    )

}