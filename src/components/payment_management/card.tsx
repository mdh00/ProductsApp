interface CardProps {
    icon: React.ReactNode; 
    title: string; 
    value: string; 
  }
  
  const Card: React.FC<CardProps> = ({ icon, title, value }) => {
    return (
      <div className="w-[780px] h-[155px] mr-[40px] relative left-0 top-0 bg-shadeofpurple border-2 border-darkmagenta rounded-[20px]">
        <div className="left-[15px] absolute text-black text-[36px] mt-[10px] font-semibold ">
          {icon}
        </div>
        <div className="left-[15px] top-[38px] mt-[15px] absolute text-black text-[22px] font-semibold f">
          {title}
        </div>
        <div className="left-[15px] top-[88px] absolute text-black text-2xl font-semibold ">
          {value}
        </div>
      </div>
    );
  };
  
  export default Card;
  