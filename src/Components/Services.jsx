import React from 'react'
import FireTruckIcon from '@mui/icons-material/FireTruck';
import SecurityIcon from '@mui/icons-material/Security';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const Services = () => {
    return (
        <>
            <div className="main_service_page">
                <div className="service_1">
                    <FireTruckIcon />
                    <p>Super Fast and Free Delivery</p>

                </div>
                <div className="service_2">
                    <div className="service_2a"> <SecurityIcon /> <p>Non-Contact Shipping</p> </div>
                    <div className="service_2a"> <AttachMoneyIcon /> <p>Money-back Guaranteed</p></div>
                </div>
                <div className="service_3">
                    <EnhancedEncryptionIcon />
                    <p>Super Secure Payment System</p>
                </div>


            </div>

        </>
    )
}

export default Services