// Save canvas as image
var saveBtn = document.getElementById('savebtn');
saveBtn.addEventListener("mousedown", createImage);

var saveBtnTwo = document.getElementById('savebtntwo');
saveBtnTwo.addEventListener("mousedown", createImageTwo);

var saveBtnThree = document.getElementById('savebtnthree');
saveBtnThree.addEventListener("mousedown", createImageThree);

var saveBtnFour = document.getElementById('savebtnfour');
saveBtnFour.addEventListener("mousedown", createImageFour);

var saveBtnFive = document.getElementById('savebtnfive');
saveBtnFive.addEventListener("mousedown", createImageFive);

// function toImage(){
// 	const data = localStorage.getItem("savedImageData");    
// 	var canvas = document.getElementById("canvas1_2");
// 	var image = document.getElementById("canvas1_1");
//     // document.getElementById("canvas1_1").src = canvas.toDataURL();
//     Canvas2Image.saveAsJPEG(data, image.width, image.height);
// }

// Create Image 1
function createImage() {
	const image1 = document.getElementById("canvas1_1");

	const data1 = image1.src;
	const data2 = localStorage.getItem("savedImageData2");
	// Merging image and canvas to one image    
	mergeImages([data1, data2])
		.then(b64 => {
			downloadURI(b64, "test.png");
		});

	// What is the canvas coordinates when it is merged?
		console.log(imagesAndCoord);
	
		const row1 = document.getElementById('row1').classList.add('hidden');
}

// Create Image 2
function createImageTwo() {
	const image1 = document.getElementById("canvas2_1");

	const data1 = image1.src;
	const data2 = localStorage.getItem("savedImageData2");
	// Merging image and canvas to one image    
	mergeImages([data1, data2])
		.then(b64 => {
			downloadURI(b64, "test.png");
		});

		const row2 = document.getElementById('row2').classList.add('hidden');
}

// Create Image 3
function createImageThree() {
	const image1 = document.getElementById("canvas3_1");
	const image2 = document.getElementById("canvas3_3")

	const data1 = image1.src;
	const data2 = localStorage.getItem("savedImageData2");
	// Merging image and canvas to one image    
	mergeImages([data1, data2])
		.then(b64 => {
			downloadURI(b64, "test.png");
		});

		const row3 = document.getElementById('row3');
		row3.classList.add('hidden');
}


// Create Image 4
function createImageFour() {
	const image1 = document.getElementById("canvas4_1");

	const data1 = image1.src;
	const data2 = localStorage.getItem("savedImageData");
	// Merging image and canvas to one image    
	mergeImages([data1, data2])
		.then(b64 => {
			downloadURI(b64, "test.png");
		});

		const row4 = document.getElementById('row4');
		row4.classList.add('hidden');
}

// Create Image 5
function createImageFive() {
    // This is the background image
	const image1 = document.getElementById("canvas5_1");

    const data1 = image1.src;
    // data2 = canvas image
	const data2 = localStorage.getItem("savedImageData");
    // Merging image and canvas to one image. Image is png so canvas first then image in this particular case    
    console.log(localStorage.getItem("savedImageData"));

	mergeImages([data2, data1])
		.then(b64 => {
			downloadURI(b64, "test.png");
		});

		const row5 = document.getElementById('row5');
		row5.classList.add('hidden');
}


function downloadURI(uri, name) {

	//Open blank page?

	// var link = document.createElement("a");
	// link.download = name;
	// link.target = "_blank";
	// link.href = uri;
	// document.body.appendChild(link);
	// link.click();

	var image = document.createElement("img");
	image.src = uri
	document.getElementById('mockups').appendChild(image);
	image.classList.add('mockup-image');

	// document.body.removeChild(link);
	// delete link;
}