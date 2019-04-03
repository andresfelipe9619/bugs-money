import React from "react";
import { Form, Button, Message, Grid, Segment, Icon } from "semantic-ui-react";
import withSemanticUIFormik from "../../hoc/FormikSUI";
import * as Yup from "yup";

const FormControl = props => {
  const AccountOptions = [
    { icon: "paypal card", value: "DEBITO", text: "Cuenta Debito" },
    { icon: "cc mastercard", value: "CREDITO", text: "Cuenta Credito" }
  ];
  const {
    errors,
    submitText,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleOnCancel,
    values: { name, nature, accountNumber, value }
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
            <Grid.Row>
              <Grid.Column
                width={6}
                style={{ paddingTop: "2em", maxWidth: 480 }}
              >
                <Form
                  size="large"
                  onSubmit={handleSubmit}
                  loading={isSubmitting}
                >
                  <Form.Input
                    label="Nombre de Cuenta"
                    fluid
                    icon="credit card alternative"
                    type="text"
                    name="name"
                    value={name}
                    iconPosition="left"
                    placeholder="Nombre de cuenta..."
                    onChange={handleChange}
                  />
                  <Form.Select
                    label="Naturaleza de cuenta"
                    fluid
                    placeholder="selecciona un tipo de cuenta"
                    name="nature"
                    value={nature}
                    options={AccountOptions}
                    onChange={handleChange}
                  />
                  <Form.Input
                    label="Numero de cuenta"
                    type="Number"
                    fluid
                    icon="numbered list"
                    iconPosition="left"
                    name="accountNumber"
                    value={accountNumber}
                    placeholder="escribe tu numero de cuenta..."
                    onChange={handleChange}
                  />
                  <Form.Input
                    label="Valor que posee la cuenta"
                    type="Number"
                    fluid
                    icon="numbered list"
                    iconPosition="left"
                    name="value"
                    value={value}
                    placeholder="escribe el valor de tu cuenta..."
                    onChange={handleChange}
                  />
                  <Button type="button" color="red" onClick={handleOnCancel}>
                    <Icon name="remove" /> Cancel
                  </Button>
                  <Button type="submit" color="green">
                    <Icon name="checkmark" /> {submitText || "No hay acción"}
                  </Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const AccountForm = withSemanticUIFormik({
  mapPropsToValues: ({ account }) => ({
    name: (account && account.name) || "",
    accountNumber: (account && account.accountNumber) || 0,
    value: (account && account.limit) || 0,
    nature: account && account.AccountOptions
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Account number is required!"),
    value: Yup.number().required("Limit is required!"),
    nature: Yup.string().required("Account nature is required!"),
    accountNumber: Yup.number(16)
      .required("account number is required!")
      .min(16, "account number must have 16 digits!")
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      console.log("values", values);
      if (!props.account) {
        props.handleOnConfirm(values);
      } else {
        props.handleOnConfirm({ ...values, _id: props.account._id });
      }
      props.handleOnCancel();
      setSubmitting(false);
    }, 1000);
  },
  displayName: "AccountForm"
})(FormControl);

export default AccountForm;
