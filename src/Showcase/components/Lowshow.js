const lowparts = ['0.png', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png']



const ShowcaseLow = () => {
    const lownewarr = Array.from({ length: 9 })
    return(<div className="items">
    {lownewarr.map((_, index) => {
        return (<div className="lowdiv">
        <img src={require(`/src/content/${lowparts[index]}`)} key={index} />
        </div>
        )
      })}
      </div>)
  };
  
  export default ShowcaseLow;