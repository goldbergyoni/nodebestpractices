function getInstagramImagesContent(userId) {
    //let's print what is within(!) the Instagram images
    const imagesContent = [];

    const instagramAPIURL = getInstagramURL();

    const images = getInstagramImages(userId, instagramAPIURL).then(function(images){
        console.log('Images arrived, total ${images.length}');
    });

    imagesContent = identifyObjectsInImages(images);

    console.log(`These are the objects in the images ${imagesContent}`);
}


function identifyObjectsInImages(images) {}

function getInstagramImages(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve([])
        }, 50);
    });
}

function getInstagramURL(){

}