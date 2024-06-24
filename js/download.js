document.getElementById('downloadBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    // Replace 'path_to_your_file' with the actual path to your file
    var fileUrl = 'CURRICULUM_VITA.pdf';
    var fileName = 'My CV.pdf'; // Change the filename as needed

    fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
});
