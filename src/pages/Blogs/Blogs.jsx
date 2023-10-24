import MainLayout from '@layouts/MainLayout';
import React from 'react';

import SectionBlogsIntro from './components/SectionBlogsIntro';
import SectionBlogsNews from './components/SectionBlogsNews';

export default function Blogs() {
  return (
    <MainLayout>
      <div></div>
      <SectionBlogsIntro />
      <SectionBlogsNews />
    </MainLayout>
  );
}
