import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome color='#586A6A' style={{backgroundColor: 'transparent'}} />,
        cName: 'nav-text'
    },
    
    {
        title: 'Pacientes',
        path: '/pacientes',
        icon: <IoIcons.IoMdPeople color='#586A6A' style={{backgroundColor: 'transparent'}} />,
        cName: 'nav-text'
    },
    {
        title: 'Informes',
        path: '/informes',
        icon: <IoIcons.IoIosPaper color='#586A6A' style={{backgroundColor: 'transparent'}} />,
        cName: 'nav-text'
    }
]