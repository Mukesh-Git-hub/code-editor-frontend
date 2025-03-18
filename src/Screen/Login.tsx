import googleIcon from "../assets/search.png";


export default function Login() {
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="relative w-80 h-48 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center">
        
        <img
          src={googleIcon}
          alt="Google Logo"
          className="w-8 h-8 absolute top-4"
        />
        
        <button
          className="inline-flex items-center gap-1 px-2 py-1 border border-gray-300 rounded-2xl shadow-sm hover:bg-gray-100 transition"
        >
          <span className="text-gray-700 font-medium">Sign in with Google</span>
        </button>

       
      </div>
    </div>
  );
}
