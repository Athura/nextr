import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children }) => {
    const modalRoot = document.getElementById("modal");
    const el = document.createElement("div");

    useEffect(() => {
        modalRoot.appendChild(el);
    });

    useEffect(() => {
        return () => modalRoot.removeChild(el);
    });

    return createPortal(children, el);
};

