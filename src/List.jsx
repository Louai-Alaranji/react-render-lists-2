
import propTypes from "prop-types"

function List(props){

    const itemList = props.items; 
    const category = props.category;

    const listItems = itemList.map(item => <li key={item.id}>item: {item.name}, &nbsp;
                                                            <b>Calories: {item.calories}</b>  </li>);
    return ( 
    
    <> 
        <h3>{category}</h3> <ul>{listItems}</ul>
        </> ); 
    
}

List.propTypes  ={
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        name : propTypes.string,
        calories: propTypes.number
    }))
}

List.defaultProps = {
    category : "Category",
    items : []
}

export default List;