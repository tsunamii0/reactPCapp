const highparts = ['14.png', '15.png', '16.png']



const ShowcaseHigh = () => {
    const highnewarr = Array.from({ length: 3 })
    return(<div className="items">
    {highnewarr.map((_, index) => {
        console.log(index)
        return (<div className="highdiv">
        <img src={require(`/src/content/${highparts[index]}`)} key={index} />
        </div>
        )
      })}
      </div>)
  };
  
  export default ShowcaseHigh;