import React from "react";
import { Header, Modal } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TransactionForm from "./TransactionForm";

const CreateTransactionModal = ({
  open,
  closeModal,
  handleOnConfirm,
  accounts,
  budgets
}) => (
  <Modal
    closeIcon
    open={open}
    size={"tiny"}
    dimmer={"blurring"}
    onClose={closeModal}
  >
    <Header>
      <FontAwesomeIcon size="2x" icon="piggy-bank" /> Register a new transaction
    </Header>
    <Modal.Content>
      <TransactionForm
        budgets={budgets}
        accounts={accounts}
        submitText={"Create Transaction"}
        handleOnConfirm={handleOnConfirm}
        handleOnCancel={closeModal}
      />
    </Modal.Content>
  </Modal>
);

export default CreateTransactionModal;
