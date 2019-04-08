import React from "react";
import { Header, Modal } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";

import AccountForm from "./AccountForm";

const UpdateAccountModal = ({ open, closeModal, handleOnConfirm, account }) => (
  <Modal
    closeIcon
    open={open}
    size={"tiny"}
    dimmer={"blurring"}
    onClose={closeModal}
  >
    <Header>
      <FontAwesomeIcon size="2x" icon={faMoneyCheckAlt} /> Actualiza tu Cuenta
    </Header>
    <Modal.Content>
      <AccountForm
        account={account}
        submitText={"Actualizar Cuenta"}
        handleOnCancel={closeModal}
        handleOnConfirm={handleOnConfirm}
      />
    </Modal.Content>
  </Modal>
);

export default UpdateAccountModal;
