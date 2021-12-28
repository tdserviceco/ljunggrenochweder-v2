import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollEffect } from '../../assets/custom-hooks';
const Structure = () => {
  useEffect(() => {

    document.title = 'Struktur av sidan!'
  })
  return (
    <section className='demo'>
      <h1>This is the main heading</h1>
      <h2>This is the second level heading</h2>
      <h3>This is the third level heading</h3>
      <h4>This is the fourth level heading</h4>
      <h5>This is the fifth level heading</h5>
      <h6>This is the sixth level heading</h6>
      <p>This is a paragraph with a few words.</p>
      <div className={`read-more ${useScrollEffect(120, 'fade-in')}`}>
        <p>This is a new paragraph. Its contents will start on a new line after the previous one. Again there is no limit to how many sentences this paragraph can contain. Note that the browser will ignore blank spaces        that         you        place        in       between        words       like this.
          It will also ignore anything you start on a new line like this sentence.
          And this one…
          And also spaces you put before lines like with this one.
        </p>
        <p>But it will start this on a new line!</p>
        <blockquote>
          <p>Indents done like this will work instead. Note that you still need to use the paragraph tag to start it on a new line.</p>
          <p>This is the next paragraph, and is also indented. Neat!</p>
          <p>Remember, use the blockquote to indent something only if you can't use CSS. The true purpose of the blockquote element is to mark text that is a long quote!</p>
        </blockquote>
        <ul role="list">
          A ul of role of list
          <li>List item</li>
          <li><Link to={"#"}>A list item with a Link</Link></li>
        </ul>
      </div>
    </section>
  );
};

export default Structure;