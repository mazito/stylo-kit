/**
 * Field Properties Prtterns
 * 
 * MAZ - 16-11-2020
 */

export const AnyFieldProps =  {
  // basic props
  id: null,
  label: 'Label',
  type: '',
  initial: null, // initial value

  // options
  size: 0,
  required: true,
  disabled: false,
  readonly: false,

  // layout
  layout: 'inline',
  variant: 'wide',
  width: null,

  // help and status props
  status: 'valid',
  hints: 'Some hints',
  messages: {
    errors: {
      'empty': 'Must complete it'
    },
    valid: 'Everything OK'
  }
};

export const TextFieldProps =  {
  maxlen: 0
};

export const NumberFieldProps =  {
  // all number types
  // applies also to dateProps, timeProps & datetimeProps
  min: null,
  max: null,
  format: ''
};

export const DateFieldProps = NumberFieldProps;

export const TimeFieldProps = NumberFieldProps;

export const CheckFieldProps = AnyFieldProps;

export const OptionsFieldProps =  {
  options: [] // [{ value: '', text: ''}, ...]
};

export const QrcodeFieldProps =  {
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

};

export const ChartsFieldProps =  {

};
