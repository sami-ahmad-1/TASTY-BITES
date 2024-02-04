import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../Redux/Slices/CardSlices';
import { CiSquarePlus, CiSquareMinus } from 'react-icons/ci';

const ItemCard = ({ id, img, name, price, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className='ml-2 mr-2 flex items-center gap-4 p-4 bg-white rounded-md shadow-md hover:shadow-lg transition-all'>
      <img src={img} alt={name} className='w-16 h-16 object-cover rounded-md' />

      <div className='flex flex-grow flex-col'>
        <h2 className='text-xl font-semibold'>{name}</h2>
        <div className='flex items-center'>
          <span className='text-gray-600'>₹{price}</span>
          <div className='ml-auto flex items-center space-x-2'>
            <CiSquareMinus
              className='text-2xl cursor-pointer hover:text-[#FC6736]'
              onClick={() => dispatch(decrementQuantity({ id }))}
            />
            <span className='text-xl'>{qty}</span>
            <CiSquarePlus
              className='text-2xl cursor-pointer hover:text-[#FC6736]'
              onClick={() => dispatch(incrementQuantity({ id }))}
            />
          </div>
        </div>
      </div>

      <div className='text-2xl'>
        <MdDelete
          className='text-slate-700 cursor-pointer hover:text-[#FC6736]'
          onClick={() => dispatch(removeFromCart({ id }))}
        />
      </div>
    </div>
  );
};

export default ItemCard;
