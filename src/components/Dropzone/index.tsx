/* eslint-disable react/jsx-props-no-spreading */
import { useDropzone } from 'react-dropzone';

import { LoadImage, Wrapper } from 'src/components/Dropzone/styles';

interface DropzoneProps {
  className?: string;
  image: string;
  changeImage: (image: string) => void;
  handleChangeImageUrl: (url: File) => void;
}

const Dropzone = ({
  className,
  image,
  changeImage,
  handleChangeImageUrl,
}: DropzoneProps) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    onDrop: (acceptedFiles) => {
      const currentFile = acceptedFiles[0];
      const imageObject = Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      });

      changeImage(imageObject.preview);
      handleChangeImageUrl(currentFile);
    },
  });

  return (
    <Wrapper {...getRootProps()} className={className}>
      <LoadImage src={image} alt='Load' />
      <input {...getInputProps({ accept: '.jpg, .jpeg, .png' })} />
    </Wrapper>
  );
};

export default Dropzone;
