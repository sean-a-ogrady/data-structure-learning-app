import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Homepage( { darkMode, setDarkMode}) {

  return (
    <div className="flex items-center justify-center flex-col dark:bg-gray-950">
      <h1 className="font-black text-6xl mb-4 dark:text-green-dark" >Welcome to Structify!</h1>
      <p className="text-left mb-10 text-xl">
        Discover the <span className="dark:text-red-dark">magic</span> of data structures right here. Mastering them is your
        golden ticket to landing that dream job.
        <br />
        Picture snagging a job with this knowledge – it's the kind of excitement
        that's hard to contain!
      </p>
      {/* I want to have carousel here */}
      <Carousel className="w-1/2 h-1/2">
        <div>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*X0Dg7QfSYtWhSAu-afi8-g.png"
            alt="Array"
          />
          <p className="mt-7">Array</p>
        </div>
        <div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230726162542/Linked-List-Data-Structure.png"
            alt="Linked List"
          />
          <p className="mt-7">Linked List</p>
        </div>
        <div>
          <img
            src="https://miro.medium.com/v2/resize:fit:677/1*Z89j_NoDx9HkFcPHy3rPZg.png"
            alt="Tree"
          />
          <p className="mt-7">Tree</p>
        </div>
        {/* Add more images as needed */}
      </Carousel>
    </div>
  );
}
