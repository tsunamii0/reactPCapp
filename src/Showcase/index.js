import { createRenderer } from "react-dom/test-utils";

const Showcase = () => {
    console.log("here")
    const newarr = Array.from({ length: 17 })
    console.log(newarr)
    return(<div className="items">
    {newarr.map((_, index) => {
        console.log(index)
        return (
        <img src={require(`/src/content/${index}.png`)} key={index} />
        )
      })}
      </div>)
  };
  
  export default Showcase;