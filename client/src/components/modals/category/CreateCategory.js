import React from "react";
import { Header, Modal } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CategoryForm from "./CategoryForm";

const CreateCategoryModal = ({ open, closeModal, handleOnConfirm }) => (
  <Modal
    closeIcon
    open={open}
    size={"tiny"}
    dimmer={"blurring"}
    onClose={closeModal}
  >
    <Header>
      <FontAwesomeIcon size="2x" icon="piggy-bank" /> Create your Category
    </Header>
    <Modal.Content>
      <CategoryForm
        submitText={"Create category"}
        handleOnConfirm={handleOnConfirm}
        handleOnCancel={closeModal}
      />
    </Modal.Content>
  </Modal>
);

export default CreateCategoryModal;
