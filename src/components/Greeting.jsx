import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomGreeting } from '../redux/features/greeting/greetingSlice';

function Greeting() {
  const { greeting } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(randomGreeting());
  }, [dispatch]);

  return (
    <>
      <p>{greeting}</p>
    </>
  );
}

export default Greeting;
