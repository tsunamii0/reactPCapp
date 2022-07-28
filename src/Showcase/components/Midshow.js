const midparts = ['9.png', '10.png', '11.png', '12.png', '13.png']



const ShowcaseMid = () => {
    const midnewarr = Array.from({ length: 5 })
    return(<div className="items">
    {midnewarr.map((_, index) => {
        return (<div className="middiv">
        <img src={require(`/src/content/${midparts[index]}`)} key={index} />
        </div>
        )
      })}
      </div>)
  };
  
  export default ShowcaseMid;