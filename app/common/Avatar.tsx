type Props = {
  src: string;
  alt: string;
};

function Avatar(props: Props) {
  return (
    <img
      src={props.src}
      alt={props.src}
      className="rounded-full object-cover w-10 h-10"
    />
  );
}

export { Avatar };
