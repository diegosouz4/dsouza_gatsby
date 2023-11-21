import React from "react";

export default function Poemese({className}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="80" viewBox="0 0 120 80">
      <path fill="red" d="M51.2 35.4c.8-.1 1.5.1 2.2.7.7 0 1.5-.2 2.1-.7h1.9c.6.9.7 1.9.5 3 .2 1 .2 2.1 0 3.4.1.4.2.8.2 1.4.3.2.7.6 1.3 1.1.1.4-.1.9-.4 1.4v.5c-.5.1-1 .4-1.6.7-1.6-.7-3.6-.9-5.7-.5-1-.3-2.2-.4-3.6-.2-.4-.4-.9-.8-1.6-1.3l1.1-2.5.4.2c-.2-1.3-.1-2.7.2-4.3-.7-.3-1.2-.9-1.6-1.8.4-.2.7-.4.9-.9.8 0 1.7.2 2.7.5l.5-.2.5-.5zm-.1 3.6v1c-.9-.1-1.4.4-1.6 1.6-.1.8.1 1.5.5 2.1 1.4.1 2.1-.5 2-1.8.6-1 .3-1.4-.7-1.4.4-.7.4-1.3-.2-1.5zm3.9.5c-.7.7-.9 1.6-.5 2.5-.3 1 0 1.5.9 1.6.3-1.1.3-2.4 0-3.8l.2-.4H55v.1z" />
      <path className={className && className} d="M6.2 31.3c1.2.3 2.6.3 4.2 0 .8.2 1.7.3 2.8.2.6.4 1.2.6 1.8.6l.8-.2c.4.6.9 1 1.6 1.4 1.4 2.6 1.2 4.6-.6 5.9v.8c-1.7.9-3.5 1.1-5.5.6-.5.2-1 .4-1.6.8.2 1 .1 2.2-.2 3.6.5.3 1.1.4 1.8.2l1.2.4v1c-2.1.6-3.8.6-4.9 0-.8.5-1.7.5-2.8 0 .5-1.3 1.6-1.8 3.4-1.6.1-.5 0-1-.2-1.6.3-.3.4-.8 0-1.4.4-1.1.4-2.3-.2-3.6.2-.6.2-1.2 0-1.8.4-.8.4-1.7.2-2.8-.7-.1-1.5-.2-2.4-.2-.2-.5-.5-1-1-1.4l1.6-.9zm4.8 1.6c-.3.4-.7.6-1.2.6.2.9.2 1.9-.2 3v1.4l-.2 1.4c1.1 1.2 2 1.2 2.8.2 1.6.5 2.9 0 4-1.4.7-2.5.4-3.7-1-3.6l-.6-1.4c-.7-.1-1.4-.1-2.2.2l-1.4-.4zM23.4 35.4h1.1l2.1 1.1.4.2.4.2c.1.3.3.6.5.9l.5.2c.3 1.2.3 2.5.2 4.1l.2.7c-1.5 3.6-4.1 4.9-7.8 3.9-.4-.9-1.1-1.9-2.1-2.9-.1-.8 0-1.5.4-2.1v-.5l-.5-.7c.4-.5.7-1.2.7-2.1.4-.3.9-.7 1.2-1.2l1.2-.5c.3-.6.9-1 1.5-1.3zm-.5 3.6-2 .4c.1.7.1 1.4-.2 2.3.2.2.4.3.7.4-.1.7.2 1 1.1 1.1V43v.2-.2c.5 1.1.9 1.3 1.1.7 1.5-.2 2.3-1 2.1-2.5-.4-1.2-1.1-1.7-2.3-1.4-.1-.4-.2-.7-.5-.8zM37.3 35.4c2.4 0 4 1.1 5 3.4 1 1.2.9 2.3-.4 3.4 1.1 1.6 1 2.7-.4 3.2v.6c-1.7.9-3.6 1.1-5.7.7v-.5c-1.4-1-2.2-2.5-2.5-4.5l-.4-.7c.5-2.8 1.9-4.5 4.1-5 0-.2.1-.4.3-.6zm.2 2.9c-1.2.8-1.3 1.3-.5 1.6.6.9 1.5.7 2.7-.7-.4-.6-1.2-.9-2.2-.9zm2.2 3.8c-.7.4-1.6.6-2.5.5 0 .9.4 1.4 1.3 1.4 2.3-.9 2.7-1.5 1.2-1.9zM65.4 35.4c2.4 0 4 1.1 5 3.4 1 1.2.9 2.3-.4 3.4 1.1 1.6 1 2.7-.4 3.2v.6c-1.7.9-3.6 1.1-5.7.7v-.5c-1.4-1-2.2-2.5-2.5-4.5l-.5-.7c.5-2.8 1.9-4.5 4.1-5 .1-.2.2-.4.4-.6zm.2 2.9c-1.2.8-1.3 1.3-.5 1.6.6.9 1.5.7 2.7-.7-.5-.6-1.2-.9-2.2-.9zm2.1 3.8c-.7.4-1.6.6-2.5.5 0 .9.4 1.4 1.3 1.4 2.4-.9 2.8-1.5 1.2-1.9zM84 39c1-.1 1.5 0 1.6.2s-.4.8-1.4 1.8h-.8c-.3-.1-.9-.1-1.9 0-2.1-.1-2.8 0-2.1.1L78 41c-.1-.3-.1-.7.1-1.1.2-.5.5-.7.9-.8.2 0 .4 0 .7.1.6.1 1.2.1 1.8.1s1.5-.2 2.5-.3zM91.5 35.4c1.9.8 3.8.8 5.8 0 1 1.2 1.2 2.8.5 4.6-.6-.4-1.2-.4-1.8 0 2.3.8 3.1 2.6 2.5 5.3-.6.2-1.4.6-2.2 1.1-1.6.7-3.4.7-5.3 0-.7.3-1.5.5-2.4.5-.3-1.5-.4-3.3-.2-5.6l1.3-.4c-1.4-2.3-.8-4.1 1.8-5.5zm-.5 5.8c-.5 2.2.3 3.2 2.5 2.9l.2.7c.2-.8.8-1 1.8-.7 2.6-1.4 1.1-2.4-4.5-2.9zm2.7-2.7c-.3.9.4 1.3 2 1.1-.2-.8-.9-1.1-2-1.1zM107.2 35.4c2.4 0 4 1.1 5 3.4 1 1.2.9 2.3-.4 3.4 1.1 1.6 1 2.7-.4 3.2v.6c-1.7.9-3.6 1.1-5.7.7v-.5c-1.4-1-2.2-2.5-2.5-4.5l-.5-.7c.5-2.8 1.9-4.5 4.1-5 0-.2.1-.4.4-.6zm.1 2.9c-1.2.8-1.3 1.3-.5 1.6.6.9 1.5.7 2.7-.7-.4-.6-1.2-.9-2.2-.9zm2.2 3.8c-.7.4-1.6.6-2.5.5 0 .9.4 1.4 1.3 1.4 2.3-.9 2.7-1.5 1.2-1.9z"/>
    </svg>
  );
}