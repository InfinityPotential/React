import { Button, Modal } from "antd";
import { useState } from "react";


function AppWorks (){

    const [isModalOpen, setIsModalOpen] = useState(false);
      
    const showModal = () => {
        setIsModalOpen(true);
    };
      
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return(
        <div className="block worksBlock">
            
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it works</h2>
                    <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                </div>
                <div className="contentHolder">
                    <Button type="primary" onClick={showModal}>
                        <i className="fas fa-play"></i>
                    </Button>
                </div>
                <Modal 
                    title="Basic Modal" 
                    open={isModalOpen}
                    onCancel={handleCancel}
                    footer={null}
                >
                <iframe title="Woocommerce Tutorial" width="100%" height="350" src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"></iframe>
                </Modal>
            </div>
            
        </div>
    );
}

export default AppWorks;