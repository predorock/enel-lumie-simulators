
const Mono = ({ className = "", fillClass = "fill-black" }) =>
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_14131_86179" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_14131_86179)">
      <path className={fillClass} fillRule="evenodd" clipRule="evenodd" d="M0.882667 18C0.396 18 0 17.5916 0 17.0866V7.91345C0 7.40981 0.396 7 0.882667 7H23.1173C23.6053 7 24 7.40981 24 7.91345V14.3504C24 14.854 23.6053 15.2638 23.1173 15.2638H13.9733V13.4355H22.2347V8.82689H1.76667V16.1731H23.8453V18H0.882667Z" />
    </g>
  </svg>

const Dual = ({ className = "", fillClass = "fill-black" }) =>
  <svg className={className} preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style={{ display: 'block' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Air_Conditioning">
      <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M5.69878 15C5.3135 15 5 14.6658 5 14.2526V6.74737C5 6.3353 5.3135 6 5.69878 6H23.3012C23.6876 6 24 6.3353 24 6.74737V12.0139C24 12.426 23.6876 12.7613 23.3012 12.7613H16.0622V11.2654H22.6024V7.49473H6.39861V13.5053H23.8776V15H5.69878Z" className={fillClass} />
      <rect id="Rectangle 22276" x="4" y="10" width="16" height="7" fill="var(--fill-0, white)" />
      <mask id="mask0_14156_79573" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="2" width="24" height="24">
        <rect id="Bounding box" y="2" width="24" height="24" fill="var(--fill-0, #D9D9D9)" />
      </mask>
      <g mask="url(#mask0_14156_79573)">
        <path id="vector_2" fillRule="evenodd" clipRule="evenodd" d="M0.772333 19C0.3465 19 0 18.6287 0 18.1696V9.83041C0 9.37255 0.3465 9 0.772333 9H20.2277C20.6547 9 21 9.37255 21 9.83041V15.6821C21 16.14 20.6547 16.5125 20.2277 16.5125H12.2267V14.8505H19.4553V10.6608H1.54583V17.3392H20.8647V19H0.772333Z" className={fillClass} />
      </g>
    </g>
  </svg>

const Trial = ({ className = "", fillClass = "fill-black" }) =>
  <svg className={className} preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style={{ display: 'block' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Air_Conditioning">
      <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M9.55167 11C9.2475 11 9 10.7401 9 10.4187V4.58128C9 4.26079 9.2475 4 9.55167 4H23.4483C23.7533 4 24 4.26079 24 4.58128V8.6775C24 8.99799 23.7533 9.25878 23.4483 9.25878H17.7333V8.09533H22.8967V5.16257H10.1042V9.83743H23.9033V11H9.55167Z" className={fillClass} />
      <rect id="Rectangle 22277" x="8" y="7" width="14" height="6" fill="var(--fill-0, white)" />
      <path id="vector_2" fillRule="evenodd" clipRule="evenodd" d="M3.69878 16C3.3135 16 3 15.6658 3 15.2526V7.74737C3 7.3353 3.3135 7 3.69878 7H21.3012C21.6876 7 22 7.3353 22 7.74737V13.0139C22 13.426 21.6876 13.7613 21.3012 13.7613H14.0622V12.2654H20.6024V8.49473H4.39861V14.5053H21.8776V16H3.69878Z" className={fillClass} />
      <rect id="Rectangle 22276" x="2" y="11" width="16" height="7" fill="var(--fill-0, white)" />
      <mask id="mask0_14156_79579" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="3" width="24" height="24">
        <rect id="Bounding box" y="3" width="24" height="24" fill="var(--fill-0, #D9D9D9)" />
      </mask>
      <g mask="url(#mask0_14156_79579)">
        <path id="vector_3" fillRule="evenodd" clipRule="evenodd" d="M0.698778 19C0.3135 19 0 18.6658 0 18.2526V10.7474C0 10.3353 0.3135 10 0.698778 10H18.3012C18.6876 10 19 10.3353 19 10.7474V16.0139C19 16.426 18.6876 16.7613 18.3012 16.7613H11.0622V15.2654H17.6024V11.4947H1.39861V17.5053H18.8776V19H0.698778Z" className={fillClass} />
      </g>
    </g>
  </svg>




// Generic Air Conditioning Icon (fallback)
export const AirConditioningIcon = ({
  type = "mono",
  className = "w-6 h-6",
  fillClass = "fill-black"
}) => {
  switch (type) {
    case "dual":
      return <Dual className={className} fillClass={fillClass} />;
    case "trial":
      return <Trial className={className} fillClass={fillClass} />;
    case "mono":
    default:
      return <Mono className={className} fillClass={fillClass} />;
  }
};

export default AirConditioningIcon;
