import React, { useContext, useState } from 'react';

import Button from '../../../../Button/Button';
import FormSelect from '../../../../Form/FormSelect/FormSelect';
import InputNumber from '../../../../Form/Input/InputNumber';
import InputText from '../../../../Form/Input/InputText';
import Loader from '../../../../Loader/Loader';
import SaveStrategySuccess from './SaveStrategySuccess/SaveStrategySuccess';
import {
  Error,
  SaveStrategyInfo,
  SaveStrategyFormWrapper,
} from './SaveStrategyFormWrapper';
import {
  StrategyBuilderContext,
  StrategyBuilderActionContext,
} from '../../../../../context/StrategyBuilderContext';
import { stakingPlans, visibilities } from '../../../../../config/strategy';

const SaveStrategyForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [stakingPlanType, setStakingPlanType] = useState(null);
  const [stakingPlanValue, setStakingPlanValue] = useState(null);
  const [visibility, setVisibility] = useState(null);
  const { error, saveLoading, saved } = useContext(StrategyBuilderContext);
  const { save } = useContext(StrategyBuilderActionContext);

  const submit = () => {
    const plan = {
      name: stakingPlanType.name,
      value: stakingPlanValue,
    };

    save(name, description, plan, visibility.name);
  };

  if (saved) {
    return <SaveStrategySuccess name={name} />;
  }

  return (
    <SaveStrategyFormWrapper>
      <Loader loading={saveLoading}>
        <SaveStrategyInfo>
          Complete the fields below and click create to create a new strategy.
        </SaveStrategyInfo>
        <InputText onChange={setName} placeholder="Name" />
        <InputText onChange={setDescription} placeholder="Description" />
        <FormSelect
          selection={stakingPlanType}
          selections={stakingPlans}
          toggleSelection={setStakingPlanType}
          placeholder="Staking Plan Type"
        />
        <InputNumber
          onChange={setStakingPlanValue}
          placeholder="Staking Plan Value"
          step={0.25}
        />
        <FormSelect
          selection={visibility}
          selections={visibilities}
          toggleSelection={setVisibility}
          placeholder="Visibility"
        />
        <Error>{error}</Error>
        <Button
          backgroundColor="#1b1e22"
          color="#dedcdc"
          fontSize="20px"
          marginTop="20px"
          onClick={submit}
        >
          Create
        </Button>
      </Loader>
    </SaveStrategyFormWrapper>
  );
};

export default SaveStrategyForm;
