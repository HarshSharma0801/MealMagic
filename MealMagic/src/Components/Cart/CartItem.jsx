import classes from './CartLayout.module.css';

const CartItem = (props) => {
  const price = `$${((props.price.toFixed(2))*props.amount).toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <div className='flex'>
          <div className='px-2 w-24 h-24'>
          <img src={props.img}  alt=''/>
          </div>
          <div>
          <h2 className='font-bold py-6 px-2'>{props.name}<span className={classes.amount}>x {props.amount}</span></h2>

          </div>

        </div>
        
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
        </div>
      </div>
      <div className={classes.actions} >
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;