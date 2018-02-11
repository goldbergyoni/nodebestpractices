function getInstagramImagesContent(userId) {
    //print
    const imagesContent = [];
    
    const images = getInstagramImages();

    imagesContent = identifyObjectsInImages(images);

    console.log(`These are the objects in the images ${imagesContent    }`);
}

function identifyObjectsInImages(images) {}

function getInstagramImages(userId) {}

function getImagesWithManyLikes(images) {}
