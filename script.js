//GOOGLE MAPS STUFF

// Google Maps initiliazation and coords of 'my zoo'
function initMap() {
    //Zoo address is actually just outside the city parks foundation
    //on 5th and 64th in Central Park
    const zooLocation = { lat: 40.76752666598805, lng: -73.97080706815429 };

    // The map centering and zoom - need to change some of this
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16, // good level of zoom because you can see Hunter College campus in this frame
        center: zooLocation,
    });

    // google marker
    const marker = new google.maps.Marker({
        position: zooLocation,
        map: map,
    });
}

