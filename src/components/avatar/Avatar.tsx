// src\components\avatar\Avatar.tsx

import { UserCircle } from '../../assets/icons/userCircle'

export const Avatar: React.FC<{}> = () => {
  return <UserCircle
    pathClassName='stroke-primary'
  />;
};