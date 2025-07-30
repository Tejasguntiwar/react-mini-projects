// App.jsx
import './App.css'
// import LightDarkMode from './components/light-dark-mode'
// import Accordian from './components/accordian'
// import RandomColor from './components/random-color'
// import StarRating from './components/star-rating'
// import ImageSlider from './components/image-slider'
// import LoadMoreData from './components/load-more-data'
// import TreeView from './components/tree-view'
// import menus from './components/tree-view/data.js'
// import QRCodeGenerator from './components/qr-code-generator'
// import ScrollIndicator from "./components/scroll-indicator";
// import TabTest from "./components/custom-tabs/tabs-test";
import ModalTest from './components/custom-modal/modal-test';

function App() {
  return (
    <>
      <div>
        {/* Accordian Component */}
        {/* <Accordian/> */}
        {/* Random Color Component */}
        {/* <RandomColor/> */}
        {/* Star Rating Component */}
        {/* <StarRating noOfStars={10}/> */}
        {/* ImageSlider Component */}
        {/* <ImageSlider url={'http://picsum.photos/v2/list'} page={'1'} limit={'4'}/> */}
        {/* Load More Products Components */}
        {/* <LoadMoreData/> */}
        {/* Tre-View Component/ menu UI component / recursive navigation menu */}
        {/* <TreeView menus={menus}/> */}
        {/* QR Code Generator */}
        {/* <QRCodeGenerator/> */}
        {/* Light and Dark Mode switch */}
        {/* <LightDarkMode/> */}
        {/* Scroll Indicator */}
        {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
        {/* Custom tabs component */}
        {/* <TabTest/> */}
        {/* Custom Modal Popup Component */}
        <ModalTest/>
      </div>
    </>
  )
}

export default App


