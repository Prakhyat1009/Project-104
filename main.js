//https://teachablemachine.withgoogle.com/models/Rp5fRlDu6/
Webcam.set({
    height: 400,
    width: 400,
    image_format: "png",
    png_quality: 90,
    crop_width: 400,
    crop_height: 300
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'
    });
}