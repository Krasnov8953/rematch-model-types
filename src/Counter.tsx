import React from 'react'

interface ICounterProps {
  counter: number;
}

export default function Counter({ counter }: ICounterProps) {
  return (
    <div>
      { counter }
    </div>
  )
}
