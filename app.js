function initMap(){
  
  //Map Option

  var options = {
    center: {lat: -37.840935, lng: 144.946457},
    zoom: 10
  }

  //New Map
  map = new google.maps.Map(document.getElementById("map"), options)

  //listen for click on map location
  google.maps.event.addListener(map, "click", (event) => {
    //add marker function
    addMarker({location:event.latLng});
  })


  let MarkerArray = [
    {location:{lat: -37.808163434, lng: 144.957829502}, 
    imageIcon: "https://img.icons8.com/nolan/2x/marker.png",
    content: `<h2>Melbourne City</h2>`},

    {location:{lat: -37.828518, lng: 144.997028}, 
    content: `<h2>First Page Digital</h2>`

}]

// Loop through marker - iterate through markers 
for (let i = 0; i < MarkerArray.length; i++){
  addMarker(MarkerArray[i]);
}


  // Add Marker
  function addMarker(props){
    const marker = new google.maps.Marker({
      position:props.location,
      map:map,
      icon:props.imageIcon
    });

    // Check for custom Icon - conditional statements
    
    if(props.imageIcon){
      // set image icon
      marker.setIcon(props.imageIcon)
    }

    if(props.content){
      
      const detailWindow = new google.maps.InfoWindow({
        content: props.content
    
    });

    marker.addListener("mouseover", () => {
      detailWindow.open(map, marker);
    });

  }
}

}