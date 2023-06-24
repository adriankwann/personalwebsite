import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Box,
  Link,
} from '@chakra-ui/react';

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumeUrl = 'https://example.com/link-to-resume.pdf'; // replace with the URL to your resume

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Resume</ModalHeader>
        <ModalCloseButton />
        <Box as="iframe" src={resumeUrl} width="100%" height="500px" title="Resume" />
        <ModalFooter>
          <Link href={resumeUrl} isExternal>
            Download Resume
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ResumeModal;
