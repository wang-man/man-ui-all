import * as  React from 'react';

interface propsType {
  message: string
}

// React.FunctionComponent是react自带的interface
const Hello:React.FC<propsType> = (props) =>{
  return (
    <h2>
      {props.message}
    </h2>
  )
}
Hello.defaultProps = {
  message: 'Hello'
}

export default Hello