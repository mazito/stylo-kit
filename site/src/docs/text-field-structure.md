# Architecting TextField

- Basic
  type: text, email, password, note
  label
  value: bindable 
  validator: function

- Layout Options:
  size: input area size: extrabig, big, medium, normal, small
  stacked, inline
  width: input area max width | empty means autowidth
  hinted: shows hints at start

- Behaviour
  readonly
  required
  disabled
  max-length: max content size

- Toggles
  password
  helper

- Status
  empty
  incomplete
  error
  valid

- Messages
  onEmpty:
  onError:
  onIncomplete:
  onValid:
  hints/placeholder: 

## Layouts

Stacked 
~~~
Label [required]
InputArea [encript][help][ok][error]
HintsArea
StatusArea
~~~

Inline
~~~
-- 30% --------- -- 50% -- -- 20% --
Label [required] InputArea [password][helper][ok][error]
HintsArea
StatusArea
~~~

It can start as Wide but change to Stacked if text is too long