import { IoIosPlayCircle } from 'react-icons/io';
import Container from '../Container';
import Button from '../ui/Button';
import { Dialog, DialogBody } from '@material-tailwind/react';
import { useState } from 'react';

export default function VideoFrame() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Container>
        <div className='bg-videoFrameBg  bg-cover bg-center flex items-center justify-center h-[600px] rounded-xl '>
          <div onClick={handleOpen}>
            <Button invert={true} className="rounded-3xl">
              <IoIosPlayCircle size={40} />
            </Button>
          </div>
        </div>
      </Container>
      <Dialog  size="xl" open={open} handler={handleOpen}>
        <DialogBody className='h-[40rem]'>
          <iframe 
          className='w-full h-full' 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/7gswtbX8G7Q?si=zhD2yK_xguaAyvYv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </DialogBody>
      </Dialog>
    </>
  );
}
