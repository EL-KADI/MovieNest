import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f3f4f6]">
      <h1 className="text-4xl font-bold text-[#dc2626]">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-[#374151]">
        The page you are looking for does not exist.
        <Link to="/" className="text-blue-500 hover:underline ms-1">
          Go To Home
        </Link>
      </p>
    </div>
  );
}

export default ErrorPage;
