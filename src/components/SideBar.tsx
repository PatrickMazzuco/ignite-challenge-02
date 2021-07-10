import { useEffect, useState } from 'react';

import { api } from '../services/api';
import { Button } from './Button';
import { GenreResponseProps } from '../App';

import '../styles/sidebar.scss';

interface SideBarProps {
  selectedGenreId: number;
  onSelectedGenreIdChange: (genreId: number) => void;
  onSelectedGenreChange: (genre: GenreResponseProps) => void;
}

export function SideBar({
  selectedGenreId,
  onSelectedGenreIdChange,
  onSelectedGenreChange,
}: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        onSelectedGenreChange(response.data);
      });
  }, [selectedGenreId]);

  function handleGenreChange(genreId: number) {
    onSelectedGenreIdChange(genreId);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleGenreChange(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
