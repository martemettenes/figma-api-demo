// Save canvas as image

var saveBtn = document.getElementById('savebtn');
saveBtn.addEventListener("mousedown", createImage);

var saveBtnTwo = document.getElementById('savebtntwo');
saveBtnTwo.addEventListener("mousedown", createImageTwo);

var saveBtnThree = document.getElementById('savebtnthree');
saveBtnThree.addEventListener("mousedown", createImageThree);

var saveBtnFour = document.getElementById('savebtnfour');
saveBtnFour.addEventListener("mousedown", createImageFour);


// Create Image 1
function createImage() {
	const image1 = document.getElementById("canvas1_1");

	const data1 = image1.src;
	const data2 = localStorage.getItem("savedImageData4");
	// Merging image and canvas to one image    
	mergeImages([data1, data2])
		.then(b64 => {
			downloadURI(b64, "test.png");
		});

	// What is the canvas coordinates when it is merged?
		console.log(imagesAndCoord4);
	
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


// Create Image 5
function createImageThree() {
    // This is the background image
	const image1 = document.getElementById("canvas3_1");

    const data1 = image1.src;
    // data2 = canvas image
	const data2 = JSON.parse(localStorage.getItem("savedImageData"));
	console.log(data2)
	const canvasImage = {
		src: data2.imageUrl,
		x: 0,
		y: 0
	}
	// Merging image and canvas to one image    
	mergeImages([canvasImage, data1], {width: data2.width, height: data2.height})
		.then(b64 => {
			downloadURI(b64, "test.png");
		});

		const row3 = document.getElementById('row3').classList.add('hidden');
}

// Create Image 6
function createImageFour() {
	const image1 = document.getElementById("canvas4_1");

	const data1 = image1.src;
	const data2 = localStorage.getItem("savedImageData3");
	// Merging image and canvas to one image    
	mergeImages([data1, data2])
		.then(b64 => {
			downloadURI(b64, "test.png");
		});

		const row4 = document.getElementById('row4').classList.add('hidden');
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