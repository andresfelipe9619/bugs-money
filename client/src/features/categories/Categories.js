import React, { PureComponent } from "react";
import DataTable from "../../components/tables/DataTable";
import CategoryRow from "./CategoryRow";
import API from "../../services/api";
import CreateCategoryModal from "../../components/modals/category/CreateCategory";
import UpdateCategoryModal from "../../components/modals/category/UpdateCategory";
export default class Categories extends PureComponent {
  state = {
    isModalOpen: {
      create: false,
      update: false
    },
    currentCategory: null,
    activeIndex: -1
  };

  createCategory = async category => {
    let res = await API.Category.create(category);
    if (res.ok) {
      this.props.getBudgets();
    }
  };

  viewCategory = category => {
    this.setCurrentCategory(category);
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  updateCategory = async category => {
    const { budget } = this.props;
    console.log("category", category);
    let res = await API.Category.update({ ...category, budget });
    if (res.ok) {
      this.props.getBudgets();
    }
  };

  deleteCategory = async category => {
    let res = await API.Category.delete(category._id);
    if (res.ok) {
      this.props.getBudgets();
    }
  };

  handleOnCreate = category => {
    const { budget } = this.props;
    console.log("category", category);
    if (!category) return;
    this.createCategory({ ...category, budget });
  };

  handleOnUpdate = category => e => {
    console.log("category", category);
    if (!category) return;
    this.setCurrentCategory(category);
    this.openModal("update")();
  };

  handleOnView = category => e => {
    console.log("category", category);
    if (!category) return;
    this.viewCategory(category);
  };

  handleOnDelete = category => e => {
    console.log("category", category);
    if (!category) return;
    this.deleteCategory(category);
  };

  setCurrentCategory = category => {
    if (!category) return;
    this.setState({ currentCategory: category });
  };

  openModal = modal => () => {
    this.setState({ isModalOpen: { [modal]: true } });
  };

  closeModal = modal => () => {
    this.setState({ isModalOpen: { [modal]: false } });
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { categories } = this.props;
    const { isModalOpen, currentCategory } = this.state;
    const handlers = {
      handleOnView: this.handleOnView,
      handleOnCreate: this.handleOnCreate,
      handleOnUpdate: this.handleOnUpdate,
      handleOnDelete: this.handleOnDelete
    };
    return (
      <React.Fragment>
        <CategoryRow openModal={this.openModal("create")} />
        {categories && categories.length > 0 ? (
          <DataTable actions handlers={handlers} data={categories} />
        ) : (
          <p>There are not categories yet, try to create something</p>
        )}
        <CreateCategoryModal
          open={isModalOpen.create}
          closeModal={this.closeModal("create")}
          handleOnConfirm={handlers.handleOnCreate}
        />
        <UpdateCategoryModal
          category={currentCategory || null}
          open={isModalOpen.update}
          closeModal={this.closeModal("update")}
          handleOnConfirm={this.updateCategory}
        />
      </React.Fragment>
    );
  }
}
