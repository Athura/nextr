import React from 'react';
import { Button } from '../../styles/common/button';

import Modal from '../Modal/Modal';
import useToggle from '../../utils/useToggle';

const About = () => {
  const [open, setOpen] = useToggle(false);
  return (
    <div id="modal">
      <h1> About Us </h1>
      <div>
        <Button signup border onClick={() => setOpen(true)}>
          Toggle Me!
        </Button>
        {open && (
          <Modal toggle={setOpen} open={open}>
            <h1>Howdy there partner</h1>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default About;
