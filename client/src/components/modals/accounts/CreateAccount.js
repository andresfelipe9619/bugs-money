import React from "react";
import { Header, Modal } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";

import AccountForm from "./AccountForm";

const CreateAccountModal = ({ open, closeModal, handleOnConfirm }) => (
  <Modal
    closeIcon
    open={open}
    size={"tiny"}
    dimmer={"blurring"}
    onClose={closeModal}
  >
    <Header>
      <FontAwesomeIcon size="2x" icon={faMoneyCheckAlt} />
      Create your Account
    </Header>
    <Modal.Content>
      <AccountForm
        submitText={"Create Account"}
        handleOnConfirm={handleOnConfirm}
        handleOnCancel={closeModal}
      />
    </Modal.Content>
  </Modal>
);

export default CreateAccountModal;
