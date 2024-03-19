/* These React elements are constructed using JSX, 
a distinctive feature of React that blends HTML 
syntax with JavaScript functions.

However, due to JSX’s nature as JavaScript functions 
(as opposed to HTML), there are some syntactical differences. 
Notably, single-tag elements, like the img element, must be 
self-closing and terminate with a forward slash /: 

*/

import './eu4.jpg'

const Elements = () => {

  return (
    <div>
        <h2 style={{
            fontSize: 24,
            color:'blue',
            margin: '0 auto', 
            textAlign: 'center'}}
            >Elements</h2>
            <h3>My Header</h3>
            <p>My Paragraph</p>
            <button>My Button</button><br/>
            <img src='./eu4.jpg' />
            <br/>
            <hr />
    <>
     <h1>My Fragments</h1>
     <p>React provides a special element known as a fragment to address the requirement of returning all elements within a single parent component. This is essential as React mandates a single “parent” for returned elements. </p>
   </>
    </div>

  )
}

export default Elements