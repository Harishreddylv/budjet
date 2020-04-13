import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

import { MENUS, SCREENS } from '../../common/Constants';

const Menu = (props) => {

    const [menuList, setMenuList] = useState(MENUS);
    const [selectedMenu, setSelectedMenu] = useState(MENUS[0].name);

    useEffect(()=>{
        onClickMenu(MENUS[0].name)
    },[])

    const onClickMenu = ( menu) => {
        setSelectedMenu(menu);
        switch (menu) {
            case MENUS[0].name:
                return props.history.push(SCREENS.INCOME);
            case MENUS[1].name:
                return props.history.push(SCREENS.EXPENSES);
            case MENUS[2].name:
                return props.history.push(SCREENS.HISTORY);
            default: ;
        }
    }

    return (

        <div className='menu-container'>
            {
                menuList.length >= 1 ?
                    menuList.map((item, index) => {
                        return (
                            <div
                                className={selectedMenu === item.name ? 'active' : ''}
                                onClick={()=>onClickMenu(item.name)}
                                key={index}
                            >
                                {item.name}
                            </div>
                        )
                    })

                    :
                    ''
            }

        </div>
    )
}

export default withRouter(Menu);