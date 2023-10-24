import React, { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const Blogs = lazy(() => import('../pages/Blogs'));
const Blog = lazy(() => import('../pages/Blog'));
const Contact = lazy(() => import('../pages/Contact'));
const Services = lazy(() => import('../pages/Services'));
const Service = lazy(() => import('../pages/Service'));
const Project = lazy(() => import('../pages/Project'));
const NotFound = lazy(() => import('../pages/NotFound'));
const UnderDevelopment = lazy(() => import('../pages/UnderDevelopment'));

const TITLES = {
  HOMEPAGE: 'Forte Imperiali Interiors',
  ABOUT: 'About Us',
  PROJECTS: 'Projects',
  PROJECT: 'Project',
  BLOGS: 'Store',
  BLOG: 'Store',
  CONTACT: 'Contact',
  SERVICES: 'Services',
  SERVICE: 'Service',
  NOTFOUND: 'Not Found',
  UNDERDEVELOPMENT: 'Not ready',
};
const TITLLES = {
  HOMEPAGE: 'Home ',
  ABOUT: 'About Us',
  PROJECTS: 'Projects',
  PROJECT: 'Project',
  BLOGS: 'Cart🛒',
  BLOG: 'Store',
  CONTACT: 'Contact',
  SERVICES: 'Services',
  SERVICE: 'Service',
  CART: 'Cart🛒',
  NOTFOUND: 'Not Found',
  UNDERDEVELOPMENT: 'Not ready',
};

const ROUTES = [
  {
    path: '/',
    title: TITLES.HOMEPAGE,
    titlle: TITLLES.HOMEPAGE,
    element: <HomePage />,
    nav: true,
  },
  {
    path: '/about',
    title: TITLES.ABOUT,
    titlle: TITLLES.ABOUT,
    element: <About />,
    nav: true,
  },
  {
    path: '/services',
    title: TITLES.SERVICES,
    titlle: TITLLES.SERVICES,
    element: <Services />,
    nav: true,
  },
  {
    path: '/services/:serviceId',
    title: TITLES.SERVICE,
    titlle: TITLLES.SERVICE,
    element: <Service />,
  },

  {
    path: '/projects/:projectId',
    title: TITLES.PROJECT,
    titlle: TITLLES.PROJECT,
    element: <Project />,
  },
  {
    path: '/projects',
    title: TITLES.PROJECTS,
    titlle: TITLLES.PROJECTS,
    element: <Projects />,
    nav: true,
  },
  {
    path: '/blogs/:blogId',
    title: TITLES.BLOG,
    titlle: TITLLES.BLOG,
    element: <Blog />,
  },
  {
    path: '/contact',
    title: TITLES.CONTACT,
    titlle: TITLLES.CONTACT,
    element: <Contact />,
    nav: true,
  },
  {
    path: '/blogs',
    title: TITLES.BLOGS,
    titlle: TITLLES.BLOGS,
    element: <Blogs />,
    nav: true,
  },
  {
    path: '/under-development',
    title: TITLES.UNDERDEVELOPMENT,
    titlle: TITLLES.UNDERDEVELOPMENT,
    element: <UnderDevelopment />,
  },
  {
    path: '*',
    title: TITLES.NOTFOUND,
    titlle: TITLLES.NOTFOUND,
    element: <NotFound />,
  },
];

export default ROUTES;
