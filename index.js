const findText = () => {
    const fileInput = document.getElementById('fileInput');
    const outputDiv = document.getElementById('outputDiv');
    const imagesFile = fileInput.files[0];

    if(!imagesFile){
        alert('Please select an image file.')
    }


    Tesseract.recognize(
        imagesFile,
        'eng'
    ).then(({data}) => {
        outputDiv.textContent = data.text;
    }).catch((err) => {
        console.error('Error', err);
        outputDiv.textContent = 'Error';
    })
}