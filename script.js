const myButton = document.getElementById("myButton");
const image = document.getElementsByClassName("myPhoto")[0];
const originalImageSrc = image.src;
const imageArray = ["photo/image2.png",
    "photo/image3.png",
    "photo/image4.png",
];



let counter = 0;
const myFunction = () => {
    if (counter ===3) {
        image.src = originalImageSrc;
        counter = 0;
        return;
    }
    const imageLink = imageArray[counter];
    image.src = imageLink;
    counter += 1;
    console.log("counter value is: ", counter);

}


/* myButton.onclick = myFunction; */

myButton.addEventListener("click", myFunction);
