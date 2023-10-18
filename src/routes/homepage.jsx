import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Homepage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1>Welcome to Structify!</h1>
      <p className="text-left">
        Discover the magic of data structures right here. Mastering them is your
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
          <p className="legend">Array</p>
        </div>
        <div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230726162542/Linked-List-Data-Structure.png"
            alt="Linked List"
          />
          <p className="legend">Linked List</p>
        </div>
        <div>
          <img
            src="https://miro.medium.com/v2/resize:fit:677/1*Z89j_NoDx9HkFcPHy3rPZg.png"
            alt="Tree"
          />
          <p className="legend">Tree</p>
        </div>
        {/* Add more images as needed */}
      </Carousel>
    </div>
  );
}
