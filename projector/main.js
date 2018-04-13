// Image Canvas object
const imagesAndCoord = [
    {canvasName: 'canvas', coords: [[650, 134], [794, 161], [656, 441], [514, 402]]},
    {canvasName: 'canvas_2', coords: [[777, 172], [871, 266], [518, 477], [461, 362]]},
    {canvasName: 'canvas_3', coords: [[304, 134], [549, 147], [550, 567], [312, 578]]}
];

// Access Token
//const PERSONAL_ACCESS_TOKEN = document.getElementById('token_input').value;
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

// Figma API
function apiRequest(endpoint) {
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
function addImageToCanvas(imageUrl) {
    stopProgress();
    const img = new Image();

    img.src = imageUrl;

    img.onload = function () {
        imagesAndCoord.forEach(function (imageInfo) {
            const canvas = document.getElementById(imageInfo.canvasName);

            const context = canvas.getContext('2d')

            const op = new html5jp.perspective(context, img);
            op.draw(imageInfo.coords);
        });
    };
}


// The function that runs when form is submitted. 
function callFigmaAndDrawMockups() {
    startProgress();

    // Getting URL from user input
    const pageUrl = document.getElementById('url_input').value;

    const nodeId = getNodeId(pageUrl);

    //Using URL from User, asking for access to the Figma frame
    apiRequest('/images/' + getFileKey(pageUrl) + '?ids=' + nodeId)
        .then(function (apiResponse) {
            // Adding Figma Frame to Canvas
           addImageToCanvas(apiResponse.images[nodeId]);
        });
}


const selectedOs = document.getElementById('os_input');
const android = document.getElementById('android_devices');
const apple = document.getElementById('apple_devices');

function selectOs(){
    console.log(selectedOs.value);

    if (selectedOs.value == 'apple'){
        apple.classList.remove('hidden');
        android.classList.add('hidden');
    }

    if (selectedOs.value == 'android'){
        android.classList.remove('hidden');
        apple.classList.add('hidden');
    }


}


