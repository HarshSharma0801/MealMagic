import Description from "../Components/Description/MainDescription"
import DisplayCategories from "../Components/CategoriesFood/DisplayCategories"
import { Link } from "react-router-dom"

const Home = ()=>{

    return(
        <>
        <Description/>
        <DisplayCategories/>
        </>
    )

}
export default Home