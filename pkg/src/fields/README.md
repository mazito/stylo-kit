# FieldContainer

Acts as a general container for input Fields, allowing them 
to adapt to different type, width, and field content situations.

## Areas & Slots

- LabelArea
  
- InputArea (slot)
  
- ButtonsArea (slot)
  
- HintsArea
  
- StatusArea

## Layouts

**Stacked** 
~~~
LabelArea (grow) / ButtonsArea (2ch+, right)
InputArea (grow) 
HintsArea || StatusArea (100%)
~~~

**Inline**
~~~
LabelArea (20ch,left) / InputArea (grow) / ButtonsArea (2ch+,right)
HintsArea || StatusArea (100%)
~~~

**Changing layout** according to where it's inside:

- `inside = plain`:

  Shows all features.

- `inside = item`:

  Shows only InputArea and LabelArea.
  No HintsArea, no Helper. 
  Status must be shown as a small icon inside input.
  Width must be the full item cell width.

- `inside = cell`:

  Shows only InputArea.
  No LabelArea, no HintsArea, no Helper
  Status must be shown as a small icon inside input.
  Width must be the full cell width.

## in Phone (*, sm)

- Layout `inline`: show as inline if content is less than width, then converts to stacked.

- Layout `stacked`: show as stacked.

## in Tablet+ (md, +)

- Uses given layout.
