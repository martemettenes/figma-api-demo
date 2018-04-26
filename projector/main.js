// Image Canvas object
/* Original Code
const imagesAndCoord = [

    // [topLeftX, topLeftY][topRightx, topRighty][botRightx, botRightY][botLeftX, botLeftY]
    {canvasName: 'canvas1_2', coords: [[650, 134], [794, 161], [656, 441], [514, 402]]},
    {canvasName: 'canvas2_2', coords: [[777, 172], [871, 266], [518, 477], [461, 362]]},
    {canvasName: 'canvas3_2', coords: [[304, 134], [549, 147], [550, 567], [312, 578]]},
    {canvasName: 'canvas4_2', coords: [[520, 88], [699, 88], [699, 413], [520, 413]]},
    {canvasName: 'canvas5_2', coords: [[520, 50], [701, 50], [701, 442], [520, 442]]}
];
*/

const imagesAndCoord = [
    // [topLeftX, topLeftY][topRightx, topRighty][botRightx, botRightY][botLeftX, botLeftY]
    {canvasName: 'canvas5_2', coords: [[520, 50], [701, 50], [701, 442], [520, 442]]}
    
];

const imagesAndCoord2 = [
        // [topLeftX, topLeftY][topRightx, topRighty][botRightx, botRightY][botLeftX, botLeftY]
    {canvasName: 'canvas2_2', coords: [[777, 172], [871, 266], [518, 477], [461, 362]]}
];

const imagesAndCoord3 = [
    // [topLeftX, topLeftY][topRightx, topRighty][botRightx, botRightY][botLeftX, botLeftY]
    {canvasName: 'canvas6_2', coords: [[485, 334], [728, 316], [728, 902], [485, 869]]}
];

const imagesAndCoord4 = [
    // [topLeftX, topLeftY][topRightx, topRighty][botRightx, botRightY][botLeftX, botLeftY]
    {canvasName: 'canvas1_2', coords: [[238, 167], [778, 167], [778, 474], [238, 474]]}
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
}

// Get Figma Frame node-ID
function getNodeId(pageUrl) {
    const parser = document.createElement('a');
    parser.href = pageUrl;
    return decodeURIComponent(parser.search).replace('?node-id=','');
}

// Fetch Figma API
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


// iPhone
function addImageToCanvas(imageUrl) {
    stopProgress();
    // The Image Constructor is equivalent to document.createElement('img').
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.onload = function () {
        imagesAndCoord.forEach(function (imagesAndCoord) {
            const canvas = document.getElementById(imagesAndCoord.canvasName);
            const context = canvas.getContext('2d')
            const op = new html5jp.perspective(context, img);

            // before this draw or something merge the objects
            op.draw(imagesAndCoord.coords);
            console.log(op)
            const savedImageData = {
                imageUrl: canvas.toDataURL(),
                coords: {
                    topLeft: imagesAndCoord.coords[0],
                    topRight: imagesAndCoord.coords[1],
                    botRight: imagesAndCoord.coords[2],
                    botLeft: imagesAndCoord.coords[3], 
                },
                width: canvas.width,
                height: canvas.height
            }
            console.log(savedImageData)
            // Convert the image in canvas to image/png
            localStorage.setItem("savedImageData", JSON.stringify(savedImageData));

            console.log('imagesAndCoord.coords ' + imagesAndCoord.coords);
            console.log('image URL' + imageUrl);
            console.log('canvas name ' + imagesAndCoord.canvasName);
        });
    };
}


// Galaxy
function addImageToCanvas2(imageUrl) {
    stopProgress();
    // The Image Constructor is equivalent to document.createElement('img').
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.onload = function () {
        imagesAndCoord2.forEach(function (imagesAndCoord2) {
            const canvas = document.getElementById(imagesAndCoord2.canvasName);
            const context = canvas.getContext('2d')
            const op = new html5jp.perspective(context, img);
            op.draw(imagesAndCoord2.coords);

            // Convert the image in canvas to image/png
            localStorage.setItem("savedImageData2", canvas.toDataURL("image/png"));

            console.log('imagesAndCoord2.coords ' + imagesAndCoord2.coords);
            console.log('image URL' + imageUrl);
            console.log('canvas name 2 ' + imagesAndCoord2.canvasName);
        });
    };
}

function addImageToCanvas3(imageUrl) {
    stopProgress();
    // The Image Constructor is equivalent to document.createElement('img').
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.onload = function () {
        imagesAndCoord3.forEach(function (imagesAndCoord3) {
            const canvas = document.getElementById(imagesAndCoord3.canvasName);
            const context = canvas.getContext('2d')
            const op = new html5jp.perspective(context, img);
            op.draw(imagesAndCoord3.coords);

            // Convert the image in canvas to image/png
            localStorage.setItem("savedImageData3", canvas.toDataURL("image/png"));

            console.log('imagesAndCoord3.coords ' + imagesAndCoord3.coords);
            console.log('image URL' + imageUrl);
            console.log('canvas name 3 ' + imagesAndCoord3.canvasName);
        });
    };
}

function addImageToCanvas4(imageUrl) {
    stopProgress();
    // The Image Constructor is equivalent to document.createElement('img').
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.onload = function () {
        imagesAndCoord4.forEach(function (imagesAndCoord4) {
            const canvas = document.getElementById(imagesAndCoord4.canvasName);
            const context = canvas.getContext('2d')
            const op = new html5jp.perspective(context, img);
            op.draw(imagesAndCoord4.coords);

            // Convert the image in canvas to image/png
            localStorage.setItem("savedImageData4", canvas.toDataURL("image/png"));

            console.log('imagesAndCoord4.coords ' + imagesAndCoord4.coords);
            console.log('image URL' + imageUrl);
            console.log('canvas name 1_1 ' + imagesAndCoord4.canvasName);
        });
    };
}


// The function that runs when form is submitted. 
function callFigmaAndDrawMockups() {

// Getting URL from HTML
// const pageUrl = document.getElementById('url_input').value;
const pageUrl = 'https://www.figma.com/file/MWZXKyAfszpYlceDaD0bNKtx/appios?node-id=1%3A3';

const galaxys = document.getElementById('galaxys8');
const iphonex = document.getElementById('iphonex');
const mac = document.getElementById('macbook');
const iphone8 = document.getElementById('iphone8');

const nodeId = getNodeId(pageUrl);
const galaxyId = getNodeId(galaxys.value);
const iphonexId = getNodeId(iphonex.value);
const macId = getNodeId(mac.value);
const iphone8Id = getNodeId(iphone8.value);


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
        document.getElementById('errormsg').classList.add('hidden');
        startProgress();
        apiRequest('/images/' + getFileKey(galaxys.value) + '?ids=' + galaxyId)
        .then(function (apiResponse) {
            // Adding Figma Frame to Canvas
           addImageToCanvas2(apiResponse.images[galaxyId]);

           visibleImages(); 
        });
    }

    // If iPhone X is checked
    if (iphonex.checked == true){
        document.getElementById('errormsg').classList.add('hidden');
        startProgress();
        apiRequest('/images/' + getFileKey(iphonex.value) + '?ids=' + iphonexId)
        .then(function (apiResponse) {
            // Adding Figma Frame to Canvas
           addImageToCanvas(apiResponse.images[iphonexId]);

           visibleImages(); 
        });
    }

    // If Macbook is checked
    if (mac.checked == true){
        document.getElementById('errormsg').classList.add('hidden');
        startProgress();
        apiRequest('/images/' + getFileKey(mac.value) + '?ids=' + macId)
        .then(function (apiResponse) {
            // Adding Figma Frame to Canvas
           addImageToCanvas4(apiResponse.images[macId]);

           visibleImages(); 
        });
    }

    if (iphone8.checked == true){
        document.getElementById('errormsg').classList.add('hidden');
        startProgress();
        apiRequest('/images/' + getFileKey(iphone8.value) + '?ids=' + iphone8Id)
        .then(function (apiResponse) {
            // Adding Figma Frame to Canvas
           addImageToCanvas3(apiResponse.images[iphone8Id]);

           visibleImages(); 
        });
    }

    else if (galaxys.checked == false && iphonex.checked == false && mac.checked == false && iphone8.checked == false) {
        document.getElementById('errormsg').classList.remove('hidden');
    }


}


////////////////////////////////
// Form Styling and Functions //
////////////////////////////////


// Menu - Selecting device
const media = ['Apple', 'Android', 'Mac'];
const menu = document.getElementById('menu');

const renderBtn = document.getElementById('render');
const newMockup = document.getElementById('newmockup');
const mockupForm = document.getElementById('newmockupform');
const renderForm = document.getElementById('renderform');

// Show Images
function visibleImages(){
    document.getElementById('mockups').classList.remove('hidden');
}

newMockup.addEventListener("mousedown", function() {
    mockupForm.classList.remove('hidden');
    newMockup.classList.toggle('active');
    renderBtn.classList.toggle('active');
    renderForm.classList.add('hidden');
});

renderBtn.addEventListener("mousedown", function() {
    renderForm.classList.remove('hidden');
    newMockup.classList.toggle('active');
    renderBtn.classList.toggle('active');
    mockupForm.classList.add('hidden');
});