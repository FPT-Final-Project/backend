import cloudinary from '../configs/cloudinary';

export const uploadSingle = async (file) => {
  const image = await cloudinary.uploader.upload(file.path, {
    folder: 'images',
  });

  return image.secure_url;
};
