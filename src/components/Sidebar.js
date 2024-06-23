import React, { useState } from 'react';
import './Sidebar.css';
import PropTypes from 'prop-types';

function Sidebar({ setFormation, formation }) {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menuName) => {
        if (openMenu === menuName) {
            setOpenMenu(null);
        } else {
            setOpenMenu(menuName);
        }
    };

    return (
        <div className="sidebar">
            <h3>Soccer Management Tool</h3>
            <ul>
                <li onClick={() => toggleMenu('formations')}>
                    Formations {openMenu === 'formations' ? '-' : '+'}
                </li>
                {openMenu === 'formations' && (
                    <ul>
                        <li className={formation === '4-4-2' ? 'active' : ''} onClick={() => setFormation('4-4-2')}>4-4-2</li>
                        <li className={formation === '4-3-3' ? 'active' : ''} onClick={() => setFormation('4-3-3')}>4-3-3</li>
                        <li className={formation === '5-3-2' ? 'active' : ''} onClick={() => setFormation('5-3-2')}>5-3-2</li>
                        <li className={formation === 'Custom' ? 'active' : ''} onClick={() => setFormation('Custom')}>Custom</li>
                    </ul>
                )}
                <li onClick={() => toggleMenu('enemyFormations')}>
                    Enemy Team Formations {openMenu === 'enemyFormations' ? '-' : '+'}
                </li>
                {openMenu === 'enemyFormations' && (
                    <ul>
                        <li onClick={() => setFormation('4-4-2')}>4-4-2</li>
                        <li onClick={() => setFormation('4-3-3')}>4-3-3</li>
                        <li onClick={() => setFormation('5-3-2')}>5-3-2</li>
                    </ul>
                )}
            </ul>
        </div>
    );
}

Sidebar.propTypes = {
    setFormation: PropTypes.func.isRequired,
    formation: PropTypes.string.isRequired
};

export default Sidebar;
