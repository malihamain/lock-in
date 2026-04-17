
import { FiHome, FiCheckCircle, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-accent-2 px-4 py-3">
      <div className="flex justify-between items-center text-sm">

        {/* overall */}
        <div className="flex flex-col items-center flex-1">
         <FiHome className="text-xl mb-1" />
        </div>

        {/* todo */}
        <div className="flex flex-col items-center flex-1">
   <FiCheckCircle className="text-xl mb-1" />

        </div>

        {/* feeds */}
        <div className="flex flex-col items-center flex-1">
            <FiHeart className="text-xl mb-1" />

        </div>

      </div>
    </footer>
  );
}