import React from "react";
import { Header, Modal } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BudgetForm from "./BudgetForm";

const UpdateBudgetModal = ({
  open,
  closeModal,
  handleOnConfirm,
  transaction
}) => (
  <Modal
    closeIcon
    open={open}
    size={"tiny"}
    dimmer={"blurring"}
    onClose={closeModal}
  >
    <Header>
      <FontAwesomeIcon size="2x" icon="piggy-bank" /> Update your transaction
    </Header>
    <Modal.Content>
      <BudgetForm
        transaction={transaction}
        submitText={"Update transaction"}
        handleOnCancel={closeModal}
        handleOnConfirm={handleOnConfirm}
      />
    </Modal.Content>
  </Modal>
);

export default UpdateBudgetModal;
