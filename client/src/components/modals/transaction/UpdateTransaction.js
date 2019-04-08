import React from "react";
import { Header, Modal } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TransactionForm from "./TransactionForm";

const UpdateTransactionModal = ({
  open,
  closeModal,
  handleOnConfirm,
  transaction,
  accounts,
  categories
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
      <TransactionForm
        accounts={accounts}
        categories={categories}
        transaction={transaction}
        submitText={"Update transaction"}
        handleOnCancel={closeModal}
        handleOnConfirm={handleOnConfirm}
      />
    </Modal.Content>
  </Modal>
);

export default UpdateTransactionModal;
