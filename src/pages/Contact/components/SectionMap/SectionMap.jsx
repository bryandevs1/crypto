import MarkerInfo from '@components/atoms/MarkerInfo';
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import classNames from 'classnames/bind';
import React, { useMemo, useState } from 'react';

import locationIcon from '/assets/svg/location-icon.svg';

import { mapStyles } from './mapStyles';
import styles from './SectionMap.module.scss';

const cn = classNames.bind(styles);

export default function SectionMap() {
  const [selected, setSelected] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  // GoogleMap container style
  const containerStyle = useMemo(
    () => ({
      width: '100%',
      height: '100%',
    }),
    [],
  );

  // GoogleMap initial position and Marker position
  const center = useMemo(
    () => ({
      lat: 54.896932,
      lng: 23.919109,
    }),
    [],
  );

  // GoogleMap options
  const options = useMemo(
    () => ({
      styles: mapStyles,
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    [],
  );

  return (
    <div className={cn('map')}>
      {isLoaded && (
        <GoogleMap
          zoom={13}
          center={center}
          options={options}
          mapContainerStyle={containerStyle}
        >
          <Marker
            position={center}
            icon={locationIcon}
            onClick={() => setSelected(!selected)}
          />

          {selected && (
            <InfoWindow position={center} onCloseClick={() => setSelected(false)}>
              <MarkerInfo />
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </div>
  );
}
