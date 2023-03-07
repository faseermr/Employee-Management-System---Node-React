const yup = require("yup");

const staffSchema = yup.object({
  full_name: yup.string().strict().trim().required("required"),
  // gender:yup.string()
  //           .required("required"),
  // nic:yup.string()
  //           .required("required"),
  // date_of_birth:yup.date()
  //                 .required("required"),
  //                // .max(new Date(),"Cannot Select"),
  // address:yup.string()
  //            .required("required"),
  // staff_role:yup.string()
  //             .strict()
  //             .trim()
  //            .required("required"),
  // contact_no:yup.number()
  //             .integer()
  //            .typeError('numbers only')
  //             //.strict()
  //            .required("required"),
  email: yup.string().email("invalid email").required("required"),
});

module.exports = staffSchema;
