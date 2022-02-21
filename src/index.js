import loadComponents from './components';
import loadBlocks from './blocks';


export default (editor, opts = {}) => {
  const options = { ...{
    i18n: {},
    
    
  },  ...opts };


  loadComponents(editor, options);
  loadBlocks(editor, options);
 

  
  
};
