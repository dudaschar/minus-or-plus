import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Input from 'src/components/Input/Input';
import Button from 'src/components/Button/Button';

import { Container } from './styles/Container';
import { Text } from './styles/Text';

function Start({
  number,
  handleNumberInput,
  isButtonEnabled,
  handleStart,
  ready,
}) {
  return (
    <>
      <Head>
        <title>Start Game | Minus or Plus</title>
      </Head>
      <Container>
        <Input
          value={number}
          placeholder='Enter a number'
          onChange={handleNumberInput}
        />
        <Button
          disabled={!isButtonEnabled}
          onClick={() => handleStart('manual')}
        >
          manual
        </Button>
        <Button disabled={!isButtonEnabled} onClick={() => handleStart('auto')}>
          automatic
        </Button>
        {!ready && <Text>Waiting a second player</Text>}
      </Container>
    </>
  );
}

Start.propTypes = {
  isButtonEnabled: PropTypes.bool.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleNumberInput: PropTypes.func.isRequired,
  handleStart: PropTypes.func.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default Start;
