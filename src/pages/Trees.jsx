import React from 'react';
import '../styles/Trees.css';

export function Trees() {
  return (
    <div className='trees'>
        <iframe src="/trees_density.html"width={1000} height={500}></iframe>
    </div>
  );
}