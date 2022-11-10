import React, { useState } from 'react';
import styled from 'styled-components';
import { Select } from '../index';

const FloatSelectContent = styled.div`
  .float-label {
    position: relative;
    margin-bottom: 12px;
  }

  .label {
    font-size: 12px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 12px;
    top: 13px;
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

const FloatSelect = props => {
  const [focus, setFocus] = useState(false);
  const { label, value, type, options } = props;
  let { placeholder } = props;
  if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  const labelClass = isOccupied ? 'label as-label' : 'label as-placeholder';

  // const requiredMark = required ? <span className="text-danger">*</span> : null;

  return (
    <FloatSelectContent>
      <div className='float-label' onBlur={() => setFocus(false)} onFocus={() => setFocus(true)}>
        <Select type={type}>
          {options?.map(el => (
            <Select.Option value={el.name} key={el.id}>
              {el.name}
            </Select.Option>
          ))}
        </Select>
        <label className={labelClass}>{isOccupied ? label : placeholder}</label>
      </div>
    </FloatSelectContent>
  );
};

export default FloatSelect;
