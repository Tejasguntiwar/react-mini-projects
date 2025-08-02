


const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTicTacToe: true,
    showRandomColorGen: true,
    showAccordian: true,
    showTreeView: true
}


function featureFlagsDataServiceCall() {
    
    return new Promise((resolve, reject) => {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject('Some error occered! Please try again!');
    })
}

export default featureFlagsDataServiceCall;