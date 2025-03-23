import {UI_TEXT} from "../../helpers/constants.ts";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>{UI_TEXT.LOADING}</p>
    </div>
  );
};

export default Loading;
