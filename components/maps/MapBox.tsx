import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, IMapProps } from "google-maps-react";

interface MapBoxProps extends IMapProps {
  google: any; // Change 'any' to the appropriate type for your Google API object
}

class MapBox extends Component<MapBoxProps> {
  state = {
    selectedLocation: null,
  };

  handleMapClick = (_: any, map: any, clickEvent: { latLng: any }) => {
    const { latLng } = clickEvent;
    const latitude = latLng.lat();
    const longitude = latLng.lng();

    // Save the selected location in the state
    this.setState({
      selectedLocation: { lat: latitude, lng: longitude },
    });
  };

  render() {
    const { selectedLocation } = this.state;
    const { google } = this.props;

    return (
      <div className="relative w-full h-0 pb-80">
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
          onClick={this.handleMapClick}
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
  apiKey: "", // Remember to add your API key here
})(MapBox);
