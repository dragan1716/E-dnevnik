import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import classes from "./RegistrationForm.module.css";
import { useState } from "react";

export function RegistrationForm() {
  const [jmbgError, setJmbgError] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      jmbg: "",
      email: "",
      dateOfBirth: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Ime mora imati najmanje 3 karaktera!")
        .required("Polje je obavezno popuniti!"),
      lastName: Yup.string()
        .min(3, "Prezime mora imati najmanje 3 karaktera!")
        .required("Polje je obavezno popuniti!"),
      jmbg: Yup.string()
        .matches(/^[0-9]{13}$/, "JMBG mora imati tačno 13 cifara!")
        .required("Polje je obavezno popuniti!"),
      email: Yup.string()
        .email("Neispravna email adresa!")
        .required("Polje je obavezno popuniti!"),
      dateOfBirth: Yup.date().required("Polje je obavezno popuniti!"),
      password: Yup.string()
        .min(8, "Lozinka mora imati najmanje 8 karaktera!")
        .matches(
          /^(?=.*[A-Z])/,
          "Lozinka mora sadržavati barem jedno veliko slovo!"
        )
        .required("Polje je obavezno popuniti!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Lozinke se moraju poklapati!")
        .required("Polje je obavezno popuniti!"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const dataToSend = {
        firstName: values.firstName,
        lastName: values.lastName,
        jmbg: values.jmbg,
        email: values.email,
        dateOfBirth: values.dateOfBirth,
        password: values.password,
      };
      try {
        const response = await fetch("http://localhost:3000/v1/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Registration successful", data);
          setJmbgError("");
        } else {
          console.error("Registration failed:", response.statusText);
          if (response.status === 400) {
            const data = await response.json();
            setJmbgError(data.message);
          }
        }
      } catch (error) {
        console.error("Error during registration: ", error.message);
      }
      console.log(values);
      resetForm();
    },
  });

  const handleJmbgChange = (e) => {
    formik.handleChange(e); // Pozivamo izvorni rukovalac za promjenu

    // Provjeravamo da li je uneseno tačno 13 cifara za JMBG
    if (e.target.value.length > 0) {
      setJmbgError(""); // Ako je, postavljamo jmbgError na prazan string
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Registracija
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Unesite svoje podatke za registraciju.
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-8 mb-2 max-w-screen-md mx-auto"
        style={{ width: "600px" }}
      >
        <div className="mb-1 flex flex-col gap-6">
          {/*IME*/}
          <div className={classes["wrapper"]}>
            <div className={classes["input"]}>
              <Input
                id="firstName"
                size="lg"
                placeholder="Unesite ime"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className={classes["error-message"]}>
              {formik.touched.firstName && formik.errors.firstName ? (
                <p className="text-red-500">{formik.errors.firstName}</p>
              ) : null}
            </div>
          </div>

          {/* PREZIME */}
          <div className={classes["wrapper"]}>
            <div className={classes["input"]}>
              <Input
                id="lastName"
                size="lg"
                placeholder="Unesite prezime"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className={classes["error-message"]}>
              {formik.touched.lastName && formik.errors.lastName ? (
                <p className="text-red-500">{formik.errors.lastName}</p>
              ) : null}
            </div>
          </div>

          {/* JMBG */}
          <div className={classes["wrapper"]}>
            <div className={classes["input"]}>
              <Input
                id="jmbg"
                size="lg"
                placeholder="Unesite JMBG"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={handleJmbgChange}
                value={formik.values.jmbg}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className={classes["error-message"]}>
              {formik.touched.jmbg && formik.errors.jmbg ? (
                <p className="text-red-500">{formik.errors.jmbg}</p>
              ) : null}
              {jmbgError && <p className="text-red-500">{jmbgError}</p>}
            </div>
          </div>

          {/*Email  */}
          <div className={classes["wrapper"]}>
            <div className={classes["input"]}>
              <Input
                id="email"
                size="lg"
                type="email"
                placeholder="Unesite Email"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className={classes["error-message"]}>
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500">{formik.errors.email}</p>
              ) : null}
            </div>
          </div>

          {/* Godina rodjenja */}
          <div className={classes["wrapper"]}>
            <div className={classes["input"]}>
              <Input
                id="dateOfBirth"
                size="lg"
                type="date"
                placeholder=""
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={formik.handleChange}
                value={formik.values.dateOfBirth}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className={classes["error-message"]}>
              {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                <p className="text-red-500">{formik.errors.dateOfBirth}</p>
              ) : null}
            </div>
          </div>

          {/* PASSWORD */}
          <div className={classes["wrapper"]}>
            <div className={classes["input"]}>
              <Input
                id="password"
                type="password"
                size="lg"
                placeholder="Unesite lozinku"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className={classes["error-message"]}>
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-500">{formik.errors.password}</p>
              ) : null}
            </div>
          </div>

          {/* POTVRDA LOZINKE */}
          <div className={classes["wrapper"]}>
            <div className={classes["input"]}>
              <Input
                id="confirmPassword"
                type="password"
                size="lg"
                placeholder="Potvrdite lozinku"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className={classes["error-message"]}>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <p className="text-red-500">{formik.errors.confirmPassword}</p>
              ) : null}
            </div>
          </div>
        </div>

        <Button
          style={{ width: "45%" }}
          type="submit"
          className="mt-6"
          fullWidth
        >
          Registruj se
        </Button>
        <Typography
          color="gray"
          style={{ float: "left" }}
          className="mt-4 text-center font-normal"
        >
          Već imate kreiran nalog?{" "}
          <Link to="/login" className="font-medium text-blue-900">
            Prijavite se
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
