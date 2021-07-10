import { useState } from 'react';

import { Content } from '../components/Content';
import { SideBar } from '../components/SideBar';

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function Home() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        onSelectedGenreIdChange={(genreId) => setSelectedGenreId(genreId)}
        onSelectedGenreChange={(genre) => setSelectedGenre(genre)}
      />
      <Content
        selectedGenreId={selectedGenreId}
        selectedGenre={selectedGenre}
      />
    </div>
  );
}
