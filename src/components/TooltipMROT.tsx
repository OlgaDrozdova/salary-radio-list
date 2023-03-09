import React, { useRef, useState } from 'react';
import '../styles/TooltipMROT.sass';
import { Overlay, Tooltip } from 'react-bootstrap';
import { AiOutlineInfoCircle, AiOutlineCloseCircle } from 'react-icons/ai';

interface ITooltipMROTProps {
  textMessage: string;
}
const TooltipMROT: React.FC<ITooltipMROTProps> = (props) => {
  const { textMessage } = props;
  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(false);
  const target = useRef(null);
  const canBeShown = useRef(true);

  const handleOnMouseLeave = () => {
    if (!fixed) {
      setShow(false);
      canBeShown.current = true;
    }
  };

  const handleOnClick = () => {
    if (fixed) {
      setFixed(false);
      setShow(false);
      canBeShown.current = false;
    } else {
      setFixed(true);
    }
  };

  const handleOnMouseOver = () => {
    canBeShown.current && setShow(true);
  };

  return (
    <>
      <span
        className='ml-2 tooltip-icon'
        ref={target}
        onMouseOver={handleOnMouseOver}
        onMouseLeave={handleOnMouseLeave}
        onClick={handleOnClick}
      >
        {fixed ? <AiOutlineCloseCircle /> : <AiOutlineInfoCircle />}
      </span>
      <Overlay target={target.current} show={show} placement='bottom-start'>
        {(props) => <Tooltip {...props}>{textMessage}</Tooltip>}
      </Overlay>
    </>
  );
};

export default TooltipMROT;
