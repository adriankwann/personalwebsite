import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Box,
  Link,
  Spinner,
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

  const [isIframeLoading, setIsIframeLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsIframeLoading(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Resume</ModalHeader>
        <ModalCloseButton />
        {isIframeLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="500px"
          >
            <Spinner size="xl" />
          </Box>
        ) : null}
        <Box
          as="iframe"
          src={previewUrl}
          width="100%"
          height="500px"
          title="Resume"
          onLoad={handleIframeLoad}
          style={{ display: isIframeLoading ? "none" : "block" }}
        />
        <ModalFooter>
          {!isIframeLoading && (
            <Link href={resumeUrl} isExternal>
              Download Resume
            </Link>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ResumeModal;
