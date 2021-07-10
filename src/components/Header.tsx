interface HeaderProps {
  genreTitle: string;
}

import '../styles/header.scss';

export function Header({ genreTitle }: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {genreTitle}</span>
      </span>
    </header>
  );
}
