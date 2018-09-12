import React from 'react';
import SalesFigureAndQuote from './SalesFigureAndQuote';
import YearlySalesDiagram from './YearlySalesDiagram';

// class App extends Component {
//   constructor() {
//     super();
//     window.Raphael = Raphael;
//   }
//   render() {
//     return (
//       // <Header />
//         <Wrapper />
//       // <Footer />
//     );
//   }
// }

const YearlySalesBox = () => {
  return (
    <div className="card m-b-20">
      <div className="card-body">
        <h4 className="mt-0 header-title">Yearly Sales</h4>
        <div className="row">
          <div className="col-md-4">
            <SalesFigureAndQuote salesFigure="52,345" quote="Custom Quote Here" />
          </div>
          <div className="col-md-8 text-right">
            <YearlySalesDiagram />
            {/* div id="sparklin" was here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default YearlySalesBox;
