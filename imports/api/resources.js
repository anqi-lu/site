
const LU = false;
const config = LU ?
{

} :
{
  proj: {
    color: 'rgba(159, 74, 90, 0.35)',
    name: 'projects',
    image: 'proj.jpg',
  },
  reas: {
    color: 'rgba(60, 166, 139, 0.35)',
    name: 'research',
    image: 'reas.jpg',
  },
  read: {
    color: 'rgba(251, 181, 66, 0.35)',
    name: 'reading',
    image: 'read.jpg',
  },
  prof: {
    color: 'rgba(176, 95, 109, 0.35)',
    name: 'professional',
    image: 'prof.jpg',
  },
};

export { LU, config };
