import React from 'react'
import {FormInputLabel, Input , Group}  from'./Form-Input_style'
const FormInput = ({ Label, ...otherProps }) => {
  return (
    <Group>
      <Input{...otherProps} />
      {Label && (<FormInputLabel shrink={otherProps.value.length}>
        {Label}
      </FormInputLabel>)}
    </Group>
  );
};

export default FormInput;
