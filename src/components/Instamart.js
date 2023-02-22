import { useState } from "react";

const Section = ({ title, description,isVisible,setIsVisible }) => {

  return (
    <div className=" border border-black p-2 m-2">
      <h1 className="font-bold text-xl">{title}</h1>
      {!isVisible ? (
        <>
         <button className="underline" onClick={() => setIsVisible(true)}>
        
          show
        </button>
        
        </>
       
      ) : (
      <button className="underline" onClick={() => setIsVisible(false)}>
          hide
        </button>
      
        
      )}
      {isVisible && <div>{description}</div>}
    </div>
  );
};

const Instamart = () => {
  const [ visibleSection, setVisibleSection] = useState()

  return (
    <div>
      <Section
        title={"About Instamart"}
        description={
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
        }
        isVisible ={visibleSection ==='about'}
        
        setIsVisible ={() =>{
           setVisibleSection('about') 
        }
        
        }
      />
      <Section
        title={"Team Instamart"}
        description={
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
        }
        isVisible={visibleSection ==='team'}
        setIsVisible ={() =>{
            setVisibleSection('team')
        }}
      />
      <Section
        title={"Careers"}
        description={
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
        }
        isVisible={visibleSection==='career'}
        setIsVisible ={() =>{
          setVisibleSection('career')
        }}
      />
    </div>
  );
};

export default Instamart;
