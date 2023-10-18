import Carousel from "../carousel";
export default function Homepage( { darkMode, setDarkMode}) {

  return (
    <div className="flex items-center justify-center flex-col dark:bg-gray-950">
      <h1 className="font-black text-6xl mb-6 dark:text-green-dark mr-4 ml-4 mt-6 text-center" >Welcome to Structify!</h1>
      <p className="text-center mb-10 text-xl mr-4 ml-4">
        Discover the <span className="dark:text-red-dark">magic</span> of data structures right here. Mastering them is your
        golden ticket to landing that dream job.
        <br /><br />
        Picture snagging a job with this knowledge – it's the kind of excitement
        that's hard to contain!
      </p>
      {/* I want to have carousel here */}
      <Carousel/>
    </div>
  );
}
