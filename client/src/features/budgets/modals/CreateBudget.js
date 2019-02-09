import React from "react";
import { Header, Modal } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BudgetForm from "../BudgetForm";

const CreateBudgetModal = ({ open, closeModal, handleOnConfirm }) => (
  <Modal
    closeIcon
    open={open}
    size={"tiny"}
    dimmer={"blurring"}
    onClose={closeModal}
  >
    <Header>
      <FontAwesomeIcon size="2x" icon="piggy-bank" /> Crea tú Presupuesto
    </Header>
    <Modal.Content>
      <BudgetForm
        submitText={"Crear presupuesto"}
        handleOnConfirm={handleOnConfirm}
        handleOnCancel={closeModal}
      />
    </Modal.Content>
  </Modal>
);

export default CreateBudgetModal;
