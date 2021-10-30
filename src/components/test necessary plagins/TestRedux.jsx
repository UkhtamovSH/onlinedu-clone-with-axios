import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProduct } from '../../redux/actions';
const TestRedux = () => {
  const product = useSelector(state => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProduct(per));
  }, []);
  const [per, setPer] = useState(5);
  return (
    <div>
      TestRedux {product.map((item, index) => (<div key={index}>{item.name}</div>))}
      <input type='number' value={per} onChange={(e) => { setPer(e.target.value) }} />
      <button onClick={() => dispatch(setProduct(per))}>set</button>
      <Link to='/test-redux2'>test2</Link>
    </div>
  )
}

export default TestRedux
