import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ url, method, body, onSubmit, onChange }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          name="url" 
          placeholder="URL" 
          value={url} 
          onChange={onChange} />

        <div>
          <input 
            type="radio" 
            id="get" 
            name="method" 
            value="GET" 
            checked={method === 'GET'} 
            onChange={onChange} />
          <label htmlFor="get">GET</label>

          <input 
            type="radio" 
            id="post" 
            name="method" 
            value="POST" 
            checked={method === 'POST'} 
            onChange={onChange} />
          <label htmlFor="post">POST</label>
            
          <input 
            type="radio" 
            id="put" 
            name="method" 
            value="PUT" 
            checked={method === 'PUT'} 
            onChange={onChange} />
          <label htmlFor="put">PUT</label> 
            
          <input 
            type="radio" 
            id="patch" 
            name="method" 
            value="PATCH" 
            checked={method === 'PATCH'} 
            onChange={onChange} /> 
          <label htmlFor="patch">PATCH</label>
            
          <input 
            type="radio" 
            id="delete" 
            name="method" 
            value="DELETE" 
            checked={method === 'DELETE'} 
            onChange={onChange} />
          <label htmlFor="delete">DELETE</label>
        </div>
        <button>Call</button>
        <textarea 
          placeholder="JSON Body" 
          name="body" 
          value={body} 
          onChange={onChange}></textarea>
      </form>
    </>
  );
};

Input.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
