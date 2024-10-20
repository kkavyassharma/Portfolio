import React from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './contact.css';

const ContactMe = () => {
    return (
        <footer className="bg-teal-100 bg-opacity-80 p-4">
            <div className="flex justify-center items-center space-x-8">
                <div className="flex items-center">
                    <a href="tel:+918302460749" className="text-teal-600">
                        <FaPhone className="h-6 w-6" />
                    </a>
                </div>
                <div className="flex items-center">
                    <a href="mailto:kkavyassharma@gmail.com" className="text-teal-600">
                        <FaEnvelope className="h-6 w-6" />
                    </a>
                </div>
                <div className="flex items-center">
                    <a href="https://github.com/kkavyassharma" target="_blank" rel="noopener noreferrer" className="text-teal-600">
                        <FaGithub className="h-6 w-6" />
                    </a>
                </div>
                <div className="flex items-center">
                    <a href="https://www.linkedin.com/in/kavya-sharma3012" target="_blank" rel="noopener noreferrer" className="text-teal-600">
                        <FaLinkedin className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default ContactMe;
