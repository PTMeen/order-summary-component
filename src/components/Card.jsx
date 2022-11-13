const Card = ({ children }) => {
  return (
    <div className="bg-white w-[90%] max-w-[340px] min-h-[500px] mx-auto rounded-2xl overflow-hidden">
      {children}
    </div>
  );
};
export default Card;
