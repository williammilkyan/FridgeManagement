import { useState } from "react";

export function NewTodoForm(props) {
                            //{onSubmit}
    const date = `M:${props.time.getMonth()}/D:${props.time.getDate() + 5}/Y:${props.time.getFullYear()}`;
    const [newItem, setNewItem] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [location, setLocation] = useState("");
    const [expire, setExpire] = useState(date);


    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return;
        if (location === ""){
            alert("Please select a location!");
            return;
        }
        props.onSubmit(newItem, quantity, location, expire);
        //onSubmit(newItem);
        setNewItem("");
        setQuantity(1);
        setLocation("");
        setExpire(date);
      }

    return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item:</label>
            <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)} 
            type="text" 
            id="item" />
        </div>
        <div className="form-row">
            <label htmlFor="quantity">Quantity:</label>
            <input 
            value={quantity} 
            onChange={e => setQuantity(e.target.value)} 
            type="number" 
             />
        </div>
        <div className="form-row">
            <p>Location:</p>

            <label>
            <input 
            value="Others" 
            name="location"
            onChange={e => setLocation(e.target.value)} 
            type="radio"
            checked={location === "Others"}
            />
            Others</label>

            <label>
            <input 
            value="Fresh" 
            name="location"
            onChange={e => setLocation(e.target.value)} 
            type="radio"
            checked={location === "Fresh"}
            />
            Fresh</label>

            <label>
            <input 
            value="Frozen"
            name="location" 
            onChange={e => setLocation(e.target.value)} 
            type="radio"
            checked={location === "Frozen"} 
            />
            Frozen</label>


            
        </div>
        <div className="form-row">
            <label htmlFor="expire">Expire Date:</label>
            <input 
            value={expire} 
            onChange={e => setExpire(e.target.value)} 
            type="text" 
            />
        </div>
        <button className="btn">Add</button>
    </form>
    )
}