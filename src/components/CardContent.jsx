import { FaMusic } from 'react-icons/fa';
import colors from 'tailwindcss/colors';
import musicIcon from '../assets/images/icon-music.svg';

const CardContent = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-darkBlue text-xl font-extrabold">Order Summary</h1>
      <p className=" text-desaturatedBlue my-4">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>

      <div className="bg-veryPaleBlue my-4 p-4 rounded-lg flex justify-between items-center">
        <div className="flex items-center">
          <img src={musicIcon} alt="music note" />
          <div className="text-sm ml-2">
            <span className="font-extrabold">Annual Plan</span>
            <p className="text-desaturatedBlue">$59.99/year</p>
          </div>
        </div>
        <button className="text-sm font-semibold underline text-brightBlue hover:text-indigo-500">
          Change
        </button>
      </div>

      {/* buttons */}
      <div>
        <button className="block bg-brightBlue p-4 w-full mb-1 rounded-xl text-white font-semibold shadow-2xl hover:bg-indigo-500">
          Proceed to Payment
        </button>
        <button className="bock p-4 w-full text-desaturatedBlue font-semibold hover:text-opacity-50">
          Cancel Order
        </button>
      </div>
    </div>
  );
};
export default CardContent;
