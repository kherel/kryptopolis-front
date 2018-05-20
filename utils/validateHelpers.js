export function isEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email)) {
    return null
  } else {
    return 'Not a email'
  }
}

export const required = fieldValue => fieldValue ? null : "Please enter a value";

export const equalToField = (fieldName) => (fieldValue, state) =>
  fieldValue === state[fieldName] ? null : `Not equal to ${fieldName}`;

export function validateWebsiteName(url) {
  const re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  return re.test(url);
}

export function validateMaxLength(text = '', lenght) {
  return text.length <= lenght;
}

