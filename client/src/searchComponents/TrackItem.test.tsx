import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TrackItem from './TrackItem.tsx';

describe('TrackItem Component', () => {
  it('renders track name and artist name', () => {
    const mockTrack = {
      album: {
        images: [{}, {}, { url: 'http://example.com/image.jpg' }],
      },
      artists: [{ name: 'Artist Name' }],
      name: 'Track Name',
    };

    render(<TrackItem track={mockTrack} index={0} />);

    expect(screen.getByText('Track Name')).toBeInTheDocument();
    expect(screen.getByText('Artist Name')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'http://example.com/image.jpg');
  });
});
