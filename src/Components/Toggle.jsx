import React, { useContext } from 'react';
import { createContext, useReducer} from 'react';

import { UilMoon } from '@iconscout/react-unicons';
import { UilSun } from '@iconscout/react-unicons';


export const ThemeContext = createContext();

const initialState = { dark: false };

const themeReduer = (state, action) => {

    if (action.type == 'toggle') return { dark: !state.dark }
    else return state;
}

export const ThemeProvider = (props) => {
    console.log(props);
    const [state, dispatch] = useReducer(themeReduer, initialState);

    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {props.children}
           

        </ThemeContext.Provider>


    );



};





const Toggle = () => {


    const theme = useContext(ThemeContext)
    const dark = theme.state.dark
    
    const handleClick = () => {
        theme.dispatch({type: 'toggle'})
    
    }

    return (
        <div className='relative border-b rounded-2xl border-solid border flex justify-between p-1 cursor-pointer ml-2'  onClick={handleClick}>
            <UilSun />
            <UilMoon />
            
            <div className={dark? 'rounded-2xl bg-sky-700 w-6 h-6 absolute ' :
            'rounded-2xl bg-sky-700 w-6 h-6 absolute right-[2px]'} >

            </div>
        </div>


    )
}

export default Toggle