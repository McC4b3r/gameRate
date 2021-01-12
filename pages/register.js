import React from 'react';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { makeStyles, TextField, Button, Typography, Grid, Divider, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles(theme => ({
  form: {
    flexGrow: 1,
    textAlign: 'center',
    marginTop: 5,
  },
  searchBar: {
    marginTop: 10,
    marginBottom: 2,
    minWidth: '30%',
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div>
      <Link href="/">
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </Link>
      <Grid container
        justify="center"
        alignItems="center"
        direction="column"
        style={{ minHeight: "70vh" }}>
        <div>
          <Typography
            variant="h4"
            style={{ marginBottom: "1.5em" }}>
            Sign up with GameRate
        </Typography>
          <Grid container
            justify="center"
            alignItems="center"
            direction="column">
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    name="firstName"
                    type="name"
                    label="First Name"
                    className={classes.form}
                    variant="outlined"
                    style={{ marginBottom: "2em" }}
                    as={TextField} />
                  <ErrorMessage name="email" component="div" />
                  <div />
                  <Field
                    name="lastName"
                    type="name"
                    label="Last Name"
                    className={classes.form}
                    variant="outlined"
                    style={{ marginBottom: "1.1em" }}
                    as={TextField} />
                  <ErrorMessage name="password" component="div" />
                  <div />
                  <Field
                    name="email"
                    type="email"
                    label="E-mail address"
                    className={classes.form}
                    variant="outlined"
                    style={{ marginBottom: "2em" }}
                    as={TextField} />
                  <ErrorMessage name="email" component="div" />
                  <div />
                  <Field
                    name="password"
                    type="password"
                    label="Password"
                    className={classes.form}
                    variant="outlined"
                    style={{ marginBottom: "2em" }}
                    as={TextField} />
                  <ErrorMessage name="email" component="div" />
                  <div />
                  <div>
                    <Grid container
                      justify="center"
                      alignItems="center"
                      direction="column">
                      <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        type="submit"
                        style={{ marginBottom: "1.1em" }}
                        disabled={isSubmitting}>
                        Register
                    </Button>
                      <div />
                    </Grid>
                  </div>
                </Form>
              )}
            </Formik>
          </Grid>
        </div>
      </Grid>
    </div>
  )
};

export default Login;