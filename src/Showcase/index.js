import ShowcaseLow from "./components/Lowshow";
import ShowcaseMid from "./components/Midshow";
import ShowcaseHigh from "./components/Highshow";

const Showcase = () => {
        return (<div>
        <h1>LOW SPEC (52.9%)</h1>
        <ShowcaseLow></ShowcaseLow>
        <h1>MID SPEC (29.4%)</h1>
        <ShowcaseMid></ShowcaseMid>
        <h1>HIGH SPEC (17.6%)</h1>
        <ShowcaseHigh></ShowcaseHigh>
        </div>
        )
  };
  
  export default Showcase;