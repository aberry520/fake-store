import { Link } from "react-router-dom"


export const CategoryDropdown = ({categories}) => {
    return (
        <>
            <label>
                <button>Categories</button>
                <ul>
                    {
                        categories.map((category) => {

                            return <li key={category}>
                                <Link to={`/category/${category}`}>
                                    {category}
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </label>
        </>
    )
}