import SectionError from '@components/organizm/SectionError';
import React from 'react';

export default function NotFound() {
  return (
    <SectionError
      blurhash={'UiIhW[D%Rjt7~qaeNFa#IpWBWBofM{NGt7of'}
      imgUrl={'/assets/images/messy-room.jpg'}
      buttonText={'Back To Home'}
      description={'We are sorry, but the page you requested was not found'}
      title={'404'}
    />
  );
}
