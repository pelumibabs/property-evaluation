import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapBoxStyles = {
  position: "relative",
  width: "100%",
  height: "0",
  paddingBottom: "80%",
};

class mapBox extends Component {
  state = {
    selectedLocation: null,
  };

  handleMapClick = (_, map, clickEvent) => {
    const { latLng } = clickEvent;
    const latitude = latLng.lat();
    const longitude = latLng.lng();

    // Save the selected location in the state
    this.setState({
      selectedLocation: { lat: latitude, lng: longitude },
    });
  };

  render() {
    const { google } = this.props;
    const { selectedLocation } = this.state;

    return (
      <div style={mapBoxStyles}>
        <Map
          google={google}
          zoom={14}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          initialCenter={{
            lat: 6.5244, 
            lng: 3.3792,
          }}
          onClick={this.handleMapClick} // Add the onClick event handler
        >
          {selectedLocation && (
            <Marker position={selectedLocation} name="Selected Location" />
          )}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "",
})(mapBox);
