/**
 * Field and Container properties 
 * 
 * MAZ - 16-11-2020
 */

export const FieldContainerProps =  {
  // basic props
  id: null,
  label: 'Label',

  // options
  required: true,
  disabled: false,
  readonly: false,

  // layout
  layout: 'inline', // layout: inline, stacked, mini
  // variant: 'wide',
  width: null,

  // help and status props
  status: 'valid',
  hints: 'Some hints',
  limits: '',
  messages: {
    errors: {
      'empty': 'Must complete it'
    },
    valid: 'Everything OK'
  }
};

export const AnyFieldProps =  {
  // basic props
  id: null,
  initial: null, // initial value

  // options
  size: null,
  required: true,
  disabled: false,
  readonly: false,

  // help and status props
  status: 'valid', // status: valid, error, empty
};

export const TextFieldProps =  {
  ...AnyFieldProps,
  maxlen: 0
};

export const NumberFieldProps =  {
  ...AnyFieldProps,
  // all number types
  // applies also to dateProps, timeProps & datetimeProps
  min: null,
  max: null,
  format: ''
};

export const DateFieldProps = {
  ...NumberFieldProps,
  mask: 'dd-mm-yyyy',
};

export const TimeFieldProps = {
  ...NumberFieldProps,
  mask: 'hh:mm'
}

export const CheckFieldProps = AnyFieldProps;

export const OptionsFieldProps =  {
  ...AnyFieldProps,
  options: [] // [{ value: '', text: ''}, ...]
};

export const QrcodeFieldProps =  {
  ...AnyFieldProps,
  scan: null
  /* 
    // Promise for scanner 
    scan
      .then(function(response) {
        value = response.text
      }
      .catch(error) {
        // error =
      }
    }
  */
};

export const PhotosFieldProps =  {
  ...AnyFieldProps,
  min: 1,
  max: null,
  count: 0,
  capture: null
  // value = [{ uid: '', name: '' }, ...]
  /* 
    // Promise for media capture 
    capture
      .then(function(response) {
        value.push(response.fileUrl)
      }
      .catch(error) {
        // error =
      }
    }
  */
};

export const FilesFieldProps =  {
  ...AnyFieldProps,
  min: 1,
  max: null,
  count: 0,
  attach: null
  // value = [{ uid: '', name: '' }, ...]
  /* 
    // Promise for file attachment
    attach
      .then(function(response) {
        value.push(response.fileUrl)
      }
      .catch(error) {
        // error =
      }
    }
  */
};

export const MapFieldProps =  {
  ...AnyFieldProps,
};

export const ChartsFieldProps =  {
  ...AnyFieldProps,
};
