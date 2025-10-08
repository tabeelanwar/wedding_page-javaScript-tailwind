export default function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-12 bg-[#fff] opacity-60 hover:opacity-100 shadow-inner z-50">
      <ul className="navlist flex items-center justify-around py-1.5 px-3 text-[#000000] text-sm">
        <li className="hover:bg-gray-300 w-full text-center transition">
          <button className="py-2 px-2 bg-transparent text-red">Home</button>
        </li>
        <li className="hover:bg-gray-300 w-full text-center transition">
          <button className="py-2 px-2 bg-transparent text-red">Jane & John</button>
        </li>
        <li className="hover:bg-gray-300 w-full text-center transition">
          <button className="py-2 px-2 bg-transparent text-red">Wedding</button>
        </li>
        <li className="hover:bg-black hover:text-[#fff] w-full text-center transition">
          <button className="py-2 px-2 bg-transparent text-red">RSVP</button>
        </li>
      </ul>
    </div>
  );
}
