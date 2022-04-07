import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import InputTextElement, {
  InputTextIcon,
  InputTextContainer,
} from './InputText.styles';
import useElementSelect from '../../../hooks/useElementSelect';

type InputTextProps = {
  icon?: IconProp | null;
  onChange: (value: string) => void;
  placeholder?: string | undefined;
  type: string;
};

const InputText = (props: InputTextProps) => {
  const { icon, onChange, placeholder, type } = props;
  const [selected, setSelected] = useState<boolean>(false);
  const ref = useRef(null);

  useElementSelect(ref, () => setSelected(false));

  return (
    <InputTextContainer
      selected={selected}
      ref={ref}
      onFocus={() => setSelected(true)}
      onBlur={() => setSelected(false)}
    >
      <InputTextIcon selected={selected}>
        {icon ? <FontAwesomeIcon icon={icon} size="1x" /> : null}
      </InputTextIcon>
      <InputTextElement
        placeholder={placeholder}
        type={type}
        selected={selected}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputTextContainer>
  );
};

export default InputText;
