// Image Canvas object
const imagesAndCoord = [

    // [topLeftX, topLeftY][topRightx, topRighty][botRightx, botRightY][botLeftX, botLeftY]
    {canvasName: 'canvas1_2', coords: [[650, 134], [794, 161], [656, 441], [514, 402]]},
    {canvasName: 'canvas2_2', coords: [[777, 172], [871, 266], [518, 477], [461, 362]]},
    {canvasName: 'canvas3_2', coords: [[304, 134], [549, 147], [550, 567], [312, 578]]},
    {canvasName: 'canvas4_2', coords: [[520, 88], [699, 88], [699, 413], [520, 413]]},
    {canvasName: 'canvas5_2', coords: [[520, 50], [701, 50], [701, 442], [520, 442]]}
];


//Avoiding to input access token every time while testing


// // Access Token
// getPersonalAccessToken = function() {
//     const val = document.getElementById('token_input').value;
//     return val !== "" ? val : '576-3d868804-071a-4d20-a8aa-852d127e3e93';
// }

const PERSONAL_ACCESS_TOKEN = '576-3d868804-071a-4d20-a8aa-852d127e3e93';

//Creating link with URL from user
function getFileKey(pageUrl) {
    const parser = document.createElement('a');
    parser.href = pageUrl;
    return parser.pathname.replace('/file/', '').replace(/\/.*/,'');
    console.log('hello'); // Why is this function not running?
}

// Get Figma Frame node-ID
function getNodeId(pageUrl) {
    const parser = document.createElement('a');
    parser.href = pageUrl;
    return decodeURIComponent(parser.search).replace('?node-id=','');
}

// Figma API
function apiRequest(endpoint) {
    // const PERSONAL_ACCESS_TOKEN = getPersonalAccessToken();
    const PERSONAL_ACCESS_TOKEN = '576-3d868804-071a-4d20-a8aa-852d127e3e93';
    return fetch('https://api.figma.com/v1' + endpoint, {
        method: 'GET',
        headers: { "x-figma-token": PERSONAL_ACCESS_TOKEN }
    }).then(function(response) {
        return response.json();
    }).catch(function (error) {
        return { err: error };
    });
}

//Adding Figma Frame as image
// imageUrl is the 'apiResponse.images[nodeId]' in the callFigmaAndDrawMockups function

function addImageToCanvas(imageUrl) {
    stopProgress();
    // The Image Constructor is equivalent to document.createElement('img').
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.onload = function () {
        imagesAndCoord.forEach(function (imageInfo) {
            const canvas = document.getElementById(imageInfo.canvasName);

            const context = canvas.getContext('2d')

            const op = new html5jp.perspective(context, img);
            op.draw(imageInfo.coords);
            localStorage.setItem("savedImageData", canvas.toDataURL("image/png"));

            console.log('imageInfo.coords ' + imageInfo.coords);
        });
    };
}


// The function that runs when form is submitted. 
function callFigmaAndDrawMockups() {
    startProgress();

// Getting URL from HTML
// const pageUrl = document.getElementById('url_input').value;
const pageUrl = 'https://www.figma.com/file/MWZXKyAfszpYlceDaD0bNKtx/appios?node-id=1%3A3';
const galaxys = document.getElementById('galaxys8');
const iphonex = document.getElementById('iphonex');
const mac = document.getElementById('macbook');

const nodeId = getNodeId(pageUrl);
const galaxyId = getNodeId(galaxys.value);
const iphonexId = getNodeId(iphonex.value);
const macId = getNodeId(mac.value);

//const nodeId = getNodeId(galaxyUrl);
// Ved å bruke denne, og bytte ut pageUrl med galaxyUrl i apirequest under, så funker det å 


    //Using URL from User, asking for access to the Figma frame
    // ORIGINAL KODE

    // apiRequest('/images/' + getFileKey(pageUrl) + '?ids=' + nodeId)
    //     .then(function (apiResponse) {
    //         // Adding Figma Frame to Canvas
    //        addImageToCanvas(apiResponse.images[nodeId]);
    //        // Images is visible when the frame is added to canvas
    //        visibleImages(); 
    //     });


    // If Galaxy S8 is checked
    if (galaxys.checked == true){
        apiRequest('/images/' + getFileKey(galaxys.value) + '?ids=' + galaxyId)
        .then(function (apiResponse) {
            // Adding Figma Frame to Canvas
           addImageToCanvas(apiResponse.images[galaxyId]);
           // Images is visible when the frame is added to canvas
           visibleImages(); 
        });
    }

    // If iPhone X is checked
    if (iphonex.checked == true){
        apiRequest('/images/' + getFileKey(iphonex.value) + '?ids=' + iphonexId)
        .then(function (apiResponse) {
            // Adding Figma Frame to Canvas
           addImageToCanvas(apiResponse.images[iphonexId]);
           // Images is visible when the frame is added to canvas
           visibleImages(); 
        });
    }

    // If Macbook is checked
    if (mac.checked == true){
        apiRequest('/images/' + getFileKey(mac.value) + '?ids=' + macId)
        .then(function (apiResponse) {
            // Adding Figma Frame to Canvas
           addImageToCanvas(apiResponse.images[macId]);
           // Images is visible when the frame is added to canvas
           visibleImages(); 
        });
    }

}


// Selecting device
const media = ['Apple', 'Android', 'Mac'];
const menu = document.getElementById('menu');


// Form Styling and Functions
const android = document.getElementById('android');
const apple = document.getElementById('apple');
const tv = document.getElementById('tv');

const appleDevices = document.getElementById('apple_devices');
const androidDevices = document.getElementById('android_devices');

const devices = [appleDevices, androidDevices];

apple.addEventListener("mousedown", function(){ 
    console.log(devices[0], devices[1]);
    appleDevices.classList.remove('hidden');
    androidDevices.classList.add('hidden');
});

android.addEventListener("mousedown", function(){ 
    console.log(devices[0], devices[1]);
    androidDevices.classList.remove('hidden');
    appleDevices.classList.add('hidden');
    });
   

function visibleImages(){
    document.getElementById('mockups').classList.remove('hidden');
}

