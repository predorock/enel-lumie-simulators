import MultiRoomIcon from "../../assets/icons/multi-room.svg";

const RoomIcon = ({ className = "w-6 h-6" }) => {
  return <img src={MultiRoomIcon} className={className} alt="Multi Room Air Conditioning Icon" />;
};

export default RoomIcon;
