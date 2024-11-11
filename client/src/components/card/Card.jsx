import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item, onDelete, onUpdate }) {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg overflow-hidden w-full sm:w-[330px]">
      <Link to={`/${item.id}`} className="block">
        <img
          src={item.images[0] || "/default-image.jpg"} // Use a default image if none exists
          alt={item.title}
          className="w-full h-[220px] object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-slate-700 truncate">
          <Link to={`/${item.id}`} className="hover:text-blue-600">
            {item.title}
          </Link>
        </h2>
        <p className="text-sm text-gray-600 flex items-center gap-2 mt-2">
          <img src="/pin.png" alt="location icon" className="h-4 w-4" />
          <span>{item.address}</span>
        </p>
        <p className="text-lg font-semibold text-slate-700 mt-2">
          ${item.price.toLocaleString()}
        </p>
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <div className="flex items-center gap-1">
            <img src="/bed.png" alt="bed" className="h-4 w-4" />
            <span>{item.bedroom} bedroom</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/bath.png" alt="bathroom" className="h-4 w-4" />
            <span>{item.bathroom} bathroom</span>
          </div>
        </div>

        {/* Conditionally render buttons if provided */}
        {onDelete && onUpdate && (
          <div className="flex gap-2 mt-4">
            <button
              className="bg-blue-500 text-white text-xs px-3 py-1 rounded-md hover:bg-blue-600 transition"
              onClick={onUpdate}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white text-xs px-3 py-1 rounded-md hover:bg-red-600 transition"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
