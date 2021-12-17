import React from 'react';

function Contacts({item}){
   return (<div>
  <h3>{item.firstName} {item.lastName}</h3>
  <h3>{item.phone}</h3><hr/>
  </div>
)
}

export default Contacts;

