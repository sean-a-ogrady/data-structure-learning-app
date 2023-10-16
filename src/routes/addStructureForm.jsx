export default function AddStructureForm(){
    return(
        <form className="text-4xl">
            <input type="text" placeholder="title" name="title"/>
            <input type="text" placeholder="description" name="description"/>
            <input type="text" placeholder="image" name="image"/>
            <input type="text" placeholder="analogy" name="analogy"/>
            <input type="text" placeholder="use-cases" name="use-cases"/>
            <input type="text" placeholder="operations" name="operations"/>
            <input type="text" placeholder="implementation" name="implementation"/>
            <input type="text" placeholder="problems" name="problems"/>
        </form>
    );
};