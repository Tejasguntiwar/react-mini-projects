// App.jsx
import './App.css'
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom';
import ScrollToSection from './components/scroll-to-top-and-bottom/scroll-to-section';
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
// import ModalTest from './components/custom-modal/modal-test';
// import GithubProfileFinder from './components/github-profile-finder/index';
// import SearchAutocomplete from './components/search-autocomplete';
// import TicTacToe from './components/tic-tac-toe';
// import FeatureFlagsGlobalState from './components/feature-flag/context/index';
// import FeatureFlags from './components/feature-flag';
// import UseFetchHookTest from './components/use-fetch/test';
// import UseOnclickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';

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
        {/* <ModalTest/> */}
        {/* Github Profile Finder */}
        {/* <GithubProfileFinder/> */}
        {/* Search AutoCOmplete */}
        {/* <SearchAutocomplete/> */}
        {/* Tic Tac Toe Game */}
        {/* <TicTacToe/> */}
        {/* Feature Flags Implementation */}
        {/* <FeatureFlagsGlobalState>
          <FeatureFlags/>
        </FeatureFlagsGlobalState> */}
        {/* useFetch - Custom Hook */}
        {/* <UseFetchHookTest/> */}
        {/* Use Onclick Outside Hook Test */}
        {/* <UseOnclickOutsideTest/> */}
        {/* Use WIndow Resize Hook  Test */}
        {/* <UseWindowResizeTest/> */}
        {/* Scroll To Top and Bottom Component */}
        {/* <ScrollToTopAndBottom/> */}
        {/* Scroll To Particular Section */}
        <ScrollToSection/>
      </div>
    </>
  )
}

export default App


