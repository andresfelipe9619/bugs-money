import React from "react";
import { Header, Modal } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CategoryForm from "./CategoryForm";

const UpdateCategoryModal = ({
  open,
  closeModal,
  handleOnConfirm,
  category
}) => (
  <Modal
    closeIcon
    open={open}
    size={"tiny"}
    dimmer={"blurring"}
    onClose={closeModal}
  >
    <Header>
      <FontAwesomeIcon size="2x" icon="piggy-bank" /> Update your Category
    </Header>
    <Modal.Content>
      <CategoryForm
        category={category}
        submitText={"Update category"}
        handleOnCancel={closeModal}
        handleOnConfirm={handleOnConfirm}
      />
    </Modal.Content>
  </Modal>
);

export default UpdateCategoryModal;
