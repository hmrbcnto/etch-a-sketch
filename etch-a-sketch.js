
//function for creating divs
const createDivs = (size) => {

	//selecting parent element of the divs
	const parent = document.querySelector("#sketchDiv")

	//div size 
	const divSize = 100 / size

	//sanity check
	console.log("It's working!")

	//loop for creating divs
	for (let i = 0; i < size*size; i++){
		let childId = "flexChild" + i
		let child = document.createElement("div");
		child.setAttribute("class","flexChild")
		child.setAttribute("id",childId);
		child.style.flex = `1 0 ${divSize}%`
		child.style.backgroundColor = "#FFF3B5"
		parent.appendChild(child)

	}

	//taking all created divs
	const divs = document.querySelectorAll(".flexChild")

	divs.forEach((div) => {

		//adding event listener
		div.addEventListener("mouseover", () => {
			div.style.backgroundColor = "black";
		})
	})
}

//function to add action to clear button 
const clearButton = () => {

	//assigns clear button element
	const clearButton = document.querySelector("#clear");

	//adds event to clearButton on press
	clearButton.addEventListener("click", () => {
		console.log("kuyawa part");
		clearDivs();
	})
}

//clears already colored divs
const clearDivs = () => {
	//assigns list of divs with flexChild class to variable
	const divs = document.querySelectorAll(".flexChild");

	//changes background color back to white
	divs.forEach((div) => {
		div.style.backgroundColor = "white"
	})
}


//removes children ie clears all existing divs within parent sketchDiv
const removeChildren = () => {

	//selects element with sketchDIv as ID
	const parent = document.querySelector("#sketchDiv");

	//loops to remove child elements
	while(parent.firstChild){
		parent.removeChild(parent.lastChild)
	}
}


//
const adjustGridSize = (size) => {
	removeChildren();
	createDivs(size);
}

const gridSize = () => {
	//assigns element with id gridSize to variable gridSz
	const gridSz = document.querySelector("#gridSize")

	//adds event listener
	gridSz.addEventListener("click", () =>{
		//prompts user for size and assigns to variable size
		let size = window.prompt("Please enter your desired etch-a-sketch size");
		adjustGridSize(size);
	})

}

clearButton()
gridSize()
createDivs(16);