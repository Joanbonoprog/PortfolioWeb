// Punto de entrada del visor de imágenes.
// Compone los módulos y expone la API global tipada.
import { projectGalleries } from '../data/project-galleries';
import { ImageViewer } from './image-viewer/ImageViewer';

const viewer = new ImageViewer();

window.openProjectGallery = (projectName: string): void => {
  const images = projectGalleries[projectName];
  if (images && images.length > 0) {
    viewer.open(projectName, images, 0);
  }
};
