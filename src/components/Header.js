import React from 'react';

// props to receive properties
// export default function Header(props) {
// Using "desestruturação"
// export default function Header({ title }) {
// children: Content received on the parent tag
export default function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}