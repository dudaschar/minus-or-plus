import React, { memo, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Input from 'src/components/Input/Input';
import Button from 'src/components/Button/Button';

import { Container } from './styles/Container';

function Start() {
  const router = useRouter();
  const [isButtonEnabled, setButtonEnabled] = useState(false);
  const [number, setNumber] = useState('');

  const handleNumberInput = ({ target }) => {
    const { value } = target;
    const resetValue = value === '' ? true : false;
    const inputValue = Number(value);

    if (resetValue) {
      return setNumber(value);
    }

    if (!inputValue) {
      return;
    }

    setNumber(inputValue);
  };

  const handleStart = (event) => {
    event.preventDefault();

    router.push(`/game?number=${number}`);
  };

  useEffect(() => {
    setButtonEnabled(Boolean(number));
  }, [number]);

  return (
    <>
      <Head>
        <title>Minus or Plus</title>
      </Head>
      <Container>
        <Input
          value={number}
          placeholder="Enter a number"
          onChange={handleNumberInput}
        />
        <Button
          disabled={!isButtonEnabled}
          onClick={handleStart}
        >
          start
        </Button>
      </Container>
    </>
  );
}

export default memo(Start);

