import './App.css';
import food_data from './data/food.json';
import travel_data from './data/country_travel.json';
import weight_data from './data/size_weight.json';
import MyResponsiveLine from "./line.js";
import MyResponsiveBar from "./bar.js";
import MyResponsiveScatterPlot from "./scatter.js";

// import { AutoSizer } from 'react-virtualized'


// import {csv} from "d3-fetch";
// import {min} from "d3-array";


// const iris_data = csv("https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv").then(function(data) {
//   console.log(data[0]);
// });

// const sepal_length_min = min(iris_data, d => d.sepal_length)

// console.log(sepal_length_min);

// var minLand = min(iris_data, function(d) { return d.sepal_length; });
// console.log(minLand);

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Examples of Nivo Plots</h1>
        
        <div className="chart-container" style={{ width: 900, height: 290 }}>
          <MyResponsiveScatterPlot data={weight_data} />
        </div>

        <div className="chart-container" style={{ width: 900, height: 290 }}>
          <MyResponsiveLine data={travel_data} />
        </div>

        <div className="chart-container" style={{ width: 900, height: 290 }}>
          <MyResponsiveBar data={food_data} />
        </div>
        
        {/* <div className="chart-container" style={{ width: 900, height: 290 }}>
          <AutoSizer>
              {({ height, width }) => (
                  <MyResponsiveBar data={food_data}
                      height={height}
                      width={width}
                  />
              )}
          </AutoSizer>
        </div> */}

      </header>
    </div>
  );
}

export default App;
