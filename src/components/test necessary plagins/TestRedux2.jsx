import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TestRedux2 = () => {
  const product = useSelector(state => state.product)
  return (
    <div>
      TestRedux {product.map((item, index) => (<div key={index}>{item.name}</div>))}
      <Link to='/test-redux'>test</Link>

    </div>
  )
}

export default TestRedux2
