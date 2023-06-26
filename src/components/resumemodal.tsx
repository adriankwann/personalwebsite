import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Box,
  Link,
} from "@chakra-ui/react";

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumeUrl =
    "https://drive.google.com/file/d/1YKiPkLL5y6fPjK5pCbvCdgozi2JXrF_0/view";

  const previewUrl =
    "https://drive.google.com/file/d/1YKiPkLL5y6fPjK5pCbvCdgozi2JXrF_0/preview";

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Resume</ModalHeader>
        <ModalCloseButton />
        <Box
          as="iframe"
          src={previewUrl}
          width="100%"
          height="500px"
          title="Resume"
        />
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
