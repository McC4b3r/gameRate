import React, { useState } from 'react';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
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
            Log In to GameRate
        </Typography>
        <Grid container
          justify="center"
          alignItems="center"
          direction="column">
          <Formik
            initialValues={{ email: '', password: '' }}

            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'An e-mail address is required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}

            onSubmit={(values, { setSubmitting, resetForm,  }) => {
              setSubmitting(true);
              //make async call
              console.log("submit: ", values);
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  name="email"
                  type="email"
                  label="e-mail address"
                  className={classes.form}
                  variant="outlined"
                  style={{marginBottom: "2em"}}
                  as={TextField}/>
                <ErrorMessage name="email" component="div" />
                <div />
                <Field
                  name="password"
                  type="password"
                  label="password"
                  className={classes.form}
                  variant="outlined"
                  style={{ marginBottom: "1.1em" }}
                  as={TextField}/>
                <ErrorMessage name="password" component="div" />
                <div>
                  <Grid container
                    justify="center"
                    alignItems="center"
                    direction="column">
                    <Button
                      size="large"
                      variant="contained"
                      color="primary"
                      type="submit"
                      style={{ marginBottom: "1.1em" }}
                      disabled={isSubmitting}>
                      Submit
                    </Button>
                    <div />
                    <Typography variant="h6">
                      Don't have an account?
                      <div />
                      <Grid container
                        justify="center"
                        alignItems="center"
                        direction="column">
                          <Link href="/register">
                            <Button size="large"
                              variant="contained"
                              color="secondary"
                              style={{ marginTop: "1.1em" }}>
                              Register
                            </Button>
                          </Link>
                      </Grid>
                    </Typography>
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