/**
 * Field Properties Prtterns
 * 
 * MAZ - 16-11-2020
 */

 export default {

  Common: {
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
  },

  Text: {
    maxlen: 0
  },

  Number: {
    // all number types
    // applies also to dateProps, timeProps & datetimeProps
    min: null,
    max: null,
    format: ''
  },

  Options: {
    options: [] // [{ value: '', text: ''}, ...]
  },

  QrcodeProps: {
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
  },

  Photos: {
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
  },

  Files: {
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
  },

  Map: {

  },

  Charts: {

  }
}