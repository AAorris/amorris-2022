interface Props {
  s: number;
  className?: string;
  children: JSX.Element;
}

const Avatar = ({ s, children, className }: Props): JSX.Element => {
  return (
    <div
      className={className || ""}
      style={{
        width: s,
        height: s,
        borderRadius: s / 2,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default Avatar;
