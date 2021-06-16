import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => (document.title = "Page not found | fotogram"), []);
  return (
    <div className="bg-gray-background">
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2-xl">Page Not Found!</p>
      </div>
    </div>
  );
};

export default NotFound;
