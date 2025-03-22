import React from 'react';
import './no-data-found.css'
import {UI_TEXT} from "../../helpers/constants.ts";

const NoDataFound: React.FC = () => {
  return (
    <div className="no-data-container">
      <h2>{UI_TEXT.NO_DATA}</h2>
      <p>{UI_TEXT.ADJUST_SEARCH}</p>
    </div>
  );
};

export default NoDataFound;