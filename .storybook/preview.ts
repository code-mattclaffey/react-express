import type { Preview } from "@storybook/react";
import { Code } from "./components/CodeBlock";

import './styles/docs.css';

const customViewports = {  
  xxs: {
    name: 'xxs',    
    styles: {      
      width: '320px',      
      height: '100%',    
    }, 
  },
  xs: {    
    name: 'xs',    
    styles: {      
      width: '480px',      
      height: '100%',    
    },  
  },  
  sm: {    
    name: 'sm',    
    styles: {      
      width: '720px',      
      height: '100%',    
    },  
  },  
  md: {    
    name: 'md',    
    styles: {      
      width: '1080px',      
      height: '100%',    
    },  
  },  
  lg: {    
    name: 'lg',    
    styles: {      
      width: '1270px',      
      height: '100%',    
    },  
  },  
  xl: {    
    name: 'xl',    
    styles: {      
      width: '1620px',      
      height: '100%',    
    },  
  },  
  xxl: {    
    name: 'xxl',    
    styles: {      
      width: '2430px',      
      height: '100%',    
    },  
  },
};

const preview: Preview = {
  parameters: {
    docs: {
      components: {
        code: Code
      }
    },
    viewport: {
      viewports: customViewports,
    },
 
    
    options: {
      storySort: {
        order: ['Getting Started', 'Components']
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
