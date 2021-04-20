import React, { useState } from 'react';

import Button from '../../../../Button/Button';
import FormSelect from '../../../../Form/FormSelect/FormSelect';
import InputNumber from '../../../../Form/Input/InputNumber';
import InputText from '../../../../Form/Input/InputText';
import {
  SaveStrategyInfo,
  SaveStrategyFormWrapper,
} from './SaveStrategyFormWrapper';

import selectStyles from '../../../../../config/form-styles';
import stakingPlans from '../../../../../config/strategy';

const SaveStrategyForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [stakingPlanType, setStakingPlanType] = useState(null);
  const [stakingPlanValue, setStakingPlanValue] = useState(null);

  const submit = () => {
    console.log(`Name: ${name}`);
    console.log(`Description: ${description}`);
    console.log(`Type: ${stakingPlanType.label}`);
    console.log(`Value: ${stakingPlanValue}`);
  };

  return (
    <SaveStrategyFormWrapper>
      <SaveStrategyInfo>
        Complete the fields below and click create to create a new strategy.
      </SaveStrategyInfo>
      <InputText onChange={setName} placeholder="Name" />
      <InputText onChange={setDescription} placeholder="Description" />
      <FormSelect
        selection={stakingPlanType}
        selections={stakingPlans}
        styles={selectStyles}
        toggleSelection={setStakingPlanType}
        placeholder="Staking Plan Name"
      />
      <InputNumber
        onChange={setStakingPlanValue}
        placeholder="Staking Plan Type"
        step={0.25}
      />
      <Button
        backgroundColor="#1b1e22"
        color="#dedcdc"
        fontSize="20px"
        marginTop="20px"
        onClick={submit}
      >
        Create
      </Button>
    </SaveStrategyFormWrapper>
  );
};

export default SaveStrategyForm;
