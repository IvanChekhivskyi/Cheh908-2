import React from "react";
import './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {
    
    
    if(!visible){
        
        return(
            <div className="myModal active" onClick={() => setVisible(true)}>

                <div className="myModalContent" onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>

            </div>
        );

    } 
    
    return(
        <div className="myModal">

            <div className="myModalContent">
                {children}
            </div>

        </div>
    );
    
};

export default MyModal;