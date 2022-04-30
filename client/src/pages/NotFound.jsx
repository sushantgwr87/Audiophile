import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';

const NotFound = () => {
  return (
    <div className="notFound">
        <Icon name="notFound" width={"70%"} />
        <h3>Page Not Found</h3>
        <Link to={"/"}>
            Go Home
        </Link>
    </div>
  )
}

export default NotFound