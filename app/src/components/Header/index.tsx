interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header>
      <section>
        <h3 className="text-center p-6 text-3xl">{title}</h3>
      </section>
    </header>
  );
};
