import React from "react";
import {
  Form,
  Button,
  Message,
  Grid,
  Icon,
  Segment,
  TextArea
} from "semantic-ui-react";
import withSemanticUIFormik from "../../hoc/FormikSUI";
import * as Yup from "yup";

const MyInnerForm = props => {
  const {
    errors,
    submitText,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleOnCancel,
    values: { name, value, description }
  } = props;
  return (
    <Grid
      style={{
        height: "100%"
      }}
      verticalAlign="middle"
      centered
    >
      <Grid.Row centered>
        <Grid.Column width={16}>
          <Segment>
            {Object.keys(errors).length > 0 ? (
              <Message
                error
                header="Campos invalidos"
                list={Object.keys(errors).map(key => errors[key])}
              />
            ) : null}
            <Form size="large" onSubmit={handleSubmit} loading={isSubmitting}>
              <Form.Group widths="equal">
                <Form.Input
                  label="Category name"
                  labelposition="left"
                  value={name}
                  fluid="true"
                  icon="money"
                  type="text"
                  name="name"
                  iconposition="left"
                  placeholder="categry name..."
                  onChange={handleChange}
                />
                <Form.Input
                  label="Value"
                  labelposition="left"
                  type="text"
                  fluid="true"
                  icon="money"
                  iconposition="left"
                  name="value"
                  value={value}
                  placeholder="value..."
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <TextArea
                  label="Description"
                  labelposition="left"
                  type="text"
                  fluid="true"
                  iconPosition="left"
                  name="description"
                  value={description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button type="button" color="red" onClick={handleOnCancel}>
                <Icon name="remove" /> Cancel
              </Button>

              <Button type="submit" color="green">
                <Icon name="checkmark" /> {submitText || "There is not action"}
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const CategoryForm = withSemanticUIFormik({
  mapPropsToValues: ({ category }) => ({
    name: (category && category.name) || "University",
    description:
      (category && category.description) ||
      "I'm a broke student, so i have to expend the less i can at the university",
    value: (category && category.value) || 0
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is requered!"),
    value: Yup.number().required("Value is required!"),
    description: Yup.string().required("Description is required!")
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      console.log("values", values);
      if (!props.category) {
        props.handleOnConfirm(values);
      } else {
        props.handleOnConfirm({ ...values, _id: props.category._id });
      }
      props.handleOnCancel();
      setSubmitting(false);
    }, 1000);
  },
  displayName: "CategoryForm"
})(MyInnerForm);

export default CategoryForm;
