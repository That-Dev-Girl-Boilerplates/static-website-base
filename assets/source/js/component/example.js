/**
 * Example
 *
 * Simple example component to model real components from.
 */

const Example = ( () => {

  // Variables.
  const message = 'Hello world!';

  // Functions for this compoent.
  const print = ( message ) => {
    console.log( message );
  };

  // Do some things.
  print( message );

})();

export default Example;
