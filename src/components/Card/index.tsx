import React from 'react';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import styled from 'styled-components';

interface CardProps {
    icone: string;
    titulo: string;
}

const Card = ({ icone, titulo }: CardProps) => {
  const iconMap: Record<string, JSX.Element> = {
    HealthAndSafetyIcon: <HealthAndSafetyIcon  sx={{ fontSize: 70, color: '#0B3B60' }} />,
    CalendarMonthIcon: <CalendarMonthIcon sx={{ fontSize: 70, color: '#0B3B60' }}  />,
    NotificationsIcon: <NotificationsIcon  sx={{ fontSize: 70, color: '#0B3B60' }}  />,
    ThumbUpAltIcon: <ThumbUpAltIcon  sx={{ fontSize: 70, color: '#0B3B60' }} />,
  };

  const CardEstilizado = styled.div`
        background-color: var(--cinza-claro);
        display: flex;
        width: 282px;
        cursor: pointer;
        height: 132px;
        padding: 16px 8px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
        border-radius: 8px;
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.15);

        p {
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            margin: 0;
            color: var(--azul-escuro);
        }
  `

  return (
    <CardEstilizado>
      {iconMap[icone]} 
     <p>{titulo}</p> 
    </CardEstilizado>
  );
}

export default Card;
