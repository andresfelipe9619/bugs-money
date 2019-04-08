import React from "react";
import { Header, Modal } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BudgetForm from "./BudgetForm";

const UpdateBudgetModal = ({ open, closeModal, handleOnConfirm, budget }) => (
  <Modal
    closeIcon
    open={open}
    size={"tiny"}
    dimmer={"blurring"}
    onClose={closeModal}
  >
    <Header>
      <FontAwesomeIcon size="2x" icon="piggy-bank" /> Update your budget
    </Header>
    <Modal.Content>
      <BudgetForm
        budget={budget}
        submitText={"Update budget"}
        handleOnCancel={closeModal}
        handleOnConfirm={handleOnConfirm}
      />
    </Modal.Content>
  </Modal>
);

export default UpdateBudgetModal;
