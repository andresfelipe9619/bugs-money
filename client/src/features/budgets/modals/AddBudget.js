import React from "react";
import { Header, Modal } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BudgetForm from "../BudgetForm";

const AddBudgetModal = ({ open, closeModal, handleOnCreate }) => (
  <Modal
    size={"tiny"}
    dimmer={"blurring"}
    open={open}
    closeIcon
    onClose={closeModal}
  >
    <Header>
      <FontAwesomeIcon size="2x" icon="piggy-bank" /> Crea tu Presupuesto
    </Header>
    <Modal.Content>
      <BudgetForm handleOnCreate={handleOnCreate} handleOnCancel={closeModal} />
    </Modal.Content>
  </Modal>
);

export default AddBudgetModal;
