import React, { useState } from 'react';
import styled from 'styled-components';
import { InputPassword } from '../index';

const FloatInputContent = styled.div`
  .float-label {
    position: relative;
    margin-bottom: 6px;
  }

  .label {
    font-size: 12px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 12px;
    top: 12px;
    transition: 0.2s ease all;
  }

  .as-placeholder {
    color: black;
  }

  .as-label {
    top: 0;
    font-size: 10px;
  }
`;

const FloatInputPassword = props => {
  const [focus, setFocus] = useState(false);
  const { label, value, type } = props;
  let { placeholder } = props;

  if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  const labelClass = isOccupied ? 'label as-label' : 'label as-placeholder';

  // const requiredMark = required ? <span className="text-danger">*</span> : null;

  return (
    <FloatInputContent>
      <div className='float-label' onBlur={() => setFocus(false)} onFocus={() => setFocus(true)}>
        <InputPassword
          onChange={props.onChange}
          type={type}
          defaultValue={value}
          autoComplete='new-password'
        />
        <label className={labelClass}>{isOccupied ? label : placeholder}</label>
      </div>
    </FloatInputContent>
  );
};

export default FloatInputPassword;
