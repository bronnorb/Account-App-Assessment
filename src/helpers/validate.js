//function to validate all inputs based on having a value
//or against a regex

export function validateInputs(values){
    const errors = {}
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneNoRegex = /^\(?(?:\+?61|0)(?:(?:2\)?[ -]?(?:3[ -]?[38]|[46-9][ -]?[0-9]|5[ -]?[0-35-9])|3\)?(?:4[ -]?[0-57-9]|[57-9][ -]?[0-9]|6[ -]?[1-67])|7\)?[ -]?(?:[2-4][ -]?[0-9]|5[ -]?[2-7]|7[ -]?6)|8\)?[ -]?(?:5[ -]?[1-4]|6[ -]?[0-8]|[7-9][ -]?[0-9]))(?:[ -]?[0-9]){6}|4\)?[ -]?(?:(?:[01][ -]?[0-9]|2[ -]?[0-57-9]|3[ -]?[1-9]|4[ -]?[7-9]|5[ -]?[018])[ -]?[0-9]|3[ -]?0[ -]?[0-5])(?:[ -]?[0-9]){5})$/;
    const postcodeRegex = /^[0-9]{4}/;
    const hourlyRateRegex = /^\$?\d+(\.(\d{2}))?$/;
    if(!values.firstName){
      errors.firstName = "First name is required!";
    }
    if(!values.lastName){
      errors.lastName = "Last name is required!";
    }
    if(!values.email){
      errors.email = "Email is required!";
    }
    else if(!emailRegex.test(values.email)){
      errors.email = "Invalid email!";
    }
    if(!values.phoneNo){
      errors.phoneNo = "Phone number is required!";
    }
    else if(!phoneNoRegex.test(values.phoneNo)){
      errors.phoneNo = "Phone number is invalid!";
    }
    if(!values.postcode){
      errors.postcode = "Postcode is required!";
    }
    else if(!postcodeRegex.test(values.postcode)){
      errors.postcode = "Postcode is invalid!";
    }
    if(values.state === 'Select state'){
      errors.state = "State is required!";
    }
    if(!values.hourlyRate){
      errors.hourlyRate = "Hourly rate is required!";
    }
    else if(!hourlyRateRegex.test(values.hourlyRate)){
      errors.hourlyRate = "Hourly rate is invalid!";
    }
    if(!values.dob){
      errors.dob = "Date of birth is required!";
    }
    else if(values.dob > new Date().toISOString().slice(0, 10)){
      errors.dob = "Date of birth cannot be in the future!"
    }
    return errors;
  }