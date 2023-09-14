import './Bottle.css'

const Bottle = (props) => {
    const {bottle, handleAddToCard} = props
    const {name, img, price} = bottle
    

    
    return (
        <div className="bottle">
           <h2>Name: {name}</h2>          
           <img src={img} style={{width: '250px'}} alt="" />
           <p>Price: {price}</p>
           <div className='btn-div'>
            <button onClick={()=>handleAddToCard(bottle)} className='btn'>Purchas</button>
            <button className='btn'>hello</button>
           </div>
        </div>
    );
};

export default Bottle;