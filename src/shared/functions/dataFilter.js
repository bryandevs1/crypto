export const filterProjects = (projects, category) => {
  const foundProjects = projects.find((project) => {
    return project.category === category;
  });
  return foundProjects.projectsInfo;
};
