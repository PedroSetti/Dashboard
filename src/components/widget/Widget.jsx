import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

export const Widget = () => {
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">25457</span>
        <span className="link">See all users</span>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUpIcon/>
          20%
        </div>
        <PersonOutlinedIcon className="icon"/>
      </div>
    </div>
  )
}
